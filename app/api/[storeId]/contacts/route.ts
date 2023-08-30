import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
 

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const contacts = await prismadb.contact.findMany({
      where: {
        storeId: params.storeId
      }
    });
  
    return NextResponse.json(contacts);
  } catch (error) {
    console.log('[CONTACTS_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
