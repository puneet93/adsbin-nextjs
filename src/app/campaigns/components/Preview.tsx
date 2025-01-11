import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function Preview(){
    return(
        <div className="text-center p-2.5 bg-gradient-to-b from-white via-white to-adsbin-grey-1100">
            <h2 className="mb-2.5 font-outfit text-adsbin-evergreens text-3xl">Preview</h2>
            <div className="py-10 md:px-28 px-20">
                <Carousel>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 text-center">
                                    <Image src={'/ads.png'} alt="ads" width={1055} height={344} className="m-auto" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}