import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/testimonials";

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: "Create Events",
      description: "Easily set up and customize your event types",
    },
    {
      icon: Clock,
      title: "Manage Availability",
      description: "Define your availability to streamline scheduling",
    },
    {
      icon: LinkIcon,
      title: "Custom Links",
      description: "Share your personalized scheduling link",
    },
  ];

  const howItWorks = [
    { step: "Sign Up", description: "Create your free Schedulrr account" },
    {
      step: "Set Availability",
      description: "Define when you're available for meetings",
    },
    {
      step: "Share Your Link",
      description: "Send your scheduling link to clients or colleagues",
    },
    {
      step: "Get Booked",
      description: "Receive confirmations for new appointments automatically",
    },
  ];

  return (
    <main className="container px-4 py-16 mx-auto">
      <div className="flex flex-col lg:flex-row  items-center justify-between mb-24 gap-12">
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
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-blue-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          What our users say
        </h2>
        <TestimonialCarousel />
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">
          {howItWorks.map((step, index) => {
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-blue-600 text xl">
                    {index+1}
                  </span>
                </div>
                <h3>{step.step}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div>
        <h2> Ready to simplify your scheduling
        </h2>
        <p> Join thousands of coders in scheduling their time</p>
        </div>
      </div>
    </main>
  );
}
re