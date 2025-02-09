import {CloudUpload, ThumbsUp} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function QuickLink(){
    return(
        <div className="p-5 border-b border-adsbin-grey-100">
            <h3 className="text-adsbin-evergreens mb-2.5 text-2xl font-outfit tracking-tight">
                Quick Links
            </h3>

            <div className="flex fle-wrap gap-2.5 items-center">
                <div className="relative min-h-48 rounded-lg overflow-hidden anim-pulse max-w-64 w-full">
                    <Image src="/quick-banner-image-1.png" alt="quick-banner-image-1" fill={true} className="object-center opacity-35"  />
                    <Link href={'/campaigns'} className="rounded-full py-1.5 px-5 bg-adsbin-evergreens absolute flex items-center gap-2.5 top-1/2 -translate-y-1/2 left-5 right-5">
                        <h3 className="text-white flex-grow text-base font-outfit leading-tight text-center">Start new <br />Campaign</h3>
                        <CloudUpload size={24} color="#fff" />
                    </Link>
                </div>
                <div className="relative min-h-48 rounded-lg overflow-hidden anim-pulse max-w-64 w-full">
                    <Image src="/quick-banner-image-2.png" alt="quick-banner-image-2" fill={true} className="object-center opacity-35"  />
                    <Link href={'/media'} className="rounded-full py-1.5 px-5 bg-adsbin-evergreens absolute flex items-center gap-2.5 top-1/2 -translate-y-1/2 left-5 right-5">
                        <h3 className="text-white flex-grow text-base font-outfit leading-tight text-center">Upload new <br />Advertisement</h3>
                        <CloudUpload size={24} color="#fff" />
                    </Link>
                </div>
                <div className="relative min-h-48 rounded-lg overflow-hidden anim-pulse max-w-64 w-full">
                    <Image src="/quick-banner-image-3.png" alt="quick-banner-image-3" fill={true} className="object-center opacity-35"  />
                    <Link href={'/approval'} className="rounded-full py-1.5 px-5 bg-adsbin-evergreens absolute flex items-center gap-2.5 top-1/2 -translate-y-1/2 left-5 right-5">
                        <h3 className="text-white flex-grow text-base font-outfit leading-tight text-center">Approve a <br />Campaign</h3>
                        <ThumbsUp size={24} color="#fff" />
                    </Link>
                </div>
            </div>

        </div>
    )
}