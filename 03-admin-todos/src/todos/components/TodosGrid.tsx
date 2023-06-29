"use client";
import { Todo } from "@prisma/client";
import React from "react";
import { TodoItem } from "./TodoItem";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  const onToggleTodo = async (
    id: string,
    completed: boolean
  ): Promise<Todo | void> => {
    const todo = await todosApi.updateTodo(id, completed);
    router.refresh();
    return todo;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={onToggleTodo} />
      ))}
    </div>
  );
};
