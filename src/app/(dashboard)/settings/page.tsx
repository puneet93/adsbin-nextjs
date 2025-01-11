import Information from "@/components/Information";
import SettingSteps from "./components/SettingSteps";
import Layout from "../layout";

export default function page(){
    return(
        <Layout>
            <Information label={'SETTINGS'} title="Settings" content="Here, you can customize your preferences and manage your account details. Adjust your notifications, privacy settings, and more to ensure the best experience. " goBack={false} />

            <SettingSteps />
        </Layout>
    )
}