import { Button } from "@/components/ui/button";
import LayoutSidebar from "../layoutSidebar";
import Information from "../ui/components/Information";
import MediaData from "../ui/mediaPage";
import { Upload } from "lucide-react";

export default function page(){
    return(
        <LayoutSidebar>
            <Information>
                <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Upload new File <Upload className="w-4 h-4" /></Button>
            </Information>
            <MediaData />
        </LayoutSidebar>
    )
}