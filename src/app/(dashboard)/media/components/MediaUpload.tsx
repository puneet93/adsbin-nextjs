import { Button } from "@/components/ui/button";
import {FilmIcon, Upload} from "lucide-react";

export default function MediaUpload() {
  return (
    <div className="p-2.5 sm:max-w-xs w-full flex">
      <input type="file" hidden id="uploadMedia" />
      <label
        htmlFor="uploadMedia"
        className="border-8 py-10 text-center items-center gap-3 justify-center tracking-wider text-adsbin-grey-1000 font-extrabold flex flex-col border-adsbin-grey-100 p-5 border-dashed rounded-2xl"
      >
        {/*<div className="flex items-center justify-center flex-col gap-2.5 py-4 mb-7">*/}
        {/*  <CirclePlusIcon size={40} />*/}
        {/*  <h6 className="leading-5">*/}
        {/*    Upload Your <br />Advertisement*/}
        {/*  </h6>*/}
        {/*</div>*/}

        <Button variant={"outline"} className="text-base px-5 anim-pulse" size={"lg"}>
            Pick from Media Files <FilmIcon color={'#000'} className="!w-6 !h-6" />
        </Button>
        <Button variant={"outline"} className="text-base px-5 mb-2.5 anim-pulse" size={"lg"}>
          Upload File <Upload color={'#000'} className="!w-6 !h-6" />
        </Button>
      </label>
    </div>
  );
}
