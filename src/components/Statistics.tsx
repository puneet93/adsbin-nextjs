import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BarChartStatistics } from "./BarChartStatistics";

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
          className="px-5 anim-pulse py-2.5 tracking-wider border-0 uppercase !bg-transparent shadow-none text-base font-extrabold text-adsbin-grey-1000"
        >
          <Link href={"/"}>
            see more <CircleArrowRight />
          </Link>
        </Button>
      </div>

      <div className="px-7">
        <BarChartStatistics />
      </div>
    </div>
  );
}
