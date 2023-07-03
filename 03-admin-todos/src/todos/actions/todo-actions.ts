"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = (seconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

export const toggleToDo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
//   await sleep(3);
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo with id ${id} not found`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const todo = await prisma.todo.create({ data: { description } });

  revalidatePath("/dashboard/server-todos");
  return todo;
};

export const removeCompletedTodos = async (): Promise<void> => {
  const todos = await prisma.todo.deleteMany({ where: { completed: true } });

  revalidatePath("/dashboard/server-todos");
};
