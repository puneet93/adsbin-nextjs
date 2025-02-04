import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function InviteForm() {
  return (
    <>
      <div className="px-5 py-10 mb-5 gap-5 flex flex-col border-b border-adsbin-grey-100">
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito">Email address</Label>
          <Input type="email" className="!border-adsbin-grey-100" />
        </div>
      </div>

      <div className="px-5 py-10 mb-5 gap-5 flex flex-col border-b border-adsbin-grey-100">
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito">First name</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito">Last name</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5 select-box">
          <Label className="min-w-36 font-nunito">Role</Label>
          {/*<Input type="text" className="!border-adsbin-grey-100" />*/}
          <Select>
            <SelectTrigger className="w-full h-11 text-adsbin-evergreens">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="advertiser">Advertiser</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito">Company Name</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
        <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
          <Label className="min-w-36 font-nunito">Country</Label>
          <Input type="text" className="!border-adsbin-grey-100" />
        </div>
      </div>

      <div className="flex items-center gap-1.5 md:px-0 px-5">
        <Button
          variant={"outline"}
          className="p-0 border-0 mr-auto !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"
        >
          <ArrowLeft color="#000" className="w-5 h-5" /> Go back
        </Button>

        <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          Invite now <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}