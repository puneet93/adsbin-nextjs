"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import Status from "@/components/Status";
import { PaginationUI } from "@/components/Pagination";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const data: Payment[] = [
  {
    id: "derv1ws0",
    status: "Paid",
    description: "Campaign Jan.",
    date: "27-08-2023",
    customerName: "DHG & Partners",
    amount: "€ 142.50",
    actions: "Download"
  },
  {
    id: "m5gr84i9",
    status: "Overdue",
    description: "Campaign Jan.",
    date: "27-08-2023",
    customerName: "DHG & Partners",
    amount: "€ 142.50",
    actions: "Download"
  },
  {
    id: "3u1reuv4",
    status: "Paid",
    description: "Campaign Jan.",
    date: "27-08-2023",
    customerName: "DHG & Partners",
    amount: "€ 142.50",
    actions: "Pay now"
  }
];

export type Payment = {
  id: string;
  status: "Paid" | "Overdue";
  description: string;
  date: string;
  customerName: string;
  amount: string;
  actions: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <h4 className="text-adsbin-evergreens text-base font-bold">
        {row.getValue("description")}
      </h4>
    )
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("customerName")}</div>
    )
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("amount")}</div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Status status={row.getValue("status")} />
  },
  {
    // id: "actions",
    accessorKey: "actions",
    header: "Actions",
    // enableHiding: false,
    cell: ({ row }) => {
      // const payment = row.original

      return (
        <Link href={"/"} className="flex gap-2.5">
          {row.getValue("actions")}

          {row.getValue("actions") === "Download" && <Download color="#000" />}
          {row.getValue("actions") === "Pay now" && <ArrowRight color="#000" />}
        </Link>
      );
    }
  }
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div className="w-full">
      <div className="overflow-auto">
        <Table className="mb-4">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="tracking-wider text-base text-nowrap font-bold text-[#000]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-adsbin-evergreens text-base tracking-wider"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationUI />
    </div>
  );
}
