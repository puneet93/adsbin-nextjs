import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Globe } from "lucide-react";

export default function LangDropdown() {
  return (
    <div className="border-adsbin-evergreens-light border-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="text-base !border-0 !outline-none !shadow-none flex items-center gap-2 px-5 py-2.5 !bg-transparent anim-pulse text-white !h-9 font-semibold"
          >
            <Globe color="#415B41" /> English
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Image
              src={"/eng-flag.jpg"}
              alt="English flag"
              width={18}
              height={18}
              className="rounded-sm"
            />{" "}
            English
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image
              src={"/Dutch-flag.png"}
              alt="Dutch flag"
              width={18}
              height={18}
              className="rounded-sm"
            />{" "}
            Dutch
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
