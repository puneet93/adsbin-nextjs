import LayoutSidebar from "../layoutSidebar";
import { DataTable } from "./components/DataTable";
import Information from "./components/Information";

export default function page(){
    return(
        <LayoutSidebar>
            <Information />
            
            <DataTable />
        </LayoutSidebar>
    )
}