import React, {createContext, useState, useContext} from "react";
import {TaskContextType, TaskProviderProps, TaskProps} from "../config/interfaces";

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  markAsDone: () => {},
  deleteTask: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({children}: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  
  const addTask = (taskText: string) => {
    const newTask: TaskProps = {
      id: tasks.length + 1,
      task: taskText,
      check: false,
    };
    setTasks([...tasks, newTask]);
  };

  const markAsDone = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, check: !task.check};
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{tasks, addTask, markAsDone, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};
