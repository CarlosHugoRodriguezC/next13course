"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItemExperimental = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      completed: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    toggleOptimistic(!todoOptimistic.completed);
    try {
      await toggleTodo(todo.id, !todoOptimistic.completed);
    } catch (error) {
      toggleOptimistic(!todoOptimistic.completed);
    }
  };

  return (
    <div
      className={
        todoOptimistic.completed ? styles.todoDone : styles.todoPending
      }
      onClick={onToggleTodo}
    >
      {todoOptimistic.completed ? (
        <IoCheckboxOutline size={30} />
      ) : (
        <IoSquareOutline size={30} />
      )}

      {todo.description}
    </div>
  );
};
