import Information from "@/components/Information";
import LayoutSidebar from "../layoutSidebar";
import { Button } from "@/components/ui/button";
import { MapPin} from "lucide-react";
import LocationDataTable from "./components/LocationDataTable";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label={'LOCATIONS'} title="Locations" content="Register and manage Signage Locations" goBack={false}>
                <Button  className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Register new Location <MapPin size={32} /></Button>
            </Information>

            <LocationDataTable />
        </LayoutSidebar>
    )
}