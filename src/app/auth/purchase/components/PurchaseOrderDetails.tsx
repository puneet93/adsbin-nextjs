import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableRow,
} from "@/components/ui/table"

export default function PurchaseOrderDetails(){
    return(
        <div className="px-5 pb-10 mb-5 gap-5 flex flex-col border-b border-gray-light">
            <p className="text-xsm tracking-wider text-body font-semibold uppercase mb-5">ORDER DETAILS</p>
            <div className="flex select-box w-full max-w-xl items-center md:gap-5 gap-2.5">
                <Label className="min-w-36 font-nunito">Quantity</Label>
                <Select>
                    <SelectTrigger className="h-11">
                        <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Table className="text-base text-818">
                <TableBody>
                    <TableRow className="border-0">
                        <TableCell className="py-5 font-semibold text-dark">Adsbin Unit</TableCell>
                        <TableCell className="py-5">1 unit</TableCell>
                        <TableCell className="py-5 text-right">$1999</TableCell>
                    </TableRow>
                    <TableRow className="border-0">
                        <TableCell colSpan={2} className="py-5 font-semibold text-dark">Maintenance Subscription </TableCell>
                        <TableCell className="py-5 text-right">$100 <sub>p/m</sub></TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow className="bg-white">
                        <TableCell colSpan={2} className="py-5 font-semibold text-dark">Total Amount (One year incl.)</TableCell>
                        <TableCell className="py-3 text-right">$1999</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}