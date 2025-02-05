import {PieChartFun} from "@/components/PieChart";

export default function AdvertiseBreakdown(){
    return(
        <div className={'lg:px-8 px-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Advertisers breakdown
            </h3>

            <div className="pt-5 md:mb-0 mb-8">
                <PieChartFun />
            </div>
        </div>
    )
}