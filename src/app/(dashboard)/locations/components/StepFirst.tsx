import GoogleMap from "@/components/GoogleMap";
import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { Locate, Search, Upload } from "lucide-react";

export default function StepFirst(){
    return(
        <div>
            <StepHeader count={1} title="Details"><></></StepHeader>

            <div className="flex flex-col py-5 mb-5 gap-2.5">
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Location name: </Label>
                    <Input type="text" className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300" placeholder="Enter location name…" />
                </div>
                <div className="flex w-full items-start md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Description </Label>
                    <Textarea className="min-h-24 text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300 !border-adsbin-grey-200" placeholder="Enter a brief description…" />
                </div>
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Location Type: </Label>
                    <Select>
                        <SelectTrigger className="h-11 text-adsbin-grey-300 !border-adsbin-grey-200 font-outfit font-normal">
                            <SelectValue placeholder="Choose" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-col py-5 mb-5 gap-2.5">
                <div className="flex items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Photo </Label>
                    <div className="flex-grow">
                        <label htmlFor="upload-file" className="text-adsbin-grey-300 font-outfit text-base font-normal flex items-center rounded-md justify-between border border-adsbin-grey-200 px-5 h-11"><span>Select Picture</span> <Upload color="#000" /></label>
                        <input type="file" id="upload-file" hidden />
                    </div>
                </div>
                <div className="flex items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Address </Label>
                    <div className="relative flex-grow">
                        <Input type="search" className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300" placeholder="Street Address, Country, Region" />
                        <Button variant={'link'} className="p-0 absolute top-1 right-0 min-w-16"><Search /></Button>
                    </div>
                </div>
                <div className="flex items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Location Type: </Label>
                    
                    <div className="flex md:flex-row flex-col md:items-center md:gap-5 gap-2.5 flex-grow">
                        <Input type="text" className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300" placeholder="Latitude" />
                        <Input type="text" className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300" placeholder="Longitude" />
                        <Button variant={'outline'} className="text-base flex-grow shadow-formField font-outfit border-adsbin-grey-200 !h-11 font-bold text-adsbin-green-300">Current Location <Locate color="#000" /></Button>
                    </div>
                </div>
                <div className="flex items-start md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Map</Label>
                    
                    <div className="flex items-center md:gap-5 gap-2.5 flex-grow">
                        <GoogleMap />
                    </div>
                </div>
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Visibility Level: </Label>
                    <Select>
                        <SelectTrigger className="h-11 w-44 text-adsbin-grey-300 !border-adsbin-grey-200 font-outfit font-normal">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Exposure Level: </Label>
                    <Select>
                        <SelectTrigger className="h-11 w-44 text-adsbin-grey-300 !border-adsbin-grey-200 font-outfit font-normal">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Value Level: </Label>
                    <Select>
                        <SelectTrigger className="h-11 w-44 text-adsbin-grey-300 !border-adsbin-grey-200 font-outfit font-normal">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                    <Label htmlFor="picture" className="text-nowrap min-w-40">Price per/h. </Label>
                    <Input type="text" className="text-adsbin-grey-300 w-44 font-outfit font-normal placeholder:text-adsbin-grey-300" placeholder="4.00" />
                </div>
            </div>
        </div>
    )
}