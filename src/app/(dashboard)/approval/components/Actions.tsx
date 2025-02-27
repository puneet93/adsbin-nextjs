import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";

export default function Actions() {
  return (
    <div className="flex items-center justify-end gap-2.5 mr-2.5">
      <Button
        variant={"outline"}
        className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300 sm:block hidden"
      >
        <MessageSquare color="#000" />
      </Button>
      <Button
        variant={"outline"}
        className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"
      >
        <span className="sm:block hidden">Deny</span> <ThumbsDown color="#000" />
      </Button>
      <Button
        variant={"outline"}
        className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"
      >
        <span className="sm:block hidden">Approve</span> <ThumbsUp color="#000" />
      </Button>
    </div>
  );
}
