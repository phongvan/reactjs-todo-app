import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { TodoContext  } from "../TodoContext";

function Test() {
  const theme = useContext(ThemeContext);
  const todos = useContext(TodoContext);

  console.log(todos);
  

  return (
    <>
      <h1>Tesst </h1>
      <h2>{todos}</h2>
    </>
  );
}

export default Test;
