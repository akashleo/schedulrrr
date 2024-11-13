import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container px-4 py-16 mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-xl font-extrabold pb-6 gradient-title">
            Simplify your scheduling
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Scheduler helps you to manage your time effectively, create events,
            set your availability, and let other book time with you seamlessly
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="Scheduling Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
