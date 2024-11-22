"use client";
import { Checkbox } from "@/components/ui/checkbox";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Building } from "@/constants/mock-api";

export const columns: ColumnDef<Building>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "building_name",
    header: "NAME",
  },
  {
    accessorKey: "site",
    header: "SITE",
  },
  {
    accessorKey: "total_floor",
    header: "Total Floor",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
