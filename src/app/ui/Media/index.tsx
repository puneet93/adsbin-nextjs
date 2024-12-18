import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { DotsIcon, SearchIcon } from "@/lib/icons"
import { DataTable } from "./Datatable"

export default function MediaData(){
    return(
        <div className="border-t border-[#ECECEC]">
            <div className="md:py-5 md:pr-3.5 md:pl-12 p-4 flex md:flex-row flex-col md:items-center gap-2.5">
                <div className="flex items-center pr-5 justify-between flex-grow">
                    <h5 className="text-body text-base tracking-wide">5 files selected</h5>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2.5 text-[#000] text-sm font-semibold outline-none">Apply to selection <DotsIcon color="#415B41" /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <form action="/" className="relative">
                    <Input placeholder="Search Term" className="rounded-full font-semibold min-h-10 min-w-56" />
                    <Button variant={'link'} className="p-0 absolute top-0.5 right-0 min-w-12"><SearchIcon color="#415B41" /></Button>
                </form>
            </div>
            
            <DataTable />
        </div>
    )
}