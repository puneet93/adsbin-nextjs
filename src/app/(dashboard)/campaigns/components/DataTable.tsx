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
import ActionDropdown from "@/components/ActionDropdown";
import { PaginationUI } from "@/components/Pagination";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    assets: 24,
    locations: 97,
    status: "Approved",
    name: "Big Bunny 04",
    startDate: "24/04/2025",
    endDate: "31/04/2025",
    actions: ""
  },
  {
    id: "3u1reuv4",
    assets: 5,
    locations: 12,
    status: "Unpaid",
    name: "Fizzy Pop Adreel",
    startDate: "12/04/2025",
    endDate: "21/04/2025",
    actions: ""
  },
  {
    id: "derv1ws0",
    assets: 5,
    locations: 12,
    status: "Running",
    name: "Lorem.png",
    startDate: "12/04/2025",
    endDate: "21/04/2025",
    actions: ""
  }
];

export type Payment = {
  id: string;
  assets: number;
  locations: number;
  status: "Approved" | "Unpaid" | "Running";
  startDate: string;
  endDate: string;
  actions: string;
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <h4 className="text-adsbin-evergreens text-base font-bold">
        {row.getValue("name")}
      </h4>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Status status={row.getValue("status")} />
  },
  {
    accessorKey: "assets",
    header: "Assets",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("assets")}</div>
    )
  },
  {
    accessorKey: "locations",
    header: "Locations",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("locations")}</div>
    )
  },
  {
    accessorKey: "startDate",
    header: "Start date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("startDate")}</div>
    )
  },
  {
    accessorKey: "endDate",
    header: "End date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("endDate")}</div>
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
