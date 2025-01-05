import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";

export default function LocationSingle(){
    return(
        <div className="flex max-w-5xl w-full px-5 flex-col gap-5 mt-10">
            <StepFirst />
            <StepSecond />

            <div className="flex items-center justify-between">
                <Button variant={'outline'} className="p-0 border-0 !bg-transparent shadow-none text-base font-bold text-body"><ArrowLeft color="#000" className="w-5 h-5" /> Go back</Button>
                <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Pay now <ArrowRight className="w-5 h-5" /></Button>
            </div>
        </div>
    )
}