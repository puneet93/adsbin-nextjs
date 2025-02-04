import {Eye, FileVideo} from "lucide-react";
import Image from "next/image";
import FileDetailItem from "./FileDetailItem";
import {Button} from "@/components/ui/button";

export default function MediaCard() {
  return (
    <div className="border border-adsbin-grey-100 p-5 max-w-xs w-full">
      <div className="relative h-40 mb-2.5">
        <Image
          src={"/media-poster.png"}
          alt="media poster"
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div className="flex text-adsbin-grey-1000 uppercase tracking-wider items-center justify-between pt-1 pb-2.5 mb-2.5">
        <h5 className="text-lg font-extrabold">ADIDAS REEL</h5>
        <FileVideo color="#17412D" />
      </div>

      <div className="grid grid-cols-2 divide-x -mx-5 mb-5">
        <FileDetailItem title="Filetype" info="video" />
        <FileDetailItem title="Duration" info="0:31" />
      </div>

    <Button className="py-2.5 w-full px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none ml-auto">
        Preview Content <Eye className="w-5 h-5" />
    </Button>
    </div>
  );
}
