import Preview from "@/components/Preview";
import { X } from "lucide-react";

export default function PreviewPopup({ getValue }: { getValue?: () => void }){
    return(
        <div className="container px-md-0 px-4 mx-auto w-full">
            <div className="shadow-container border border-adsbin-grey-100">
                <div className="py-3.5 text-adsbin-evergreens px-5 flex items-center border-bottom border-adsbin-grey-100">
                <h2 className="text-base font-semibold mr-auto">File details</h2>
                <button>
                    <X color="#415B41" onClick={getValue} />
                </button>
                </div>

                <Preview />

            </div>
        </div>
    )
}