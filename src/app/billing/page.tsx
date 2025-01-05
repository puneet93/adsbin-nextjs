import Information from "@/components/Information";
import LayoutSidebar from "../layoutSidebar";
import SettingDataTable from "./components/SettingDataTable";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label={'Billing'} title="Payment History" content="Welcome to our billing page! Review your transaction history and if needed complete your payment securely. " goBack={false} children={undefined} />

            <SettingDataTable />
        </LayoutSidebar>
    )
}