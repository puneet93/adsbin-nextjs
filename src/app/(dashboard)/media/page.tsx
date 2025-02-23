import PopupControls from "@/components/PopupControls";
import MediaPage from "./components/MediaPage";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Megaphone} from "lucide-react";

export default function page() {
  return (
    <>
      <MediaPage />

        <div className={'flex justify-center py-10 px-5'}>
            <Button
                asChild
                className="py-2 anim-pulse px-4 text-sm gap-2.5 h-auto w-auto bg-adsbin-green-500 rounded-none"
            >
                <Link href={"/campaigns/new"}>
                    Start new campaign <Megaphone className="w-5 h-5" />
                </Link>
            </Button>
        </div>
      <PopupControls title="Your Media Library" content="You can upload images and videos here. Images must be in PNG or JPEG format. Videos must be in MP4 format." />
    </>
  );
}
