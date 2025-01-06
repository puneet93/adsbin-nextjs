import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BarChartStatistics } from "./BarChartStatistics";

export default function Statistics(){
    return(
        <div className="p-5">
            <div className="flex items-center mb-5 justify-between">
                <h3 className="text-black text-2xl font-outfit tracking-tight">Statistics</h3>
                <Button asChild variant={'outline'} className="px-5 py-2.5 tracking-wider border-0 uppercase !bg-transparent shadow-none text-base font-extrabold text-body">
                    <Link href={'/'}>see more <CircleArrowRight  /></Link>
                </Button>
            </div>

            <BarChartStatistics />
        </div>
    )
}