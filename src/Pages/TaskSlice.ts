import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "./type";

interface initialState {
  task: ITask[];
}

const initialState: initialState = {
  task: [
    {
      id: "monasona",
      title: "initialize frontend",
      description: "Create Home page,and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "cute pori",
      title: "initialize frontend",
      description: "Create Home page,and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export default taskSlice.reducer;
