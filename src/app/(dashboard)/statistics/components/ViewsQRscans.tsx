import { BarChartStatistics } from "./BarChartStatistics";

export default function ViewsQRscans(){
    return(
        <div className="p-5 border-b border-adsbin-grey-100">
            <div className="flex items-center mb-5 justify-between">
                <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight">Views vs QR scans</h3>
            </div>

            <div className="px-7">
                <BarChartStatistics />
            </div>
        </div>
    )
}