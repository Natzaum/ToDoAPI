import type { Request, Response, NextFunction } from "express";
import taskRepository from "../repositories/taskRepository";

async function getTaskById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ error: "Task ID is required" });
      return;
    }
    const task = await taskRepository.getTaskById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getAllTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = await taskRepository.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, description } = req.body;
    if (!title) {
      res.status(400).json({ error: "Title is required" });
      return;
    }
    const newTask = await taskRepository.createTask(title, description);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function updateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    if (!id) {
      res.status(400).json({ error: "Task ID is required" });
      return;
    }
    const updatedTask = await taskRepository.updateTask(Number(id), {
      title,
      description,
      completed,
    });
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ error: "Task ID is required" });
      return;
    }
    await taskRepository.deleteTask(Number(id));
    res.status(204).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default {
  getTaskById,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
