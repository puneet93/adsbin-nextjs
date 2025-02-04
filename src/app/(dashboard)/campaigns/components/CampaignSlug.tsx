"use client"

import { Button } from "@/components/ui/button";
import StepFirst from "./StepFirst";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepSecond from "./StepSecond";
import StepSix from "./StepSix";
import StepThird from "./StepThird";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CampaignSlug() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  
  return (
    <div className="flex flex-col gap-2.5 mt-10">
      {!showPreview && (
        <div className="py-5 flex items-center gap-2.5 justify-end font-semibold text-base ml-auto tracking-wide">
          <div className={'flex  flex-col gap-1 items-center justify-center px-1.5'}>
            <span className={`h-1.5 w-14 flex-grow ${activeIndex === 1 ? "bg-adsbin-green-500" : 'bg-adsbin-grey-100' }`}></span>
            <span className={activeIndex === 1 ? 'text-black' : 'text-adsbin-neutral-400'}>Details</span>
          </div>
          <div className={'flex  flex-col gap-1 items-center justify-center px-1.5'}>
            <span className={`h-1.5 w-14 flex-grow ${activeIndex === 2 ? "bg-adsbin-green-500" : 'bg-adsbin-grey-100' }`}></span>
            <span className={activeIndex === 2 ? 'text-black' : 'text-adsbin-neutral-400'}>Media</span>
          </div>
          <div className={'flex  flex-col gap-1 items-center justify-center px-1.5'}>
            <span className={`h-1.5 w-14 flex-grow ${activeIndex === 3 ? "bg-adsbin-green-500" : 'bg-adsbin-grey-100' }`}></span>
            <span className={activeIndex === 3 ? 'text-black' : 'text-adsbin-neutral-400'}>QR Code</span>
          </div>
          <div className={'flex  flex-col gap-1 items-center justify-center px-1.5'}>
            <span className={`h-1.5 w-14 flex-grow ${activeIndex === 4 ? "bg-adsbin-green-500" : 'bg-adsbin-grey-100' }`}></span>
            <span className={activeIndex === 4 ? 'text-black' : 'text-adsbin-neutral-400'}>Locations</span>
          </div>
          <div className={'flex  flex-col gap-1 items-center justify-center px-1.5'}>
            <span className={`h-1.5 w-14 flex-grow ${activeIndex === 5 ? "bg-adsbin-green-500" : 'bg-adsbin-grey-100' }`}></span>
            <span className={activeIndex === 5 ? 'text-black' : 'text-adsbin-neutral-400'}>Dates</span>
          </div>
        </div>
      )}

      {activeIndex === 1 && <StepFirst />}
      {/*{activeIndex === 2 && <StepSecond />}*/}
      {activeIndex === 2 && <StepThird showPreview={showPreview} getPreview={() => setShowPreview(!showPreview)} />}
      {activeIndex === 4 && <StepFour />}
      {activeIndex === 4 && <StepFive />}
      {activeIndex === 5 && <StepSix />}


      {activeIndex <= 5 ? (
        <div className="flex items-center justify-between md:px-0 px-5">
          {/*{activeIndex === 2 && (*/}
          {/*  !showPreview &&*/}
          {/*  <Button*/}
          {/*    variant={"outline"}*/}
          {/*    className="text-base anim-pulse !shadow-none border-0 md:border md:border-adsbin-grey-200 !h-9 font-bold text-black"*/}
          {/*    onClick={() => setShowPreview(!showPreview)}*/}
          {/*  >*/}
          {/*    <span className="flex items-center gap-2.5">*/}
          {/*      Preview <Eye color="#606060" size={16} />*/}
          {/*    </span>*/}
          {/*  </Button>*/}
          {/*)}*/}

          {/*<Button variant={'outline'} className="p-0 border-0 ml-auto anim-pulse !bg-transparent shadow-none text-base font-bold text-black" onClick={() => setActiveIndex(activeIndex + 1)}>*/}
          {/*  Next step <ArrowRight className="w-5 h-5" />*/}
          {/*</Button>*/}
          <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none ml-auto" onClick={() => setActiveIndex(activeIndex + 1)}>
            Next step <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      ):(
        <div className="flex items-center justify-between md:px-0 px-5">
          <Button
            variant={"outline"}
            className="p-0 border-0 anim-pulse !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"
          >
            <ArrowLeft color="#000" className="w-5 h-5" /> Go back
          </Button>
          <Button asChild className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
            <Link href={'/billing'}>Go to Checkout <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      )}     
      
    </div>
  );
}
