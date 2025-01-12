import CircleItem from "@/components/CircleItem";
import { Button } from "@/components/ui/button";
import { Camera, CircleArrowRight, Flag, Youtube } from "lucide-react";
import Link from "next/link";

export default function Overview() {
  return (
    <div className="p-5 border-b border-adsbin-grey-100 flex flex-col">
      <div className="flex items-center mb-5 justify-between">
        <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight">
          Overview
        </h3>
        <Button
          asChild
          variant={"outline"}
          className="px-5 py-2.5 tracking-wider border-0 uppercase !bg-transparent shadow-none text-base font-extrabold text-adsbin-grey-1000"
        >
          <Link href={"/"}>
            see more <CircleArrowRight />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-16 my-auto">
        <CircleItem
          value="240"
          name="Code Snaps"
          icon={<Camera color="#1E1E1E" />}
        />
        <CircleItem
          value="31K"
          name="Views"
          icon={<Youtube color="#1E1E1E" />}
        />
        <CircleItem value="0.8%" name="CTR" icon={<Flag color="#1E1E1E" />} />
      </div>
    </div>
  );
}
