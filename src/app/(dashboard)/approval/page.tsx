
import Layout from "../layout";
import { DataTable } from "./components/DataTable";
import Information from "./components/Information";

export default function page(){
    return(
        <Layout>
            <Information />
            
            <DataTable />
        </Layout>
    )
}