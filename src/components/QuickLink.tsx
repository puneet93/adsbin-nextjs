import {CloudUpload, ThumbsUp} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function QuickLink(){
    return(
        <div className="p-5">
            <h3 className="text-adsbin-evergreens mb-2.5 text-2xl font-outfit tracking-tight">
                Quick Links
            </h3>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2.5 gap-6 items-center [&>div]:xl:max-w-96 [&>div]:xl:w-full">
                <div>
                    <Link href={"/campaigns"} className="relative anim-pulse h-48 block overflow-hidden rounded-lg mb-8">
                        <Image src="/quick-banner-image-1.png" alt="quick-banner-image-1" width={307} height={153} className="object-center w-full object-cover scale-105"  />
                    </Link>
                    {/*<Link href={'/campaigns'} className="rounded-full py-1.5 px-5 bg-adsbin-evergreens absolute flex items-center gap-2.5 top-1/2 -translate-y-1/2 left-5 right-5">*/}
                    {/*    <h3 className="text-white flex-grow text-base font-outfit leading-tight text-center">Start new <br />Campaign</h3>*/}
                    {/*    <CloudUpload size={24} color="#fff" />*/}
                    {/*</Link>*/}

                    <Button
                        asChild
                        className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto w-full bg-[#415B41] rounded-none"
                    >
                        <Link href={"/campaigns"}>
                            Start new campaign <CloudUpload size={24} color="#fff" />
                        </Link>
                    </Button>
                </div>
                <div>
                    <Link href={"/media"} className="relative anim-pulse h-48 block overflow-hidden rounded-lg mb-8">
                        <Image src="/quick-banner-image-2.png" alt="quick-banner-image-2" width={307} height={153} className="object-center w-full object-cover scale-105"  />
                    </Link>
                    {/*<Link href={'/media'} className="rounded-full py-1.5 px-5 bg-adsbin-evergreens absolute flex items-center gap-2.5 top-1/2 -translate-y-1/2 left-5 right-5">*/}
                    {/*    <h3 className="text-white flex-grow text-base font-outfit leading-tight text-center">Upload new <br />Advertisement</h3>*/}
                    {/*    <CloudUpload size={24} color="#fff" />*/}
                    {/*</Link>*/}
                    <Button
                        asChild
                        className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto w-full bg-[#415B41] rounded-none"
                    >
                        <Link href={"/media"}>
                            Upload new Advertisement <CloudUpload size={24} color="#fff" />
                        </Link>
                    </Button>
                </div>
                <div>
                    <Link href={"/approval"} className="relative anim-pulse h-48 block overflow-hidden rounded-lg mb-8">
                        <Image src="/quick-banner-image-3.png" alt="quick-banner-image-3" width={307} height={153} className="object-center w-full object-cover scale-105"  />
                    </Link>
                    {/*<Image src="/quick-banner-image-3.png" alt="quick-banner-image-3" fill={true} className="object-center opacity-35"  />*/}
                    {/*<Link href={'/approval'} className="rounded-full py-1.5 px-5 bg-adsbin-evergreens absolute flex items-center gap-2.5 top-1/2 -translate-y-1/2 left-5 right-5">*/}
                    {/*    <h3 className="text-white flex-grow text-base font-outfit leading-tight text-center">Approve a <br />Campaign</h3>*/}
                    {/*    <ThumbsUp size={24} color="#fff" />*/}
                    {/*</Link>*/}
                    <Button
                        asChild
                        className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto w-full bg-[#415B41] rounded-none"
                    >
                        <Link href={"/approval"}>
                            Approve a Campaign <ThumbsUp size={24} color="#fff" />
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    )
}