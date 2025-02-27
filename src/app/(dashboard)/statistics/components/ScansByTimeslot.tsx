import {PieChartTimeslot} from "@/components/PieChartTimeslot";

export default function ScansByTimeslot(){
    return(
        <div className={'lg:px-8 px-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Scans by timeslot
            </h3>

            <div className="py-12">
                <PieChartTimeslot />
            </div>
        </div>
    )
}