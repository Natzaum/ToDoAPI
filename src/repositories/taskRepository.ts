import Task from "../models/Task";

async function getTaskById(id: string) {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
}

async function getAllTasks() {
  return await Task.findAll();
}

async function createTask(title: string, description?: string) {
  if (!title) {
    throw new Error("Title is required");
  }
  return await Task.create({ title, description });
}

async function updateTask(
  id: number,
  updates: Partial<{ title: string; description: string; completed: boolean }>
) {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return await task.update(updates);
}

async function deleteTask(id: number) {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new Error("Task not found");
  }
  await task.destroy();
  return true;
}

export default {
  getTaskById,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
