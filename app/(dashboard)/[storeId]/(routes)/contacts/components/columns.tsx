"use client"

import { ColumnDef } from "@tanstack/react-table"



export type ContactColumn = {
  id: string
  nom_prenom: string;
  email: string;
  sujet: string;
  description: string;
  createdAt: string;
}

export const columns: ColumnDef<ContactColumn>[] = [
  {
    accessorKey: "nom_prenom",
    header: "Nom & Prénom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "sujet",
    header: "Sujet",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  
];
