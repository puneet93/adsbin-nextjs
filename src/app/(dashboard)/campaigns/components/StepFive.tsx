import DatePicker from "@/components/DatePicker";
import StepHeader from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import DurationPopupControls from "@/components/DurationPopupControls";

export default function  StepFive() {
  return (
    <div className={'-mt-5'}>
      <StepHeader count={5} title="">
        <></>
      </StepHeader>

      <div className="flex text-adsbin-grey-1000 flex-col pb-5 mb-5 gap-5 px-5 max-w-3xl w-full">
        <p className="tracking-wide text-base max-w-2xl md:pr-14 w-full">
          Reserve a certain number of hours of ad display over a period of weeks, and your ad will be shown multiple times, evenly distributed to maximize visibility. Minimum duration is two weeks.
        </p>

        <div className="flex items-center flex-wrap gap-5 relative">
          <div className="flex items-center md:gap-5 gap-2.5">
            <Label className="text-nowrap !font-normal min-w-28">
              Start Date:
            </Label>
            <DatePicker />
          </div>

          <div className="flex items-center md:gap-5 gap-2.5">
            <Label className="text-nowrap !font-normal min-w-28">
              End Date:
            </Label>
            <DatePicker />
          </div>

          <DurationPopupControls title={'Duration Exception'} content={'<strong>Please note.</strong> The minimum campaign duration is currently two weeks. '} />
        </div>
        <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
          <Label className="text-nowrap min-w-28">Total Run Time:</Label>
          <Select>
            <SelectTrigger className="w-32 h-11 text-adsbin-evergreens">
              <SelectValue placeholder="8 hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-adsbin-grey-700">per location</p>
        </div>
        <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
          <Label className="text-nowrap min-w-28">Day Selection:</Label>
          <Select>
            <SelectTrigger className="w-56 h-11 text-adsbin-evergreens">
              <SelectValue placeholder="Every day of the week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
          <Label className="text-nowrap min-w-28">Time Slot</Label>
          <Select>
            <SelectTrigger className="w-56 h-11 text-adsbin-evergreens">
              <SelectValue placeholder="No timeslot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
          <Label className="text-nowrap min-w-28">Exposure: </Label>

          <div className={'flex items-center md:gap-5 gap-2.5 flex-wrap'}>
            <p className="text-adsbin-grey-700 min-w-48">+/- 930 views per location</p>
            <p className="text-adsbin-grey-700">+/- 13.950 over 15 locations</p>
          </div>

        </div>
        <div className="flex items-center md:gap-5 gap-2.5 font-outfit">
          <Label className="text-nowrap min-w-28">CTR:</Label>

          <div className={'flex items-center md:gap-5 gap-2.5 flex-wrap'}>
            <p className="text-adsbin-grey-700 min-w-48">+/- 47 QR Scans </p>
            <p className="text-adsbin-grey-700">+/- 698 Scans over 15 locations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
