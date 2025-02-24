import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import StepThird from "./StepThird";
import StepFourth from "@/app/(dashboard)/settings/components/StepFourth";

export default function SettingSteps() {
  return (
    <div className="flex w-full px-5 flex-col mt-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
                <StepFirst />
            </div>
            <div>
                <StepSecond />
            </div>
            <div>
                <StepThird />
            </div>
            <div>
                <StepFourth />
            </div>
        </div>

      <div className="flex items-center pt-8 mt-5 justify-center border-t border-adsbin-grey-100">
        {/* sm:pl-40  sm:justify-start*/}

        {/*<Button*/}
        {/*  variant={"outline"}*/}
        {/*  className="p-0 anim-pulse !bg-transparent border-0 shadow-none text-base font-bold text-adsbin-grey-1000"*/}
        {/*>*/}
        {/*  <ArrowLeft color="#000" className="w-5 h-5" /> Go back*/}
        {/*</Button>*/}
        {/*<Button className="py-2.5 anim-pulse px-10 sm:w-80 w-full text-lg gap-2.5 h-auto bg-adsbin-green-500 rounded-none md:ml-5 sm:ml-2.5">*/}
        {/*  Save Settings <Save className="w-5 h-5" />*/}
        {/*</Button>*/}
          <Button className="py-2.5 anim-pulse px-10 sm:w-80 w-full text-lg gap-2.5 h-auto bg-adsbin-green-500 rounded-none md:ml-5 sm:ml-2.5">
              Save Settings <Save className="w-5 h-5" />
          </Button>
      </div>
    </div>
  );
}
