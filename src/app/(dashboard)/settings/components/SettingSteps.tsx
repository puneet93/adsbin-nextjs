import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import StepThird from "./StepThird";

export default function SettingSteps() {
  return (
    <div className="flex max-w-5xl w-full px-5 flex-col gap-5 mt-10">
      <StepFirst />
      <StepSecond />
      <StepThird />

      <div className="flex items-center pt-6 justify-center sm:justify-start border-t border-adsbin-grey-100 sm:pl-40">

        {/*<Button*/}
        {/*  variant={"outline"}*/}
        {/*  className="p-0 anim-pulse !bg-transparent border-0 shadow-none text-base font-bold text-adsbin-grey-1000"*/}
        {/*>*/}
        {/*  <ArrowLeft color="#000" className="w-5 h-5" /> Go back*/}
        {/*</Button>*/}
        <Button className="py-2.5 anim-pulse px-10 sm:w-80 w-full text-lg gap-2.5 h-auto bg-adsbin-green-500 rounded-none md:ml-5 sm:ml-2.5">
          Save Settings <Save className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
