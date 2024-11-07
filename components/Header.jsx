import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";

const Header = () => {
  return (
    <nav className="mx-auto px-4 py-2 flex justify-between">
      <Link href="/home" className="flex items-center">
        <Image
          src="/logo.png"
          width="150"
          height="60"
          alt="Schedulerr logo"
          className="h-16 w-auto"
        />
      </Link>
      <div>
        <Link href="/events?create=true">
        <Button className="flex items-center gap-2"><PenBox size={18}/> Create Workflow</Button>
        </Link>
        <Button variant="outline">Log In</Button>
      </div>
    </nav>
  );
};

export default Header;
