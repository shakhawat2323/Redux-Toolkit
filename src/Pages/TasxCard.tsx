import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "./type";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "./hooks";
import { deleteTask, toggleCompleteState } from "./TaskSlice";

interface Iprops {
  task: ITask;
}

const TaskCard = ({ task }: Iprops) => {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className=""
    >
      <div className="border-2 border-purple-600 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-purple-400">
        <div className="px-5 py-3 bg-white rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div
                className={cn("size-3 rounded-full", {
                  "bg-red-500": task.priority === "high",
                  "bg-yellow-500": task.priority === "medium",
                  "bg-green-500": task.priority === "low",
                })}
              ></div>
              <h1
                className={cn({
                  " line-through": task.isCompleted,
                })}
              >
                {task.title}
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <Button
                onClick={() => dispatch(deleteTask(task.id))}
                variant="link"
                className="p-0 text-red-500"
              >
                <Trash2 />
              </Button>
              <Checkbox
                checked={task.isCompleted}
                onClick={() => dispatch(toggleCompleteState(task.id))}
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600">{task.description}</p>
          <p className="mt-2 text-sm text-gray-400">
            Due: {task.dueDate.toString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
