"use client";

import {Info, X} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function DurationPopupControls({title, content}:{title:string, content:string}) {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="md:absolute md:left-full top-0 shadow-container sm:max-w-96 sm:w-full bg-white z-20">
        <div className="px-5 py-4 flex items-center justify-between text-adsbin-evergreens gap-4 border-b border-adsbin-grey-100">
          <h6 className="tracking-tight font-semibold flex items-center gap-1.5">
            <Info />
            {title}
          </h6>
          <Button
            size={"icon"}
            variant={"link"}
            className="!h-auto !w-auto"
            onClick={() => setShow(!show)}
          >
            <X />
          </Button>
        </div>
        <div className="py-2.5 px-5 flex flex-col gap-2.5">
          <div className="flex flex-col gap-5 text-adsbin-grey-1000 font-semibold text-sm">
            <p dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>
      </div>
    )
  );
}
