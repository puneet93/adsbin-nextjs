import Information from "../../components/Information";
import { CalendarDays } from "lucide-react";
import Statistics from "@/components/Statistics";
import PopupControls from "@/components/PopupControls";
import QuickLink from "@/components/QuickLink";

export default function page() {
  return (
    <>
        <div className={'relative'}>
            <div className={'md:hidden px-5 absolute flex top-5 right-5'}>
                <div className="inline-flex items-center gap-2.5 font-semibold text-adsbin-grey-1000 mb-auto ml-auto">
                    <CalendarDays />{" "}
                    <span className="text-sm">14 Oktober 2024 14;23</span>
                </div>
            </div>
            <Information
                goBack={false}
                content="Ready to Transform Your Space and Engage Your Audience?"
                label="DASHBOARD"
                align="top"
                title="Welcome back <strong>Jimmy</strong> 🤚"
            >
                <div className="hidden md:inline-flex items-center gap-2.5 font-semibold text-adsbin-grey-1000 ml-auto mb-auto">
                    <CalendarDays />{" "}
                    <span className="text-sm">14 Oktober 2024 14;23</span>
                </div>
            </Information>
        </div>

      <div className="border-b border-adsbin-grey-100 mt-10 pb-5 px-5 gap-5">
        <Statistics />
        {/* <Overview /> */}
      </div>

      <div className="mb-5">
        <QuickLink />
      </div>

      <PopupControls title="Stay in Control with your Dashboard" content="Here you can see all your campaigns, statistics, and more." />
    </>
  );
}
