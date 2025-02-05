import {LineChartFun} from "@/components/LineChart";

export default function Overview(){
    return(
        <div className={'p-5 border-b border-adsbin-grey-100 mb-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Overview
            </h3>

            <div className={'md:px-8 md:pt-10 py-5'}>
                <LineChartFun />
            </div>
        </div>
    )
}