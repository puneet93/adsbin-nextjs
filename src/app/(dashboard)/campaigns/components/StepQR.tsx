"use client";

import StepHeader from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Eye} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import * as React from "react";
import Preview from "@/app/(dashboard)/campaigns/components/Preview";

export default function StepQR({getPreview}:{getPreview: () => void}) {
  const [showPreview, setShowPreview] = React.useState(false);

  return !showPreview ? (
    <div className={'md:px-5'}>
      <div className="grid md:grid-cols-2 grid-cols-1 mb-10">
        <div className={'order-1'}>
          <StepHeader count={3} title="QR code preferences">
            <></>
          </StepHeader>

          <div className="flex flex-col px-5 gap-5 relative">
            <div className="flex items-start md:gap-5 gap-2.5">
              <Label className="sm:text-nowrap mt-2 !font-normal min-w-24">
                Show QR:
              </Label>
              <div className={'flex items-center md:gap-5 gap-2.5 flex-wrap'}>
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

            <div className={'w-full md:mt-24 mt-6'}>
              <Button onClick={() => {
                setShowPreview(!showPreview);
                getPreview()
              }} className="py-2.5 px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none ml-auto">
                Preview Content <Eye className="w-5 h-5" />
              </Button>
            </div>

          </div>
        </div>

        <div className={'max-w-2xl mt-5 w-full'}>
          <Carousel className="carousel-grid shadow-carousel">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Image
                        src={"/ads.png"}
                        alt="ads"
                        width={1040}
                        height={505}
                        className="m-auto w-full"
                    />
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  ) : (
    <div className={'md:px-5'}>
      <Preview getValue={() => {
        setShowPreview(!showPreview);
        getPreview()
      }} />
    </div>
  );
}
