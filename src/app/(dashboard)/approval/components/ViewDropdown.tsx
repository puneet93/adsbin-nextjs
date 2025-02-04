import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";

export default function ViewDropdown(){
    return(
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant={"outline"}
                        className="text-base anim-pulse shadow-formField font-outfit border-adsbin-grey-200 !h-12 font-bold text-adsbin-green-300"
                    >
                        View <ChevronDown color="#000" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 max-h-96 overflow-auto">
                    <DropdownMenuLabel className={'py-2 px-4 text-base text-adsbin-evergreens font-semibold'}>Campaign Details</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className={'py-1.5'}>
                        <DropdownMenuLabel className={'py-0 px-4 mb-1.5 leading-none text-13 text-adsbin-grey-1000 font-normal'}>Title</DropdownMenuLabel>
                        <p className={'text-adsbin-grey-1000 px-4 text-sm font-bold'}>Fall Season</p>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className={'py-1.5'}>
                        <DropdownMenuLabel className={'py-0 px-4 mb-1.5 leading-none text-13 text-adsbin-grey-1000 font-normal'}>Description</DropdownMenuLabel>
                        <p className={'text-adsbin-grey-1000 px-4 text-sm font-bold'}>As the leaves change and the air turns crisp, it’s time to embrace the warmth and charm of fall. Our Fall Season Campaign is here to bring you the coziest trends, must-have essentials, and unbeatable deals to make this season your best yet</p>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className={'py-1.5'}>
                        <DropdownMenuLabel className={'py-0 px-4 mb-1.5 leading-none text-13 text-adsbin-grey-1000 font-normal'}>QR Code</DropdownMenuLabel>
                        <p className={'text-adsbin-grey-1000 px-4 text-sm font-bold'}>Enabled</p>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className={'py-1.5'}>
                        <DropdownMenuLabel className={'py-0 px-4 mb-1.5 leading-none text-13 text-adsbin-grey-1000 font-normal'}>Target URL</DropdownMenuLabel>
                        <p className={'text-adsbin-grey-1000 px-4 text-sm font-bold'}>https://www.forever-yours.it/fall25/en-us/</p>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}