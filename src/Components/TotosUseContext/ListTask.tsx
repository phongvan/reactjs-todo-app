import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function ListTask() {
  //const Todo = useContext(TodoContext);
  const [newTodo, tasks, addTodoList,setTasks,setNewTodo,deleteTodo,editTask,editTodo, setEditTodo] =
    useContext(TodoContext);

  return (
    <div className=" ">
      <h3 className="pt-3">List Tasks </h3>
      {tasks.map((item, key) => {
        return (
          <h2
            className="d-flex justify-content-between align-content-start bg-primary"
            key={`index_${key}`}
          >
            <button onClick={()=>{setNewTodo(item);setEditTodo(key)}}>{key}</button>
            <span>{item}</span>
            <button className="btn btn-danger" onClick={() => deleteTodo(item)}>
              X
            </button>
          </h2>
        );
      })}
    </div>
  );
}

export default ListTask;
