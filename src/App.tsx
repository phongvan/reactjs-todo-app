import { useState } from "react";

import AddForm from "./Components/AddForm";
import ListTask from "./Components/ListTask";
import Test from "./Components/Test";
import TodoUseContext from "./Components/TotosUseContext/TodoUseContext";

function App() {
  /* const [tasks, setTasks] = useState([]);
  const deleteTask = (currentTaskName: never) => {
    setTasks(() => {
      return tasks.filter((item) => item !== currentTaskName);
    });
  };

  const addTodo = (name: string) => {
    setTasks([...tasks, name]);
  }; */

  return (
    <div className="wrapper">
      {/* <AddForm onSubmit={addTodo} />
      <ListTask tasks={tasks} deleteTask={deleteTask} /> */}
      <TodoUseContext/>
    </div>
  );
}

export default App;
