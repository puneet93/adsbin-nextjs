"use client";

import Information from "@/components/Information";
import { Button } from "@/components/ui/button";
import { Megaphone, Upload } from "lucide-react";
import MediaDetails from "./MediaDetails";
import MediaData from "./MediaData";
import { useState } from "react";
import Link from "next/link";

export default function MediaPage() {
  const [show, setShow] = useState(false);

  return !show ? (
    <>
      <Information
        goBack={false}
        label="Media"
        title="Images and videos"
        content="Upload your campaign imagery. Max 1GB per file. Video or audio files."
      >
        <div className="flex sm:flex-row flex-col md:items-center items-stretch flex-wrap gap-2.5 md:justify-end">
          <Button asChild={true} className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
            <Link href={'/campaigns/new'}>Start new Campaign <Megaphone className="w-4 h-4" /></Link>
          </Button>
          <Button className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
            Upload new File <Upload className="w-4 h-4" />
          </Button>
        </div>
      </Information>
      <MediaData getValue={() => setShow(!show)} />
    </>
  ) : (
    <MediaDetails getValue={() => setShow(!show)} />
  );
}
