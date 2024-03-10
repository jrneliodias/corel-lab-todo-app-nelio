import { ITask, ITaskColor, TaskObject } from "../../../types/tasks";
import prisma from "../../../lib/db";

const baseUrl = "https://todo-list-app-nelio-jwpj6z5yf-jrneliodias-projects.vercel.app/apis";

export const getAllTodos = async (): Promise<TaskObject> => {
  const res = await fetch(`/task`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITaskColor): Promise<ITaskColor> => {
  const res = await fetch(`/apis/add-task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITaskColor): Promise<ITaskColor> => {
  const res = await fetch(`/task`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await res.json();
  return updateTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/task`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};

export async function getAllTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}
