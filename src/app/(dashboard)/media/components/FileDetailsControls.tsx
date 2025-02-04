import { Button } from "@/components/ui/button";
import {Download, Megaphone, PlayCircle, Trash2} from "lucide-react";

export default function FileDetailsControl() {
  return (
    <div className="flex items-center flex-wrap gap-2.5">
        <Button
            variant="ghost"
            className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
        >
            Start new Campaign <Megaphone />
        </Button>
      <Button
        variant="ghost"
        className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
      >
        Play <PlayCircle />
      </Button>
      <Button
        variant="ghost"
        className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
      >
        Delete <Trash2 />
      </Button>
      <Button
        variant="ghost"
        className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
      >
        Download <Download />
      </Button>
    </div>
  );
}
