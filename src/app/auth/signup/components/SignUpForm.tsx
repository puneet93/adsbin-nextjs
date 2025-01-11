import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SignUpForm(){
    return(
        <>
            <div className="px-5 py-10 mb-5 gap-5 flex flex-col border-b border-adsbin-grey-100">
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito">Email address</Label>
                    <Input type="email" className="!border-adsbin-grey-100" />
                </div>
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito">Username</Label>
                    <Input type="text" className="!border-adsbin-grey-100" />
                </div>
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito">Password</Label>
                    <Input type="text" className="!border-adsbin-grey-100" />
                </div>
                <div className="flex w-full max-w-xl items-start md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito mt-3">Repeat password</Label>
                    <div>
                        <Input type="text" className="!border-adsbin-grey-100 mb-5" />
                        <p className="text-adsbin-grey-1000 text-xsm">Passwords must be 12+ characters with a mix of letters, numbers, and symbols. Change every 90 days; accounts lock after five failed attempts.</p>
                    </div>
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
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito">Company Name</Label>
                    <Input type="text" className="!border-adsbin-grey-100" />
                </div>
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito">Country</Label>
                    <Input type="text" className="!border-adsbin-grey-100" />
                </div>
            </div>

            <div className="px-5 py-10 mb-5 gap-5 flex flex-col border-b border-adsbin-grey-100">
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-36 font-nunito">Team invitation code</Label>
                    <Input type="text" className="!border-adsbin-grey-100" />
                </div>
            </div>

            <div className="flex items-center gap-1.5 md:px-0 px-5">
                <Button variant={'outline'} className="p-0 border-0 mr-auto !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"><ArrowLeft color="#000" className="w-5 h-5" /> Go back</Button>
                
                <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">Create Account <ArrowRight className="w-5 h-5" /></Button>
            </div>
        </>
    )
}