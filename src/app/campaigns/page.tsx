import Information from "@/components/Information";
import LayoutSidebar from "../layoutSidebar";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";
import CampaignDataTable from "./components/CampaignDataTable";
import Link from "next/link";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label={'CAMPAIGN'} title="Campaigns" content="Create and manage ongoing campaigns" goBack={false}>
                <Button asChild className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">
                    <Link href={'/campaigns/new'}>
                        Start new campaign <Megaphone className="w-5 h-5" />
                    </Link>
                </Button>
            </Information>

            <CampaignDataTable />
        </LayoutSidebar>
    )
}