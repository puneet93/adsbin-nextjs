import { Button } from "@/components/ui/button";
import LayoutSidebar from "./layoutSidebar";
import Information from "../components/Information";
import MediaData from "./media/components/MediaPage";
import { CalendarDays } from "lucide-react";
import Statistics from "@/components/Statistics";
import Overview from "@/components/Overview";

export default function page() {
  return (
    <LayoutSidebar>
      <Information goBack={false} content="Ready to Transform Your Space and Engage Your Audience?" label="DASHBOARD" align="top" title="Welcome back <strong>Jimmy</strong> 🤚">
        <div className="inline-flex items-center gap-2.5 font-semibold text-body ml-auto mb-auto">
          <CalendarDays /> <span className="text-sm">14 Oktober 2024 14;23</span>
        </div>
      </Information>
      
      <div className="border-t border-gray-light mt-10 py-5 grid md:grid-cols-2 grid-cols-1 gap-5">
        <Statistics />
        <Overview />
      </div>
    </LayoutSidebar>
  );
}
