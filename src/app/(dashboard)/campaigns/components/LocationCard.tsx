import { Button } from "@/components/ui/button";
import { Clock3, DollarSign, Eye, Plus, X } from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function LocationCard({
  icon,
  title,
  content,
  active
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  active: boolean;
}) {
  return (
    <div
      className={`border 
       
      p-5 text-adsbin-grey-1000 tracking-wide text-base min-h-52 border-adsbin-grey-500 transition-all`}
    >
      {/* hover:border-adsbin-evergreens*/}
      {/*${active ? "border-adsbin-neutral-300" : "border-adsbin-grey-100"}*/}
      <div className="flex items-center gap-2.5 mb-6">
        <h6 className="uppercase font-extrabold leading-3 text-sm flex-grow">{title}</h6>

        <div className={'flex -space-x-3'}>
          <Avatar className={'border-2 border-white'}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className={'border-2 border-white'}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className={'border-2 border-white'}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {icon}
      </div>
      <div className="sm:min-h-32">{content}</div>

      <hr className={'mb-5 sm:mt-4 mt-7 -mx-5'} />

      <div className="mb-7 flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <Eye size={20} className="text-adsbin-green-400" />{" "}
          <span>High visibility</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock3 size={20} className="text-black" />{" "}
          <span>Medium Exposure Time</span>
        </div>
        <div className="flex items-center gap-2.5">
          <DollarSign size={20} className="text-black" />{" "}
          <span>High Value</span>
        </div>
      </div>

      {active ? (
        <Button
          className="!h-11 anim-pulse bg-adsbin-green-500 border-adsbin-green-500 font-bold text-base w-full text-white"
        >
          Remove Location <X />
        </Button>
      ) : (
        <Button
          className="!h-11 anim-pulse bg-adsbin-green-500 border-adsbin-green-500 font-bold text-base w-full text-white"
        >
          Add location <Plus />
        </Button>
      )}
    </div>
  );
}
