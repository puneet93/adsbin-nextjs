import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function SelectedLocations() {
  return (
    <div className="mb-5 text-adsbin-grey-1000 font-extrabold tracking-wide md:px-0 px-5">
      <h5 className="uppercase py-5 border-b border-adsbin-grey-100">
        SELECTED LOCATIONS:
      </h5>

      <div className="p-5 border-b text-sm border-adsbin-grey-100 flex flex-wrap items-center gap-2.5">
        <h6 className="uppercase tracking-wide mr-auto">DUBAI MALL</h6>
        
        <p className="font-normal sm:flex-grow-0 flex-grow">Baseprice: $11.5 /Hr.</p>
        <Button size={"icon"} variant={"link"} className="!h-auto  !w-auto">
          <X />
        </Button>
      </div>
      <div className="p-5 border-b text-sm border-adsbin-grey-100 flex items-center gap-2.5">
        <h6 className="uppercase tracking-wide mr-auto">CORNER COFFEE 21</h6>
        
        <p className="font-normal sm:flex-grow-0 flex-grow">Baseprice: $15.5 /Hr.</p>
        <Button size={"icon"} variant={"link"} className="!h-auto !w-auto">
          <X />
        </Button>
      </div>
      <div className="p-5 border-b text-sm border-adsbin-grey-100 flex items-center gap-2.5">
        <h6 className="uppercase tracking-wide mr-auto">SELECT CLOTHING ST.</h6>
        
        <p className="font-normal sm:flex-grow-0 flex-grow">Baseprice: $9.5 /Hr.</p>
        <Button size={"icon"} variant={"link"} className="!h-auto !w-auto">
          <X />
        </Button>
      </div>
      <div className="p-5 border-b text-sm border-adsbin-grey-100 flex items-center gap-2.5">
        <h6 className="uppercase tracking-wide mr-auto">STARBUCKS</h6>
        
        <p className="font-normal sm:flex-grow-0 flex-grow">Baseprice: $14.5 /Hr.</p>
        <Button size={"icon"} variant={"link"} className="!h-auto !w-auto">
          <X />
        </Button>
      </div>
    </div>
  );
}
