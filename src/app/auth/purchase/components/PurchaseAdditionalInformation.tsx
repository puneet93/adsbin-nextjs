import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PurchaseAdditionalInformation(){
    return(
        <div className="px-5 py-10 mb-5 gap-5 flex flex-col border-b border-gray-light">
            <p className="text-xsm tracking-wider text-body font-semibold uppercase mb-5">ADDITIONAL INFORMATION</p>
            <div className="flex w-full max-w-xl items-start md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">Comments or remarks</Label>
                <Textarea rows={8} className="!border-gray-light" />
            </div>
        </div>
    )
}