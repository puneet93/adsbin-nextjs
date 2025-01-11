import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"

export default function PaymentDetail(){
    return(
        <Table className="text-base text-adsbin-grey-800">
        {/* <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader> */}
            <TableBody>
                <TableRow>
                <TableCell className="font-semibold text-black">Ad runtime 8 hours </TableCell>
                <TableCell>$7.50 per/hr.</TableCell>
                <TableCell>15 Locations</TableCell>
                <TableCell className="text-right text-2xl">$900</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}