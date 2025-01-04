import { Button } from "@/components/ui/button";
import LayoutSidebar from "../layoutSidebar";
import Information from "../../components/Information";
import MediaData from "./components/MediaPage";
import { Upload } from "lucide-react";

export default function page(){
    return(
        <LayoutSidebar>
            <Information label="Media" title="Images and videos" content="Upload your campaign imagery. Max 1GB per file. Video or audio files.">
                <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Upload new File <Upload className="w-4 h-4" /></Button>
            </Information>
            <MediaData />
        </LayoutSidebar>
    )
}