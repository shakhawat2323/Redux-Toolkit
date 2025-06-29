import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Pages/counterSlice";
import taskReducer from "../Pages/TaskSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store;
