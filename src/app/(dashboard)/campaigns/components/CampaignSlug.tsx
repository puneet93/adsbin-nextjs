"use client"

import { Button } from "@/components/ui/button";
import StepFirst from "./StepFirst";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepThird from "./StepThird";
import { ArrowLeft, ArrowRight} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import StepQR from "@/app/(dashboard)/campaigns/components/StepQR";

export default function CampaignSlug() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  
  return (
    <div className="flex flex-col gap-2.5 mt-10">
      {!showPreview && (
        <div className="py-5 px-5 flex items-center justify-end font-semibold text-xs ml-auto font-outfit tracking-wide leading-10">
          <div className={'flex flex-col gap-2.5 items-center justify-center w-70'}>
            <span className={`h-1.5 w-full flex-grow bg-adsbin-neutral-600 relative after:w-3.5 after:z-10 after:h-3.5 after:absolute after:left-0 after:right-0 after:-top-1 after:rounded-full after:m-auto before:bg-adsbin-green-500 before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:transition-all after:transition-all ${activeIndex >= 1 ? "after:bg-adsbin-green-500" : 'after:bg-adsbin-neutral-600' } ${activeIndex === 1 && "after:bg-black after:shadow-indicator"}`}></span>
            <span className={activeIndex === 1 ? 'text-black' : 'text-adsbin-neutral-400'}>Details</span>
          </div>
          <div className={'flex  flex-col gap-2.5 items-center justify-center w-70'}>
            <span className={`h-1.5 w-full flex-grow bg-adsbin-neutral-600 relative after:w-3.5 after:z-10 after:h-3.5 after:absolute after:left-0 after:right-0 after:-top-1 after:rounded-full after:m-auto before:bg-adsbin-green-500 before:absolute before:top-0 before:-left-1/2 before:h-full before:transition-all ${activeIndex >= 2 ? "after:bg-adsbin-green-500 before:w-full" : 'after:bg-adsbin-neutral-600 before:w-0' } ${activeIndex === 2 && "after:bg-black after:shadow-indicator"}`}></span>
            <span className={activeIndex === 2 ? 'text-black' : 'text-adsbin-neutral-400'}>Media</span>
          </div>
          <div className={'flex  flex-col gap-2.5 items-center justify-center w-70'}>
            <span className={`h-1.5 w-full flex-grow bg-adsbin-neutral-600 relative after:w-3.5 after:z-10 after:h-3.5 after:absolute after:left-0 after:right-0 after:-top-1 after:rounded-full after:m-auto before:bg-adsbin-green-500 before:absolute before:top-0 before:-left-1/2 before:h-full before:transition-all ${activeIndex >= 3 ? "after:bg-adsbin-green-500 before:w-full" : 'after:bg-adsbin-neutral-600 before:w-0' } ${activeIndex === 3 && "after:bg-black after:shadow-indicator"}`}></span>
            <span className={activeIndex === 3 ? 'text-black' : 'text-adsbin-neutral-400'}>QR Code</span>
          </div>
          <div className={'flex  flex-col gap-2.5 items-center justify-center w-70'}>
            <span className={`h-1.5 w-full flex-grow bg-adsbin-neutral-600 relative after:w-3.5 after:z-10 after:h-3.5 after:absolute after:left-0 after:right-0 after:-top-1 after:rounded-full after:m-auto before:bg-adsbin-green-500 before:absolute before:top-0 before:-left-1/2 before:h-full before:transition-all ${activeIndex >= 4 ? "after:bg-adsbin-green-500 before:w-full" : 'after:bg-adsbin-neutral-600 before:w-0' } ${activeIndex === 4 && "after:bg-black after:shadow-indicator"}`}></span>
            <span className={activeIndex === 4 ? 'text-black' : 'text-adsbin-neutral-400'}>Locations</span>
          </div>
          <div className={'flex  flex-col gap-2.5 items-center justify-center w-70'}>
            <span className={`h-1.5 w-full flex-grow bg-adsbin-neutral-600 relative after:w-3.5 after:z-10 after:h-3.5 after:absolute after:left-0 after:right-0 after:-top-1 after:rounded-full after:m-auto before:bg-adsbin-green-500 before:absolute before:top-0 before:-left-1/2 before:h-full before:transition-all ${activeIndex >= 5 ? "after:bg-adsbin-green-500 before:w-full" : 'after:bg-adsbin-neutral-600 before:w-0' } ${activeIndex === 5 && "after:bg-black after:shadow-indicator"}`}></span>
            <span className={activeIndex === 5 ? 'text-black' : 'text-adsbin-neutral-400'}>Dates</span>
          </div>
        </div>
      )}

      {activeIndex === 1 && <StepFirst />}
      {/*{activeIndex === 2 && <StepSecond />}*/}
      {activeIndex === 2 && <StepThird showPreview={showPreview} getPreview={() => setShowPreview(!showPreview)} />}
      {activeIndex === 3 && <StepQR getPreview={() => setShowPreview(!showPreview)} />}
      {activeIndex === 4 && <StepFour />}
      {activeIndex === 5 && <StepFive />}
      {/*{activeIndex === 5 && <StepSix />}*/}


      {activeIndex <= 4 ? (
        <div className="flex items-center justify-between px-5">
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
        <div className="flex items-center justify-between px-5">
          <Button
            variant={"outline"}
            className="p-0 border-0 anim-pulse !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"
          >
            <ArrowLeft color="#000" className="w-5 h-5" /> Go back
          </Button>
          <Button asChild className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
            <Link href={'/campaigns'}>Go to Checkout <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      )}     
      
    </div>
  );
}
