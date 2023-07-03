import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rest Todos",
  description: "Rest Todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  return (
    <div>
      <h1 className="text-2xl mb-3">Rest Todos (Stable)</h1>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
