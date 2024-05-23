"use client";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeIcon, Slash } from "lucide-react";
import Connect from "./components/tab_contents/connect";
import Results from "./components/tab_contents/results/results";
import Menu from "./components/tab_contents/menu";

export default function Task() {
  return (
    <>
      <div>
        <Tabs
          defaultValue="create"
          className="min-h-screen flex justify-start flex-col"
        >
          <div className="w-full flex justify-between px-8 pb-2 pt-6 border-b bg-slate-100/25">
            <Breadcrumb className="flex justify-center">
              <BreadcrumbList className="text-[16px]">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">My Workspace</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <span>/</span>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {/* <BreadcrumbLink href="#">My new form</BreadcrumbLink> */}
                  <BreadcrumbPage className="font-[600]">
                    My new form
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <TabsList className=" bg-slate-100/25 w-max">
              <TabsTrigger
                value="create"
                className="text-[16px] data-[state=active]:shadow-none data-[state=active]:bg-slate-100/25 data-[state=active]:border-b-slate-900 data-[state=active]:border-b-2 rounded-none py-4 px-6"
              >
                Create
              </TabsTrigger>
              <TabsTrigger
                value="connect"
                className="text-[16px] data-[state=active]:shadow-none data-[state=active]:bg-slate-100/25 data-[state=active]:border-b-slate-900 data-[state=active]:border-b-2 rounded-none py-4 px-6"
              >
                Connect
              </TabsTrigger>
              <TabsTrigger
                value="share"
                className="text-[16px] data-[state=active]:shadow-none data-[state=active]:bg-slate-100/25 data-[state=active]:border-b-slate-900 data-[state=active]:border-b-2 rounded-none py-4 px-6"
              >
                Share
              </TabsTrigger>
              <TabsTrigger
                value="results"
                className="text-[16px] data-[state=active]:shadow-none data-[state=active]:bg-slate-100/25 data-[state=active]:border-b-slate-900 data-[state=active]:border-b-2 rounded-none py-4 px-6"
              >
                Results
              </TabsTrigger>
            </TabsList>

            <div className="flex justify-center items-center gap-4">
              <Button variant="outline" size="icon">
                <EyeIcon className="h-4 w-4" />
              </Button>

              <Button>Publish</Button>

              <Menu/>
            </div>
          </div>

          <div className="mt-10 mx-[50px] 2xl:mx-[300px]">
            <TabsContent value="create" className="grow">
              Lorem ipsum dolor sit Create.
            </TabsContent>
            <TabsContent value="connect" className="grow">
              <Connect />
            </TabsContent>
            <TabsContent value="share" className="grow">
              Lorem ipsum dolor sit Share.
            </TabsContent>
            <TabsContent value="results" className="grow">
              <Results />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}
