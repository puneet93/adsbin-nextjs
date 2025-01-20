"use client";

import StepHeader from "@/components/StepHeader";
import Preview from "./Preview";
import MediaCard from "../../media/components/MediaCard";
import MediaUpload from "../../media/components/MediaUpload";

export default function StepThird({showPreview, getPreview}:{showPreview:boolean, getPreview: () => void}) {
  return !showPreview ? (
    <div>
      <StepHeader count={3} title="What do you want to show?">
        <div className="text-center ml-auto">
          <h5 className="text-lg text-black font-bold">29 s. remaining</h5>
          <p className="text-sm text-adsbin-grey-1000">max 1. min</p>
        </div>
      </StepHeader>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-5 mb-5">
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
