import { Pencil } from "lucide-react";
import FileDetailsControl from "./fileDetailsControls";

export default function FileDetailHeader(){
    return(
        <div className="flex items-center flex-wrap gap-2.5 justify-between p-5 border-b border-gray-light">
            <div>
                <h1 className="font-outfit tracking-tight mb-1.5 font-normal md:text-4xl text-2xl text-green-text flex items-center gap-2.5">File title <Pencil size={16} className="text-body" /></h1>
                <p className="text-body text-sm font-semibold flex items-center gap-2.5">Fil in your description <Pencil size={16} className="text-body" /></p>
            </div>

            <FileDetailsControl />
        </div>
    )
}