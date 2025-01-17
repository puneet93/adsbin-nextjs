import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LangDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        variant={"link"}
        className="text-base flex items-center gap-2 mr-2.5 md:mr-10 anim-pulse text-white font-outfit !h-9 font-medium"
      >
        <Image src={'/eng-flag.jpg'} alt="eng-flag" width={18} height={18} className="rounded-sm" /> Eng
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem><Image src={'/eng-flag.jpg'} alt="English flag" width={18} height={18} className="rounded-sm" /> English</DropdownMenuItem>
        <DropdownMenuItem><Image src={'/Dutch-flag.png'} alt="Dutch flag" width={18} height={18} className="rounded-sm" /> Dutch</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
