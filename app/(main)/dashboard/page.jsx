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

const {register, handleSubmit, setValue} = useForm({
    resolver: zodResolver(usernameSchema)
})

useEffect(()=>{
    setValue("username", user?.username)
},[isLoaded])
    


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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 "> 
            <div>
              <div className="flex items-center gap-2">
                <span>{window?.location.origin}/</span>
                <Input {...register("username")} placeholder="username"/>
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
