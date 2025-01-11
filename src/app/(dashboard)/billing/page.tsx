import Information from "@/components/Information";
import SettingDataTable from "./components/SettingDataTable";
import Layout from "../layout";

export default function page(){
    return(
        <Layout>
            <Information label={'Billing'} title="Payment History" content="Welcome to our billing page! Review your transaction history and if needed complete your payment securely. " goBack={false}><></></Information>

            <SettingDataTable />
        </Layout>
    )
}