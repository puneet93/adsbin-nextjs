import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

type Payment = {
  id: string;
};

export default function ActionDropdown({ payment }: { payment: Payment }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        variant={"outline"}
        className="sm:text-sm anim-pulse rounded-none !shadow-none ml-auto border-0 md:border md:border-adsbin-grey-100 !h-9 font-semibold text-adsbin-evergreens"
      >
        <span className="sm:flex hidden items-center gap-2.5">Action <Ellipsis color="#415B41" size={16} /></span>
        <span className="sm:hidden"><Ellipsis color="#B8C6B8" size={24} /></span>
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(payment.id)}
        >
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
