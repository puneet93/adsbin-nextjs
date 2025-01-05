import Information from "@/components/Information";
import LayoutSidebar from "../layoutSidebar";
import { MapPin} from "lucide-react";
import LocationDataTable from "./components/LocationDataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label={'LOCATIONS'} title="Locations" content="Register and manage Signage Locations" goBack={false}>
                <Button asChild className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">
                    <Link href={'/locations/add'}>Register new Location <MapPin size={32} /></Link>
                </Button>
            </Information>

            <LocationDataTable />
        </LayoutSidebar>
    )
}