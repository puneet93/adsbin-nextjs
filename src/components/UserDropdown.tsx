import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { CaretDown } from "@/lib/icons";
import { Avatar } from "@radix-ui/react-avatar";
import { Shield } from "lucide-react";

export default function UserDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex sm:ml-5 ml-2.5 items-center sm:gap-5 gap-2.5">
            <div className="md:flex hidden flex-col items-start gap-1">
              <span className="font-semibold text-base text-white">
                Jimmy van der Velde
              </span>
              <span className="font-bold flex items-center gap-1 text-xsm text-adsbin-evergreens">
                <Shield size={16} /> <span className="relative top-0.5">DHG & Partners</span>
              </span>
            </div>

            <Avatar className="border-2 border-[#848484] w-12 h-12 rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <CaretDown color="#fff" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={'end'}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
