
import Information from "@/components/Information";
import CampaignSlug from "../components/CampaignSlug";

export default function page(){
    return(
        <>
            <Information goBack={true} label={''} title="Start new Campaign" content="Set the default settings and quickly roll-out"><></></Information>

            <CampaignSlug />
        </>
    )
}