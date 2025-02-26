import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ScreensDataTable } from "./ScreensDataTable";

export default function StepSecond() {
  return (
    <div>
      <StepHeader count={2} countEnable={true} title="Screens">
        <></>
      </StepHeader>

      <div className="flex flex-col py-5 mb-5 gap-2.5">
        <Button
          variant={"outline"}
          className="text-base anim-pulse md:ml-auto md:mr-0 mr-auto w-44 ml-44 mb-2.5 px-5 flex-grow shadow-formField font-outfit border-adsbin-grey-200 !h-11 font-bold text-adsbin-green-300"
        >
          <Plus color="#000" /> Add Screen
        </Button>

        <ScreensDataTable />
      </div>
    </div>
  );
}
