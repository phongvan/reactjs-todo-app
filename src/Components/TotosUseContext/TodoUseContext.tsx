import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import AddTodo from "./AddTodo";
import ListTask from "./ListTask";

function TodoUseContext() {
  const Todo = useContext(TodoContext);

  //console.log(Todo);
  return (
    <>
      <h1>Todos -Ik</h1>
      <AddTodo />
      <ListTask />
    </>
  );
}

export default TodoUseContext;
