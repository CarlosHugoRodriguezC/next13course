import { Todo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import {
  IoCheckboxOutline,
  IoCheckboxSharp,
  IoSquareOutline,
} from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div
      key={todo.id}
      className={todo.completed ? styles.todoDone : styles.todoPending}
      onClick={() => toggleTodo(todo.id, !todo.completed)}
    >
      {todo.completed ? (
        <IoCheckboxOutline size={30} />
      ) : (
        <IoSquareOutline size={30} />
      )}

      {todo.description}
    </div>
  );
};
