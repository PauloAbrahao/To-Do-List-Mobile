import {ReactNode} from "react";

export interface CategoryProps {
  type: string;
  color: string;
  value: number;
}

export interface TaskProviderProps {
  children: ReactNode;
}

export interface TaskProps {
  id: number;
  task: string;
  check: boolean;
}

export interface TaskContextType {
  tasks: TaskProps[];
  addTask: (task: string) => void;
  markAsDone: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export interface MainProps {
  handleOnLayout: () => void; 
}

export interface ButtonProps {
  onPress: () => void; 
}