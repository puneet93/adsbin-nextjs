import {PieChartFun} from "@/components/PieChart";
import Link from "next/link";
import {HelpingHand} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function AdvertiseBreakdown(){
    return(
        <div className={'lg:px-8 px-5'}>
            <div className={'flex items-center justify-between'}>
                <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                    Advertisers breakdown
                </h3>
                <Button
                    asChild
                    className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none"
                >
                    <Link href={"/"}>
                        Help <HelpingHand size={24} color="#fff" />
                    </Link>
                </Button>
            </div>

            <div className="pt-5 md:mb-0 mb-8">
                <PieChartFun />
            </div>
        </div>
    )
}