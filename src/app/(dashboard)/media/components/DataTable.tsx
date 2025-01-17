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
import { PaginationUI } from "@/components/Pagination";
import ActionDropdown from "@/components/ActionDropdown";
import NameMedia from "./NameMedia";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "Uploaded",
    email: "ken99@yahoo.com",
    img: "/image-1.png",
    title: "Poster of Big Bunny",
    name: "Lorem.png",
    type: "Image",
    size: "240kb",
    actions: ""
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    img: "/image-1.png",
    title: "Poster of Big Bunny",
    name: "Lorem.png",
    type: "Image",
    size: "240kb",
    actions: ""
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    img: "/image-1.png",
    title: "Poster of Big Bunny",
    name: "Lorem.png",
    type: "Image",
    size: "240kb",
    actions: ""
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    img: "/image-1.png",
    title: "Poster of Big Bunny",
    name: "Lorem.png",
    type: "Image",
    size: "240kb",
    actions: ""
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    img: "/image-1.png",
    title: "Poster of Big Bunny",
    name: "Lorem.png",
    type: "Image",
    size: "240kb",
    actions: ""
  }
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed" | "Uploaded";
  email: string;
  type: string;
  size: string;
  actions: string;
  img: string;
  title: string;
  name: string;
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
    accessorKey: "filename",
    header: "Filename",
    cell: () => <NameMedia />
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => <div className="capitalize">{row.getValue("size")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    )
  },
  {
    id: "actions",
    accessorKey: "sctions",
    header: "",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return <ActionDropdown payment={payment} />;
    }
  }
];

export function DataTable({ getValue }: { getValue: () => void }) {
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
                  onClick={getValue}
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
