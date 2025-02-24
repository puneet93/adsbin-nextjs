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
import ActionDropdown from "@/components/ActionDropdown";
import { useWindowDimensions } from "@/lib/useWindowDimensions";

const data: Payment[] = [
  {
    id: "derv1ws0",
    status: "Online",
    name: "Herenstraat",
    screen: "3",
    actions: ""
  },
  {
    id: "m5gr84i9",
    status: "Online",
    name: "Big Bunny 04",
    screen: "4",
    actions: ""
  },
  {
    id: "3u1reuv4",
    status: "Online",
    name: "Fizzy Pop Adreel",
    screen: "5",
    actions: ""
  }
];

export type Payment = {
  id: string;
  status: "Approved" | "Unpaid" | "Running" | "Online";
  screen: string;
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
    accessorKey: "screen",
    header: "Screen",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("screen")}</div>
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
  const { width } = useWindowDimensions();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({ actions: width > 767, screen: width > 767 });
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
      setColumnVisibility((prev) => ({
        ...prev,
        actions: width > 767, // Toggle visibility of the 'actions' column
        screen: width > 767, // Toggle visibility of the 'actions' column
      }));
    }, [width]);

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
        <Table className="mb-4 border-b border-adsbin-grey-100">
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
                          className={`text-adsbin-evergreens text-base tracking-wider ${cell?.column?.id === 'screen' && 'pl-8'}`}
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
