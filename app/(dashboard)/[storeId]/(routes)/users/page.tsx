import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { UserColumn } from "./components/columns"
import { UsersClient } from "./components/client";

const SizesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const users = await prismadb.user.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedSizes: UserColumn[] = users.map((item) => ({
    id: item.id,
    nom: item.nom,
    prenom: item.prenom,
    email: item.email,
    mdp: item.mdp,
    date_n: item.date_n ? format(item.date_n, 'MMMM do, yyyy') : '',
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UsersClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
