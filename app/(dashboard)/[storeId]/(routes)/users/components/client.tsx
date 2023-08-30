"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, UserColumn } from "./columns";

interface UsersClientProps {
  data: UserColumn[];
}

export const UsersClient: React.FC<UsersClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Users (${data.length})`} description="Manage Users" />
      </div>
      <Separator />
      <DataTable searchKey="nom" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Users" />
      <Separator />
      <ApiList entityName="users" entityIdName="userId" />
    </>
  );
};
