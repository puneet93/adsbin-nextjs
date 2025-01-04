import { Button } from "@/components/ui/button";
import LayoutSidebar from "../layoutSidebar";
import Information from "../../components/Information";
import { UserPlus } from "lucide-react";

export default function page(){
    return(
        <LayoutSidebar>
            <Information >
                <Button  className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Invite new member <UserPlus className="w-4 h-4" /></Button>
            </Information>
        </LayoutSidebar>
    )
}