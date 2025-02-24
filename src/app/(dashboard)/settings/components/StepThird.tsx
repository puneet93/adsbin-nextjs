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

export default function StepThird() {
  return (
    <div>
      <StepHeader count={3} countEnable={true} title="Notifications">
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
        <div className="flex w-full max-w-2xl items-center flex-wrap md:gap-5 gap-2.5">
          <Label htmlFor="picture" className="text-nowrap sm:min-w-40 min-w-28">
            Web Push{" "}
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
          <div className={'md:ml-5 ml-2.5'}>
            <Button
                variant={"outline"}
                className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300 ml-28 sm:ml-40"
            >
              Approve Web Push
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
