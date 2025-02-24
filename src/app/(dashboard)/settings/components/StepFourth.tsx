import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function StepFourth() {
  return (
    <div>
      <StepHeader count={4} countEnable={true} title="Delete Account">
        <></>
      </StepHeader>

      <div className="flex flex-col pt-2 pb-5 gap-2.5">
        <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
          <Label htmlFor="picture" className="text-nowrap sm:min-w-40 min-w-28">
            Email{" "}
          </Label>
          <Select>
            <SelectTrigger className="h-11 sm:w-80 w-64 text-adsbin-evergreens !border-adsbin-grey-200 font-outfit font-normal">
              <SelectValue placeholder="Enable all" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full max-w-2xl items-center flex-wrap md:gap-5 gap-2.5 sm:pl-40 pl-28">
          <Button
            variant={"outline"}
            className="text-base sm:ml-0 sm:w-80 w-64 anim-pulse shadow-formField font-outfit border-red-200 !h-12 font-bold text-white bg-red-500  md:ml-5 ml-2.5"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
