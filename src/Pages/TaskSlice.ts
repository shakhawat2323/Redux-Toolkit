import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "./type";
import type { RootState } from "./store";

interface initialState {
  tasks: ITask[];
  filter: "High" | "Low" | "all" | "Medium" | "all";
}

const initialState: initialState = {
  tasks: [],
  filter: "High",
};
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    AddTask: (state, action: PayloadAction<DraftTask>) => {
      const TaskData = createTask(action.payload);
      state.tasks.push(TaskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task;
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"low" | "all" | "high" | "medium">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  console.log(filter);
  if (filter === "low") {
    return state.todo.tasks.filter((taks) => taks.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((taks) => taks.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((taks) => taks.priority === "high");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { AddTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
