import Information from "@/components/Information";
import PopupControls from "@/components/PopupControls";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import * as React from "react";
import ScansByTimeslot from "@/app/(dashboard)/statistics/components/ScansByTimeslot";
import ScansByDay from "@/app/(dashboard)/statistics/components/ScansByDay";
// import ScansByDevice from "@/app/(dashboard)/statistics/components/ScansByDevice";
import ScansPerLanguage from "@/app/(dashboard)/statistics/components/ScansPerLanguage";
import Segments from "@/app/(dashboard)/statistics/components/Segments";
import ScansPerLocation from "@/app/(dashboard)/statistics/components/ScansPerLocation";
import {LineChartFun} from "@/components/LineChart";

export default function page() {
  return (
    <>
      <Information
        goBack={false}
        content="Here you can view and analyze all your key data insights in one place."
        label="STATISTICS"
        align="top"
        title="Statistics Dashboard"
      >
          <div className={'flex justify-end md:py-10 py-2'}>
              <Select>
                  <SelectTrigger className="md:w-80 w-full h-[40px] text-adsbin-evergreens">
                      <SelectValue placeholder="All Campaigns" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                  </SelectContent>
              </Select>
          </div>
      </Information>

      <div className={'px-5 pt-5 pb-5 border-b border-adsbin-grey-100 mb-5'}>
          <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
              Total Scans
          </h3>

          <div className={'md:px-8 md:pt-10 py-5'}>
              <LineChartFun />
          </div>
      </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <div>
                <ScansByDay />
            </div>

            <div>
                <ScansByTimeslot />
            </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <div>
                {/*<ScansByDevice />*/}
                <Segments />
            </div>

            <div>
                <ScansPerLanguage />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10">
            {/*<div>*/}
            {/*    <Segments />*/}
            {/*</div>*/}

            <div>
                <ScansPerLocation />
            </div>
        </div>

      <PopupControls title="Your Campaign Statistics" content="Here you can see all your campaign statistics." />
    </>
  );
}
