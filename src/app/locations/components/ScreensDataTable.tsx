"use client"

import * as React from "react"
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
  useReactTable,
} from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Status from "@/components/Status"
import ActionDropdown from "@/components/ActionDropdown"

const data: Payment[] = [
  {
    id: "derv1ws0",
    status: "Online",
    name: 'LG G4 55 Inch',
    orientation: '0 Deg.',
    actions: ''
  },
  {
    id: "m5gr84i9",
    status: "Online",
    name: 'LG H Series 32 Inch',
    orientation: '90 Deg.',
    actions: ''
  },
  {
    id: "3u1reuv4",
    status: "Online",
    name: 'LG G4 55 Inch',
    orientation: '0 Deg.',
    actions: ''
  }
]

export type Payment = {
  id: string
  status: "Approved" | "Unpaid" | "Running" | "Online"
  orientation: string,
  actions: string,
    name: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
        <h4 className="text-black text-base font-bold">{row.getValue("name")}</h4>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Status status={row.getValue("status")} />
    ),
  },
  {
    accessorKey: "orientation",
    header: "Orientation",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("orientation")}</div>
    ),
  },
  {
    id: "actions",
    accessorKey: "sctions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      
      return (
        <ActionDropdown payment={payment} />
      )
    },
  },
]

export function ScreensDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
      rowSelection,
    },
  })

  return (
    <div className="w-full border-b border-gray-light">
        <div className="overflow-auto">            
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                    return (
                        <TableHead key={header.id} className="tracking-wider py-3 text-base font-bold text-[#000]">
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </TableHead>
                    )
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
                        <TableCell key={cell.id} className="text-black py-3 text-base tracking-wider">
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
    </div>
  )
}
