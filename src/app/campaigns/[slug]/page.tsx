import LayoutSidebar from "@/app/layoutSidebar";
import Information from "@/components/Information";
import CampaignSlug from "../components/CampaignSlug";

export default function page(){
    return(
        <LayoutSidebar>
            <Information goBack={true} label={''} title="Start new Campaign" content="Set the default settings and quickly roll-out" children={undefined}></Information>

            <CampaignSlug />
        </LayoutSidebar>
    )
}