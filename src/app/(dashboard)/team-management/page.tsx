import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import TeamDataTable from "./components/TeamDataTable";
import Information from "@/components/Information";

export default function page(){
    return(
        <>
            <Information goBack={false} label={'team'} title="DHG & Partners" content="Add and manage your team members">
                <Button  className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">Invite new member <UserPlus className="w-4 h-4" /></Button>
            </Information>

            <TeamDataTable />
        </>
    )
}