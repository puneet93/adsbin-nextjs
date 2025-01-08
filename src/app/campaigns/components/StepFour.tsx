import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search, ShoppingBag } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import GoogleMap from "@/components/GoogleMap";
import LocationCard from "@/app/campaigns/components/LocationCard";

export default function StepFour(){
    return(
        <div>
            <StepHeader count={4} title="Where do you want to Advertise?"><></></StepHeader>

            <div className="flex items-center gap-2.5 justify-between mb-5">
                <div className="flex items-center gap-2.5">
                    <form action="/" className="relative">
                        <Input placeholder="Place search" className="rounded-sm shadow-formField text-green-text-btn placeholder:text-green-text-btn font-outfit text-base border-border-btn pr-10 font-normal min-h-10 min-w-72" />
                        <Button variant={'link'} className="p-0 absolute top-0.5 right-0 min-w-12"><Search color="#000" size={32} /></Button>
                    </form>

                    <Select>
                        <SelectTrigger className="w-40 h-11 text-green-text-btn border-border-btn font-outfit text-base">
                            <SelectValue placeholder="Venue type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-28 h-11 text-green-text-btn border-border-btn font-outfit text-base">
                            <SelectValue placeholder="Map" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                    <p className="px-2.5 text-A0A">6 Units found</p>
                </div>

                <div className="flex items-center gap-2.5">
                    <Label className="text-nowrap px-5 py-2 font-outfit font-bold">15 selected</Label>
                    <Button variant={'outline'} className="text-base shadow-formField font-outfit border-border-btn !h-12 font-bold text-green-text-btn">Add All <ArrowRight color="#000" /></Button>
                </div>
            </div>

            <GoogleMap />

            <div className="py-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <LocationCard icon={<ShoppingBag color="#000" className="mb-3" />} title="DUBAI MALL" content="Dubai Mall is the world’s largest mall, featuring over 1,300 stores, an aquarium, ice rink, and numerous dining options." />
                <LocationCard icon={<ShoppingBag color="#000" className="mb-3" />} title="MALL OF THE EMIRATES" content="Mall of the Emirates features 560 stores, Ski Dubai, VOX Cinemas, luxury hotels, and diverse dining options, making it a must-visit." />
                <LocationCard icon={<ShoppingBag color="#000" className="mb-3" />} title="Ibn Battuta Mall" content="Ibn Battuta Mall, the world’s largest themed mall, features 300+ stores, dining, and decor inspired by the explorer’s travels" />
                <LocationCard icon={<ShoppingBag color="#000" className="mb-3" />} title="Dubai Marina Mall" content="Dubai Marina Mall offers 140 stores, 21 dining options, and a children’s play area, all within 390,000 square feet" />
            </div>
        </div>
    )
}