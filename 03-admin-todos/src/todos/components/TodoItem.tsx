"use client";

import { Todo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import {
  IoCheckboxOutline,
  IoCheckboxSharp,
  IoSquareOutline,
} from "react-icons/io5";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isCompleteOptimistic =
    isFetching || isPending ? !todo.completed : todo.completed;

  const onToggleTodo = async () => {
    setIsFetching(true);
    await toggleTodo(todo.id, !todo.completed);
    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className={isCompleteOptimistic ? styles.todoDone : styles.todoPending}
      onClick={onToggleTodo}
    >
      {isCompleteOptimistic ? (
        <IoCheckboxOutline size={30} />
      ) : (
        <IoSquareOutline size={30} />
      )}

      {todo.description}
    </div>
  );
};
