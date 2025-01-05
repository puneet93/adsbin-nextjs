import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ScreensDataTable } from "./ScreensDataTable";

export default function StepSecond(){
    return(
        <div>
            <StepHeader count={2} title="Screens" children={undefined} />

            <div className="flex flex-col py-5 mb-5 gap-2.5">
                <Button variant={'outline'} className="text-base ml-auto mb-2.5 px-5 flex-grow shadow-formField font-outfit border-border-btn !h-11 font-bold text-green-text-btn"><Plus color="#000" /> Add Screen</Button>

                <ScreensDataTable />
            </div>
        </div>
    )
}