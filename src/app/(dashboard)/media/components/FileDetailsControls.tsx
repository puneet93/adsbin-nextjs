import { Button } from "@/components/ui/button";
import {Download, Megaphone, PlayCircle, Trash2} from "lucide-react";

export default function FileDetailsControl() {
  return (
    <div className="grid grid-cols-2 lg:flex items-center md:flex-wrap gap-2.5">
        <div>
            <Button
                variant="ghost"
                className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
            >
                <span className={'w-2 h-2 rounded-md bg-adsbin-green-500'}></span> Start new Campaign <Megaphone />
            </Button>
        </div>
        <div>
      <Button
        variant="ghost"
        className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
      >
          <span className={'w-2 h-2 rounded-md bg-adsbin-green-500'}></span> Play <PlayCircle />
      </Button>
        </div>
        <div>
      <Button
        variant="ghost"
        className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
      >
          <span className={'w-2 h-2 rounded-md bg-adsbin-green-500'}></span> Delete <Trash2 />
      </Button>
        </div>
        <div>
      <Button
        variant="ghost"
        className="text-base px-2.5 anim-pulse font-semibold tracking-tight text-adsbin-grey-1000"
      >
          <span className={'w-2 h-2 rounded-md bg-adsbin-green-500'}></span> Download <Download />
      </Button>
        </div>
    </div>
  );
}
