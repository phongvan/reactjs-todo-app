import { createContext, useState } from "react";
const ThemeContext = createContext()

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('dark');
    //const [newTodo, SetNewTodo] = useState('');
    //const [tasks, SetTasks] = useState([]);

    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider }