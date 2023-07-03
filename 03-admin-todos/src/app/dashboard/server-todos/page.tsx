import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Server Todos",
  description: "Server Todos (server actions)",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  return (
    <>
      <h1 className="text-2xl mb-3">Server Actions (Alpha)</h1>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  );
}
