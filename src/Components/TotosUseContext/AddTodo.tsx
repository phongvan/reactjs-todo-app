import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function AddTodo() {
  //newTodo, tasks,addTodoList

  const [newTodo, tasks, addTodoList,setTasks,setNewTodo,deleteTodo,editTask,editTodo, setEditTodo] =
    useContext(TodoContext);
  //console.log('addTodoList: ',addTodoList);
  //console.log(newTodo);

  return (
    <div className="">
      <form action="" className="d-flex" onSubmit={addTodoList}>
        <input
          className="form-control"
          placeholder="Enter name"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input type="text" 
         value={editTodo}
         onChange={(e) => setEditTodo(e.target.value)}
        />
        <button className="btn btn-danger" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
