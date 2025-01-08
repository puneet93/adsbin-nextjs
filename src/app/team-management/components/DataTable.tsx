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
import { PaginationUI } from "@/components/Pagination"
import ActionDropdown from "@/components/ActionDropdown"
import Image from "next/image"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "Active",
    email: "ken99@yahoo.com",
    img: '/image-1.png',
    title: 'Poster of Big Bunny',
    name: 'Lorem.png',
    type: 'Network Manager',
    lastseen: 'A week ago',
    actions: ''
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "Active",
    email: "Abe45@gmail.com",
    img: '/image-1.png',
    title: 'Poster of Big Bunny',
    name: 'Lorem.png',
    type: 'Admin',
    lastseen: 'Today',
    actions: ''
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    img: '/image-1.png',
    title: 'Poster of Big Bunny',
    name: 'Lorem.png',
    type: 'Content Editor',
    lastseen: 'Today',
    actions: ''
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "Active",
    email: "Silas22@gmail.com",
    img: '/image-1.png',
    title: 'Poster of Big Bunny',
    name: 'Lorem.png',
    type: 'Content Editor',
    lastseen: 'Yesterday',
    actions: ''
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "Active",
    email: "carmella@hotmail.com",
    img: '/image-1.png',
    title: 'Poster of Big Bunny',
    name: 'Lorem.png',
    type: 'Network Manager',
    lastseen: 'More then a week ago',
    actions: ''
  },
]

export type Payment = {
  id: string
  amount: number
  status: "Active" | "processing"
  email: string,
  type: string,
  lastseen: string,
  actions: string,
  img: string,
    title: string,
    name: string
}


export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
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
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: () => (
      <div className="flex items-center gap-2.5 min-w-60">
        <div><Image src={"/image-1.png"} alt={"Title"} width="47" height="44" className="rounded-full" /></div>
        <div>
            <h4 className="text-black text-base font-bold">Poster of Big Bunny</h4>
            <p className="text-xsm font-normal">george.che@gmail.com</p>
        </div>
        </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "lastseen",
    header: "Last Seen",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastseen")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("type")}</div>
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

export function DataTable() {
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
    <div className="w-full">
        <div className="overflow-auto">            
        <Table className="mb-4">
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                    return (
                        <TableHead key={header.id} className="tracking-wider text-base font-bold text-[#000]">
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
                        <TableCell key={cell.id} className="text-black text-base tracking-wider">
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
  )
}
