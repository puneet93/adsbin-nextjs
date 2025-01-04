import { X } from "lucide-react";
import Preview from "./components/preview";
import FileDetailHeader from "./components/fileDetailHeader";
import FileDetailItems from "./components/fileDetailItems";

export default function MediaDetailsUI(){
    return(
        <div className="container px-md-0 px-4 mx-auto w-full">
            <div className="shadow-container border border-gray-light">
                <div className="py-3.5 text-black px-5 flex items-center justify-between border-bottom border-gray-light">
                    <h2 className="text-base font-semibold">File details</h2>
                    <button><X color="#415B41" /></button>
                </div>

                <Preview />

                <FileDetailHeader />

                <FileDetailItems />
            </div>
        </div>
    )
}
