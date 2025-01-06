import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CircleHelp } from "lucide-react";
import Link from "next/link";

export default function LoginForm(){
    return(
        <>
            <div className="p-5 mb-5 gap-5 flex flex-col">
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-24 font-nunito">Username</Label>
                    <Input type="text" className="!border-gray-light" />
                </div>
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label className="min-w-24 font-nunito">Password</Label>
                    <Input type="text" className="!border-gray-light" />
                </div>
            </div>

            <div className="flex items-center gap-1.5 md:px-0 px-5 flex-wrap">
                <Button variant={'outline'} className="p-0 border-0 mr-auto !bg-transparent shadow-none text-base font-bold text-body"><ArrowLeft color="#000" className="w-5 h-5" /> Go back</Button>

                <div className="gap-1.5 flex items-center ml-auto">
                    <Button asChild variant={'outline'} className="px-5 py-2.5 border-0 !bg-transparent shadow-none text-base font-bold text-8C8">
                        <Link href={'/'}>Forgotten <CircleHelp className="text-8C8" /></Link>
                    </Button>
                    <Button variant={'outline'} asChild className="px-5 py-2.5 border-0 !bg-transparent shadow-none text-base font-bold text-8C8">
                        <Link href={'/'}>Sign Up</Link>
                    </Button>
                    <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Login <ArrowRight className="w-5 h-5" /></Button>
                </div>
            </div>
        </>
    )
}