import { CloudUpload, Megaphone } from "lucide-react";
import Link from "next/link";

export default function QuickLink(){
    return(
        <div className="p-5 border-b border-adsbin-grey-100">
            <h3 className="text-adsbin-evergreens mb-2.5 text-2xl font-outfit tracking-tight">
                Quick Links
            </h3>

            <div className="flex flex-wrap gap-2.5 items-center">
                <Link href={'/'} className="border-2 anim-pulse rounded-xl py-6 px-6 border-adsbin-grey-100 bg-adsbin-grey-1200 max-w-72 w-full">
                    <div className="px-5 flex items-center gap-2.5">
                        <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight">Start a new Campaign </h3>
                        <span className="min-w-9">
                            <Megaphone size={36} color="#415B41" />
                        </span>
                    </div>
                </Link>
                <Link href={'/'} className="border-2 anim-pulse rounded-xl py-6 px-6 border-adsbin-grey-100 bg-adsbin-grey-1200 max-w-72 w-full">
                    <div className="px-5 flex items-center gap-2.5">
                        <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight">Upload new Advertisment </h3>
                        <span className="min-w-9">
                            <CloudUpload size={36} color="#415B41" />
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}