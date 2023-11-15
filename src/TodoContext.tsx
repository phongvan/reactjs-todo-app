import { createContext, useState } from "react";
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState();
  const [tasks, setTasks] = useState([]);

  const addTodoList = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newTodo) return;

    console.log('editTodo:',editTodo, typeof editTodo);
    
    if(editTodo || editTodo ===0 ){
      //update
      tasks[editTodo] = newTodo;
      setTasks(tasks);
    }else{
      // add new
      setTasks([...tasks, newTodo]);
    }
  
    setNewTodo('')
    setEditTodo('')
  };
  const deleteTodo = (todoName: any)=>{
    setTasks(()=>{
      return tasks.filter((item)=> item!== todoName  )
    });
  }
  const editTask = (keyId: any)=>{
    console.log(key,'fdsff');
  }

  const value = [newTodo, tasks, addTodoList,setTasks,setNewTodo,deleteTodo,editTask,editTodo, setEditTodo];
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { TodoProvider, TodoContext };
