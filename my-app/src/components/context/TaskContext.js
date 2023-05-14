import React, { createContext, useContext, useEffect, useState } from "react";
import { BoardContext } from "./BoardContext";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { boards, activeBoard } = useContext(BoardContext);
  const [activeTask, setActiveTask] = useState({
    step: "",
    id: "",
    index: "",
    name: "",
    description: "",
    subtasks: [],
  });

  useEffect(() => {
    console.log("TasKContext.js, activeTask:", activeTask);
  }, [activeTask]);

  return (
    <TaskContext.Provider value={{ activeTask, setActiveTask }}>
      {children}
    </TaskContext.Provider>
  );
}
