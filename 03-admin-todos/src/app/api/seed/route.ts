import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany({});
  await prisma.user.deleteMany({});

  const user = await prisma.user.create({
    data: {
      name: "Test User",
      email: "test1@google.com",
      password: bcrypt.hashSync("pass_good", 10),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Learn React", completed: true },
          { description: "Learn Next.js", completed: false },
        ],
      },
    },
  });

  return NextResponse.json({ message: "Seed Executed." });
}
