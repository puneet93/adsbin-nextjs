"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "./DataTable";
import { useState } from "react";
import Preview from "./Preview";

export default function CampaignDataTable() {
  const [show, setShow] = useState(false);
  const handlePreviewClick = () => {
    setShow(!show);
  };
  return !show ? (
    <div className="border-t border-adsbin-grey-100">
      <div className="md:py-5 md:pr-3.5 md:pl-12 p-4 flex md:flex-row flex-col md:items-center gap-2.5">
        <div className="flex items-center pr-5 justify-between flex-grow">
          <h5 className="text-adsbin-grey-1000 text-base tracking-wide">
            No selection
          </h5>
        </div>

        <form action="/" className="relative">
          <Input
            placeholder="Search Term"
            className="rounded-full pr-10 font-semibold min-h-10 min-w-56"
          />
          <Button
            variant={"link"}
            className="p-0 absolute top-0.5 right-0 min-w-12"
          >
            <Search color="#415B41" size={32} />
          </Button>
        </form>
      </div>

      {/* <DataTable getValue={() => setShow(!show)} /> */}
      <DataTable onPreviewClick={handlePreviewClick} />
    </div>
  ):(
    <Preview getValue={() => setShow(!show)} />
  );
}
