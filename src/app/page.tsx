import { getAllTodos } from "@/app/apis/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import prisma from '../../lib/db'

async function getAllTasks() {
  const tasks = await prisma.task.findMany()
  return tasks

}

export default async function Home() {
  const tasks = await getAllTasks();


  return (
    <main className="max-w-4xl my-5 mx-auto">
      <div className="flex w-full flex-col gap-3 justify-center">
        <h1 className="text-center text-3xl justify-center font-bold">TO DO LIST</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>

    </main>
  );
}
