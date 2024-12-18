"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUsername() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const existingUsername = await db.user.findUnique({
    where: { username },
  });

  await db.user.update({
    where: { clerUserId: userId },
    data: { username },
  });

  await clerkClient.users.updateUser(userId, { username });

  return { sucess: true };
}
