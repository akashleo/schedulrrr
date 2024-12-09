"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import {useForm} from "react-hook-form"
import {zodResolver } from "@hookform/resolvers/zod"


const Dashboard = () => {
  const [isLoaded, user] = useUser();
  console.log(user);

useForm({
    resolver: zodResolver(usernameSchema)
})
    


  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome! {user?.firstName}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader> 
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 "> 
            <div>
              <div className="flex items-center gap-2">
                <span>{window?.location.origin}/</span>
                <Input placeholder="username"/>
              </div>
            </div>
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
