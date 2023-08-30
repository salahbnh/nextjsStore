import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { frontId: string } }
) {
  try {
    if (!params.frontId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const user = await prismadb.user.findUnique({
      where: {
        id: params.frontId
      }
    });
  
    return NextResponse.json(user);
  } catch (error) {
    console.log('[USER_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};




export async function PATCH(
  req: Request,
  { params }: { params: { frontId: string, storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { nom, prenom, email, mdp, date_n } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.frontId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    if (!nom) {
      return new NextResponse("Nom is required", { status: 400 });
    }
    if (!prenom) {
      return new NextResponse("Prenom is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!mdp) {
      return new NextResponse("Password is required", { status: 400 });
    }


    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    await prismadb.user.update({
      where: {
        id: params.frontId
      },
      data: {
        nom,
        prenom,
        email,
        mdp,
        date_n,
      },
    });

    const user = await prismadb.user.update({
      where: {
        id: params.frontId
      }, 
      data : {
        nom,
        prenom,
        email,
        mdp,
        date_n
      }
    })
  
    return NextResponse.json(user);
  } catch (error) {
    console.log('[USER_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
