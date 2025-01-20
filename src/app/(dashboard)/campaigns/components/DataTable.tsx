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
import { useWindowDimensions } from "@/lib/useWindowDimensions";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

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
  },
  {
    id: "derv1ws0",
    assets: 5,
    locations: 12,
    status: "Rejected",
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
  status: "Approved" | "Unpaid" | "Running" | "Rejected";
  startDate: string;
  endDate: string;
  actions: string;
  name: string;
};

export function DataTable({ onPreviewClick }: { onPreviewClick: () => void }) {
  const { width } = useWindowDimensions();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      actions: width > 767,
      endDate: width > 767,
      startDate: width > 767,
      locations: width > 767,
      assets: width > 767
    });
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
    setColumnVisibility((prev) => ({
      ...prev,
      actions: width > 767, // Toggle visibility of the 'actions' column
      endDate: width > 767, // Toggle visibility of the 'actions' column
      startDate: width > 767, // Toggle visibility of the 'actions' column
      locations: width > 767, // Toggle visibility of the 'actions' column
      assets: width > 767 // Toggle visibility of the 'actions' column
    }));
  }, [width]);


  const columns: ColumnDef<Payment>[] = [
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
      accessorKey: "preview",
      header: "Preview",
      cell: ({ row }) => (
        <Button
          variant={"outline"}
          disabled={row.getValue("status") === "Rejected"}
          className="sm:text-sm anim-pulse rounded-none !shadow-none ml-auto border-0 md:border md:border-adsbin-grey-100 !h-9 font-semibold text-adsbin-evergreens"
          onClick={() => onPreviewClick()} // Pass the row's data to the parent
        >
          <span className="sm:flex hidden items-center gap-2.5">
            Preview <Eye color="#415B41" size={16} />
          </span>
          <span className="sm:hidden">
            <Eye color="#B8C6B8" size={24} />
          </span>
        </Button>
      ),
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
                      data-prev={cell.id}
                      className="text-adsbin-evergreens text-base tracking-wider"
                    >
                      {
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        }
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
