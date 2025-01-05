import StepHeader from "@/components/StepHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function StepSecond(){
    return(
        <div>
            <StepHeader count={2} title="Target Links and Engagement" children={undefined} />

            <div className="flex flex-col py-5 mb-5 gap-5 md:px-0 px-5">
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-24">Target URL:</Label>
                    <Input type="url" placeholder="https://yourwebsite.address" />
                </div>
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-24">Show QR:</Label>
                    <Select>
                        <SelectTrigger className="w-32 h-11">
                            <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-32 h-11" disabled>
                            <SelectValue placeholder="Left Top" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-24">Type:</Label>
                    <Select>
                        <SelectTrigger className="w-44 h-11" disabled>
                            <SelectValue placeholder="Light" />
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
    )
}