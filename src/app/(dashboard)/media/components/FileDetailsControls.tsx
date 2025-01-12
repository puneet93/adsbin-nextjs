import { Button } from "@/components/ui/button";
import { Download, PlayCircle, Trash2 } from "lucide-react";

export default function FileDetailsControl() {
  return (
    <div className="flex items-center flex-wrap gap-1">
      <Button
        variant="ghost"
        className="text-base font-semibold tracking-tight text-adsbin-grey-1000"
      >
        Play <PlayCircle />
      </Button>
      <Button
        variant="ghost"
        className="text-base font-semibold tracking-tight text-adsbin-grey-1000"
      >
        Delete <Trash2 />
      </Button>
      <Button
        variant="ghost"
        className="text-base font-semibold tracking-tight text-adsbin-grey-1000"
      >
        Download <Download />
      </Button>
    </div>
  );
}
