import { CircleArrowRight, Flag, Megaphone, Tv2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import CircleItem from "./CircleItem";

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
          className="px-5 anim-pulse py-2.5 tracking-wider border-0 uppercase !bg-transparent shadow-none text-xs font-extrabold text-adsbin-grey-1000"
        >
          <Link href={"/"}>
            see more <CircleArrowRight />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-16 my-auto">
        <CircleItem value="15" name="Screens" icon={<Tv2 color="#415B41" />} />
        <CircleItem
          value="11"
          name="Locations"
          icon={<Flag color="#415B41" />}
        />
        <CircleItem
          value="494 <sub>GB</sub>"
          name="Assets"
          icon={<Flag color="#415B41" />}
        />
        <CircleItem
          value="15"
          name="Campaigns"
          icon={<Megaphone color="#000" />}
        />
      </div>
    </div>
  );
}
