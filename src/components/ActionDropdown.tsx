import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Payment = {
  id: string;
};

export default function ActionDropdown({ payment }: { payment: Payment }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        variant={"outline"}
        className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-9 font-bold text-adsbin-green-300"
      >
        Action
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
