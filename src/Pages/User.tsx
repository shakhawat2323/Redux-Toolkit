import AddTaskModule from "@/components/model/AddTaskModule";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectFilter, selectTask, updateFilter } from "./TaskSlice";
import TasxCard from "./TasxCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const User = () => {
  const tasks = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  const dispath = useAppDispatch();
  return (
    <div className="w-8/12 mx-auto mt-5">
      <div className="h-screen  py-10 space-y-6">
        <div className=" flex justify-between items-center">
          <p className="text-2xl font-bold">Task</p>
          <div className="flex items-center gap-5">
            <Tabs defaultValue={"all"}>
              <TabsList>
                <TabsTrigger
                  onClick={() => dispath(updateFilter("all"))}
                  value="all"
                >
                  all
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => dispath(updateFilter("high"))}
                  value="high"
                >
                  high
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => dispath(updateFilter("medium"))}
                  value="medium"
                >
                  medium
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => dispath(updateFilter("low"))}
                  value="low"
                >
                  low
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <AddTaskModule />
          </div>
        </div>
        {tasks.map((task) => (
          <TasxCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default User;
