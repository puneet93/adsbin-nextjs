import { Button } from "@/components/ui/button";
import StepFirst from "./StepFirst";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepSecond from "./StepSecond";
import StepSix from "./StepSix";
import StepThird from "./StepThird";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CampaignSlug(){
    return(
        <div className="flex flex-col gap-5 mt-10">
            <StepFirst />
            <StepSecond />
            <StepThird />
            <StepFour />
            <StepFive />
            <StepSix />

            <div className="flex items-center justify-between">
                <Button variant={'outline'} className="p-0 border-0 shadow-none text-base font-bold text-body"><ArrowLeft color="#000" className="w-5 h-5" /> Go back</Button>
                <Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Pay now <ArrowRight className="w-5 h-5" /></Button>
            </div>
        </div>
    )
}