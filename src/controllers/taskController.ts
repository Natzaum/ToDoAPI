import type { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/taskService";

const taskService = new TaskService();

export class TaskController {
  async getTaskById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const task = await taskService.getTaskById(id);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  }

  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description } = req.body;
      const task = await taskService.createTask(title, description);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const updates = req.body;
      const task = await taskService.updateTask(id, updates);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await taskService.deleteTask(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}