"use client";

import StepHeader from "@/components/StepHeader";
import Preview from "./Preview";
import MediaCard from "../../media/components/MediaCard";
import MediaUpload from "../../media/components/MediaUpload";

export default function StepThird({showPreview, getPreview}:{showPreview:boolean, getPreview: () => void}) {
  return !showPreview ? (
    <div>
      <StepHeader count={3} title="" content={"Please upload videos and images with a minimum resolution of 1080p (1920 X 1080), a duration of at least 5 seconds, using H.264, VP9, HEVC, or AV1 codecs, noting that audio will be stripped and a standard color space is required for optimal playback"}>
        <div className="text-center ml-auto">
          <h5 className="text-lg text-black font-bold">29 s. remaining</h5>
          <p className="text-sm text-adsbin-grey-1000">max 1. min</p>
        </div>
      </StepHeader>

      <div className="flex flex-wrap sm:justify-start justify-center gap-5 p-5 mb-5">
        <MediaCard />
        <MediaUpload />
      </div>
    </div>
  ) : (
    <div>
      <Preview getValue={() => getPreview()} />
    </div>
  );
}
