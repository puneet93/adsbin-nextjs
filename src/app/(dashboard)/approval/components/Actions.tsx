import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";

export default function Actions(){
    return(
        <div className="flex items-center gap-2.5">
            <Button variant={'outline'} className="text-base shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"><MessageSquare color="#000" /></Button>
            <Button variant={'outline'} className="text-base shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300">Deny <ThumbsDown color="#000" /></Button>
            <Button variant={'outline'} className="text-base shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300">Approve <ThumbsUp color="#000" /></Button>
        </div>
    )
}