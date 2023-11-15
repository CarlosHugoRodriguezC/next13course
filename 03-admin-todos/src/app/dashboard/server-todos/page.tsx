export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getUserServerSession } from "@/app/auth";
import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Server Todos",
  description: "Server Todos (server actions)",
};

export default async function ServerTodosPage() {
  const user = await getUserServerSession();

  if (!user) redirect("/api/auth/signin");


  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { id: "desc" },
  });


  return (
    <>
      <h1 className="text-2xl mb-3">Server Actions (Alpha)</h1>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  );
}
