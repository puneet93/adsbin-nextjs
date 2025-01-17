import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import StepThird from "./StepThird";

export default function SettingSteps() {
  return (
    <div className="flex max-w-5xl w-full px-5 flex-col gap-5 mt-10">
      <StepFirst />
      <StepSecond />
      <StepThird />

      <div className="flex items-center mt-5 justify-between">
        <Button
          variant={"outline"}
          className="p-0 anim-pulse !bg-transparent border-0 shadow-none text-base font-bold text-adsbin-grey-1000"
        >
          <ArrowLeft color="#000" className="w-5 h-5" /> Go back
        </Button>
        <Button className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          Save Settings <Save className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
