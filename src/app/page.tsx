"use clinet";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grow">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="font-[700] text-[34px] w-max">Home Page</h1>
            <Button asChild className="w-max gap-2">
              <Link href="/task">Go main tasks <ArrowRight/> </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
