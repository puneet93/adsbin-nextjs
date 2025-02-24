import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp, TriangleAlert } from "lucide-react";

export default function Information() {
  return (
      <div className={'px-5 pt-5 md:pb-5 pb-14 md:mb-5 mb-2.5 bg-adsbin-grey-100/50'}>
        <h6 className="uppercase text-adsbin-grey-1000 mb-2.5 tracking-widest text-xsm font-bold">
          # Approval
        </h6>
        <div className="grid md:grid-cols-2 grid-cols-1 items-start md:gap-2.5 gap-5">
          <div>
            <div className="flex items-start gap-6 max-w-xl md:pr-8 w-full relative">
              <TriangleAlert className="relative" />
              <div className="flex -mt-1 flex-col items-start gap-2.5">
                <h1
                    className={`text-adsbin-evergreens tracking-tight text-4xl font-normal leading-none font-outfit`}
                >
                  Approval required
                </h1>
                <p className="text-base tracking-wider text-adsbin-grey-1000">
                  Please approve these campaigns
                </p>
              </div>
            </div>
          </div>
          <div className="text-right flex items-center justify-end gap-2.5">
            <Button
              variant={"outline"}
              disabled
              className="text-base  anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"
            >
              Deny All <ThumbsDown />
            </Button>
            <Button
              variant={"outline"}
              disabled
              className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"
            >
              Approve All <ThumbsUp />
            </Button>
          </div>
        </div>
      </div>
  );
}
