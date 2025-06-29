import { createBrowserRouter } from "react-router";

import Layout from "@/Layout";
import Task from "@/Pages/Task";
import User from "@/Pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Task,
      },
      {
        path: "/user",
        Component: User,
      },
    ],
  },
]);

export default router;
