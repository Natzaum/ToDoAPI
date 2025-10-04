import { TaskRepository } from "../repositories/taskRepository";
import { NotFoundError, ValidationError } from "../errors";

const taskRepository = new TaskRepository();

export class TaskService {
  async getTaskById(id: number) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    return task;
  }

  async getAllTasks() {
    const tasks = await taskRepository.findAll();
    if( tasks.length === 0 ) {
      throw new NotFoundError("No tasks found");
    }
    return tasks;
  }

  async createTask(title: string, description?: string) {
    if (!title) {
      throw new ValidationError("Title is required");
    }
    return taskRepository.create({ title, description });
  }

  async updateTask(
    id: number,
    updates: Partial<{ title: string; description: string; completed: boolean }>
  ) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    return taskRepository.update(task, updates);
  }

  async deleteTask(id: number) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    await taskRepository.delete(task);
    return true;
  }
}