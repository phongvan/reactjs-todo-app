import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";


import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoProvider } from "./TodoContext.tsx";
import { ThemeProvider } from "./ThemeContext.js";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TodoProvider>
  </React.StrictMode>
);
