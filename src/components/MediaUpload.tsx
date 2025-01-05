import { CirclePlus, CirclePlusIcon, FilmIcon, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function MediaUpload(){
    return(
        <div className="p-2.5">
            <input type="file" hidden id="uploadMedia" />
            <label htmlFor="uploadMedia" className="border-8 text-center items-center gap-3 tracking-wider text-body font-extrabold flex flex-col border-gray-light p-2.5 border-dashed rounded-2xl">
                <div className="flex items-center justify-center flex-col gap-2.5 py-4 mb-7">
                    <CirclePlusIcon size={40} />
                    <h6 className="leading-5">ADD YOUR <br />MEDIA</h6>
                </div>

                <Button variant={'outline'} className="text-base" size={'lg'}>Pick from Media Library <FilmIcon className="!w-6 !h-6" /></Button>
                <Button variant={'outline'} className="text-base mb-2.5" size={'lg'}>Upload File <FilmIcon className="!w-6 !h-6" /></Button>
            </label>
        </div>
    )
}