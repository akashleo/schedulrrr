import { auth, currentUser } from "@clerk/nextjs/server";
import { createClerkClient } from "@clerk/backend";
import { db } from "@/lib/prisma";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const checkUser = async () => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return null;
  }

  try {
    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    await clerkClient.users.updateUser(user.id, {
      username: name.split(" ").join("-") + user.id.slice(-4),
    });

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        username: name.split(" ").join("-") + user.id.slice(-4),
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
};
