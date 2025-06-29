export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // যেমন: "2025-11"
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High"; // Fixed value গুলো
}
