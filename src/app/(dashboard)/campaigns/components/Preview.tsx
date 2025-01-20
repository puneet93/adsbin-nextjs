import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import { X } from "lucide-react";

export default function Preview({ getValue }: { getValue?: () => void }) {
  return (
    <div className="container md:px-0 px-4 mx-auto w-full mb-5">
      <div className="shadow-container border border-adsbin-grey-100">
        <div className="py-3.5 text-adsbin-evergreens px-5 flex items-center border-bottom border-adsbin-grey-100">
          <h2 className="text-base font-semibold mr-auto">Preview</h2>
          <button>
              <X color="#415B41" onClick={getValue} />
          </button>
        </div>
      </div>
      <Carousel className="carousel-grid">
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
  );
}
