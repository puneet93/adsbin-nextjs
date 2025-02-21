import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function ReturnForm() {
  return (
    <>
      <div className="px-5 py-10 gap-5 flex flex-col">
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold">Full Name:</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold">Company:</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold">Email:</Label>
          <Input type="email" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold">Phone:</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold">Unit Location:</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold">Unit Serial no. :</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5 select-box">
          <Label className="min-w-36 font-nunito">Return Reason</Label>
          <Select>
            <SelectTrigger className="w-full h-11 text-adsbin-evergreens">
              <SelectValue placeholder="Contract Expiration" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="advertiser">Advertiser</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full max-w-xl items-start md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito font-semibold !leading-none">Additional Comments:</Label>
          <Textarea rows={8} className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5 select-box">
          <Label className="min-w-36 font-nunito">Contact Preference:</Label>
          <Select>
            <SelectTrigger className="w-full h-11 text-adsbin-evergreens">
              <SelectValue placeholder="Email" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="advertiser">Advertiser</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1.5 px-5">
        <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          Submit Your Return Request <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}
