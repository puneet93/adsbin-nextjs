import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import Link from "next/link";

export default function LocationSingle() {
  return (
    <div className="flex max-w-5xl w-full px-5 flex-col gap-5 mt-10">
      <StepFirst />
      <StepSecond />

      <div className="flex items-center justify-between">
        <Button
          variant={"outline"}
          className="p-0 border-0 anim-pulse !bg-transparent shadow-none text-base font-bold text-adsbin-grey-1000"
        >
          <ArrowLeft color="#000" className="w-5 h-5" /> Go back
        </Button>
        <Button asChild className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none">
          <Link href={'/billing'}>Register your item <ArrowRight className="w-5 h-5" /></Link>
        </Button>
      </div>
    </div>
  );
}
