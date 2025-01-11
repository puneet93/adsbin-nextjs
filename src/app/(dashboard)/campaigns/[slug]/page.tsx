
import Information from "@/components/Information";
import CampaignSlug from "../components/CampaignSlug";
import Layout from "../../layout";

export default function page(){
    return(
        <Layout>
            <Information goBack={true} label={''} title="Start new Campaign" content="Set the default settings and quickly roll-out"><></></Information>

            <CampaignSlug />
        </Layout>
    )
}