import Information from "@/components/Information";
import LayoutSidebar from "../layoutSidebar";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";
import CampaignDataTable from "./components/CampaignDataTable";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label={'CAMPAIGN'} title="Campaigns" content="Create and manage ongoing campaigns">
                <Button  className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Start new campaign <Megaphone className="w-5 h-5" /></Button>
            </Information>

            <CampaignDataTable />
        </LayoutSidebar>
    )
}