import {Clock, Coins, Info, Lock} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";

export default function Status({ status }: { status: string }) {
  if (status === "Approved") {
    return (
      <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-green-500 text-adsbin-evergreens bg-adsbin-green-100 font-semibold text-sm">
        {status} <Lock className={'w-4 h-4'} color="#415B41" />
      </div>
    );
  } else if (status === "Unpaid") {
    return (
      <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-red-200 text-adsbin-evergreens bg-adsbin-red-100 font-semibold text-sm">
        {status} <Coins className={'w-4 h-4'} />
      </div>
    );
  } else if (status === "Running") {
    return (
      <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-neutral-200 text-adsbin-evergreens bg-adsbin-neutral-100 font-semibold text-sm">
        {status} <Clock className={'w-4 h-4'} />
      </div>
    );
  } else if (status === "Online") {
    return (
      <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-green-500 text-adsbin-evergreens bg-adsbin-green-100 font-semibold text-sm">
        {status}
      </div>
    );
  } else if (status === "Paid") {
    return (
      <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-green-500 text-adsbin-evergreens bg-adsbin-green-100 font-semibold text-sm">
        {status}
      </div>
    );
  } else if (status === "Overdue") {
    return (
      <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-red-200 text-adsbin-grey-900 bg-adsbin-red-100 font-semibold text-sm">
        {status}
      </div>
    );
  } else if (status === "Rejected") {
    return (
      <div className={'flex items-center gap-1.5'}>
        <div className="inline-flex items-center leading-tight gap-2.5 py-2 px-2.5 rounded-md border border-adsbin-red-300 text-adsbin-red-300 bg-adsbin-red-400 font-semibold text-sm">
          {status} <Lock className={'w-4 h-4'} />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className={'px-2.5'}>
                <Info className={'w-4 h-4'} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  }
}
