import Information from "@/components/Information";
import { MapPin} from "lucide-react";
import LocationDataTable from "./components/LocationDataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Layout from "../layout";

export default function page(){
    return(
        <Layout>
            <Information label={'LOCATIONS'} title="Locations" content="Register and manage Signage Locations" goBack={false}>
                <Button asChild className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
                    <Link href={'/locations/add'}>Register new Location <MapPin size={32} /></Link>
                </Button>
            </Information>

            <LocationDataTable />
        </Layout>
    )
}