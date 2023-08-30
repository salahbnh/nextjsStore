"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  size: string; // Ensure this is a string
  color: string;
  rating: string;
  createdAt: string;
  isFeatured: boolean;
  isArchived: boolean;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const ratingValue = parseFloat(row.original.rating); // Convert rating to a number

      // Create an array of filled and empty star icons based on the rating value
      const stars = Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`text-yellow-500 ${
            index < ratingValue ? "fas" : "far"
          } fa-star`}
        />
      ));

      return <div className="flex items-center gap-x-1">{stars}</div>;
    },
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }} />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
