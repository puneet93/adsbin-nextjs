import StepHeader from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function StepSecond() {
  return (
    <div>
      <StepHeader count={2} countEnable={true} title="Region">
        <></>
      </StepHeader>

      <div className="flex flex-col pt-2 pb-5 gap-2.5">
        <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
          <Label htmlFor="picture" className="text-nowrap sm:min-w-40 min-w-28">
            Regional setting{" "}
          </Label>
          <Select>
            <SelectTrigger className="h-11 sm:w-80 w-64 text-adsbin-evergreens !border-adsbin-grey-200 font-outfit font-normal">
              <SelectValue placeholder="US American" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
