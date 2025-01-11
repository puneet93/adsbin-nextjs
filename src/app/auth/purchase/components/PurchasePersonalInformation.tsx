import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PurchasePersonalInformation(){
    return(
        <div className="px-5 py-10 mb-5 gap-5 flex flex-col border-b border-adsbin-grey-100">
            <p className="text-xsm tracking-wider text-adsbin-grey-1000 font-semibold uppercase mb-5">Personal information</p>
            <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">First name</Label>
                <Input type="text" className="!border-adsbin-grey-100" />
            </div>
            <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">Company name</Label>
                <Input type="text" className="!border-adsbin-grey-100" />
            </div>
            <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">Website</Label>
                <Input type="text" className="!border-adsbin-grey-100" />
            </div>
            <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">Email address </Label>
                <Input type="email" className="!border-adsbin-grey-100" />
            </div>
            <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">Phone Number </Label>
                <Input type="text" className="!border-adsbin-grey-100" />
            </div>
        </div>
    )
}