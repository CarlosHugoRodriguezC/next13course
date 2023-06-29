import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rest Todos",
  description: "Rest Todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
