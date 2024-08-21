import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(){
    return NextResponse.json(
        {message: "hello from Post body"},
        {
            status: 200
        }
    )
};
const title = "asdf";
const content = "asdf";

