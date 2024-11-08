import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="mx-auto px-4 py-2 flex justify-between">
      <div>
      <Link href="/home" className="flex items-center">
        <Image
          src="/logo.png"
          width="150"
          height="60"
          alt="Schedulerr logo"
          className="h-16 w-auto"
        />
      </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link href="/events?create=true">
          <Button className="flex items-center gap-2">
            <PenBox size={18} /> 
             <span className="hidden sm:inline">Create Event</span>
          </Button>
        </Link>
        <SignedOut className="inline-block">
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Log In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn className="inline-block">
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
