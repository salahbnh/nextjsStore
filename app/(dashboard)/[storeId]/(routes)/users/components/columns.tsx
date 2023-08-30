"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type UserColumn = {
  id: string
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  date_n: string;
  createdAt: string;
}

export const columns: ColumnDef<UserColumn>[] = [
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "prenom",
    header: "Préom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mdp",
    header: "Mot De Passe",
  },
  {
    accessorKey: "date_n",
    header: "Date",
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
