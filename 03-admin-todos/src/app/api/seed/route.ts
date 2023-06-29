import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {

  await prisma.todo.deleteMany({});

  // await prisma.employee.
  
  await prisma.todo.createMany({
    data: [
        { description: "Learn React", completed: true },
        { description: "Learn Next.js", completed: false },
    ]
  })

  return NextResponse.json({ message: "Seed Executed." });
}
