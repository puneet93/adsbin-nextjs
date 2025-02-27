import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Ellipsis, Search } from "lucide-react";
import { DataTable } from "./DataTable";

export default function MediaData({ getValue }: { getValue: () => void }) {
  return (
    <div>
      <div className="md:py-5 md:pr-3.5 md:pl-12 p-4 flex md:flex-row flex-col-reverse md:items-center md:gap-2.5 gap-5">
        <div className="flex items-center md:pr-5 md:pl-0 pl-6 justify-between flex-grow">
          <h5 className="md:text-adsbin-grey-1000 font-bold md:font-normal text-black text-base tracking-wide">
            5 files selected
          </h5>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2.5 sm:text-black  text-sm font-semibold outline-none">
              <span className="sm:flex hidden items-center gap-2.5 hidden">Apply to selection <Ellipsis color="#415B41" size={24} /></span>
              <span className="sm:hidden"><Ellipsis color="#B8C6B8" size={24} /></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <form action="/" className="relative md:max-w-[150px]">
          <Input
              placeholder="Search Term"
              className="rounded-full pr-10 font-semibold !h-12 !text-base"
          />
          <Button
              variant={"link"}
              className="p-0 absolute top-[4px] md:right-1.5 right-2 min-w-8"
          >
            <Search color="#415B41" size={32} />
          </Button>
        </form>
      </div>

      <DataTable getValue={getValue} />
    </div>
  );
}
