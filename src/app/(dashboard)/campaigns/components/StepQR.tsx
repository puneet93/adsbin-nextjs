import StepHeader from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function StepQR() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className={'order-1'}>
          <StepHeader count={3} title="QR code preferences">
            <></>
          </StepHeader>

          <div className="flex items-center px-5 flex-wrap gap-5 relative">
            <div className="flex items-center md:gap-5 gap-2.5">
              <Label className="text-nowrap !font-normal min-w-24">
                Show QR:
              </Label>
              <Select>
                <SelectTrigger className="w-44 h-11 text-adsbin-evergreens">
                  <SelectValue placeholder="Visible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-44 h-11 text-adsbin-evergreens">
                  <SelectValue placeholder="Left Bottom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center md:gap-5 gap-2.5">
              <Label className="text-nowrap !font-normal min-w-24">
                Type:
              </Label>
              <Select>
                <SelectTrigger className="w-44 h-11 text-adsbin-evergreens">
                  <SelectValue placeholder="Light Bg." />
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

        <div>

        </div>
      </div>
    </div>
  );
}
