import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {LineChartFun} from "@/components/LineChart";
import * as React from "react";

export default function Statistics() {
  return (
    <div>
      <div className="flex items-center mb-3 justify-between">
        <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight">
          Statistics
        </h3>
        <Button
          asChild
          variant={"outline"}
          className="px-5 anim-pulse py-2.5 tracking-wider border-0 uppercase !bg-transparent shadow-none text-xs font-extrabold text-adsbin-grey-1000"
        >
          <Link href={"/statistics"}>
            see more <CircleArrowRight />
          </Link>
        </Button>
      </div>

        <div className={'md:px-8'}>
            <LineChartFun />
        </div>
      {/*<div className="px-7">*/}
      {/*  <BarChartStatistics />*/}
      {/*</div>*/}
    </div>
  );
}
