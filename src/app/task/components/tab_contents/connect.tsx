"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Mail, Search } from "lucide-react";
import Image from "next/image";

export default function Connect() {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-1 justify-start items-center p-2 border-2 rounded-md w-full">
          <Search />
          <Input
            type="text"
            placeholder="Search Integrations"
            className="border-0"
          />
        </div>

        <div className="border-2 rounded-md p-4">
          <div className="flex items-start gap-6">
            <img
              className="w-[100px] aspect-square"
              src="/assets/svg/envelope.svg"
            />

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-4">
                <span className="">Email</span>
                <span className="flex gap-2 py-2 px-4 rounded-full text-[#14803c] bg-green-100">
                  Active
                  <Check color="#14803c" />
                </span>
              </div>
              <span className="text-[14px]">
                Recieve an email every time a user submit their answer
              </span>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-md p-4">
          <div className="flex items-start gap-6">
            <img
              className="w-[100px] aspect-square"
              src="/assets/svg/google_sheets.svg"
            />

            <div className="flex flex-col gap-2 mt-2 grow">
              <div className="flex items-center">
                <span className="">Google Sheets</span>
              </div>
              <span className="text-[14px]">
                Send your data straight to Googlr Sheets. Automatically syncs as
                results come in.
              </span>
            </div>

            <div className="my-auto">
              <Button>Connect</Button>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-md p-4">
          <div className="flex items-start gap-6">
            <img
              className="w-[100px] aspect-square"
              src="/assets/svg/excel.svg"
            />

            <div className="flex flex-col gap-2 mt-2 grow">
              <div className="flex items-center">
                <span className="">Excel</span>
              </div>
              <span className="text-[14px]">
                Send your typeform responses to Excel Online. Turn feedpack into
                graphs, support quesries into workflows, and much more
              </span>
            </div>

            <div className="my-auto">
              <Button>Connect</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
