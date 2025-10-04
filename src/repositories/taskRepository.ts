import Task from "../models/Task";

export class TaskRepository {
  async findById(id: number) {
    return Task.findByPk(id);
  }

  async findAll() {
    return Task.findAll();
  }

  async create(data: { title: string; description?: string | undefined }) {
    return Task.create(data);
  }

  async update(task: Task, updates: Partial<{ title: string; description: string; completed: boolean }>) {
    return task.update(updates);
  }

  async delete(task: Task) {
    return task.destroy();
  }
}