import Information from "@/components/Information";
import LayoutSidebar from "../layoutSidebar";
import SettingSteps from "./components/SettingSteps";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label={'SETTINGS'} title="Settings" content="Here, you can customize your preferences and manage your account details. Adjust your notifications, privacy settings, and more to ensure the best experience. " goBack={false} children={undefined} />

            <SettingSteps />
        </LayoutSidebar>
    )
}