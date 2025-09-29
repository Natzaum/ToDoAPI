import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import taskRouter from "./routers/taskRouter";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/tasks", taskRouter);

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).send(error.message);
});

export default app;
