import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import taskRouter from "./routers/taskRouter";
import { errorHandler } from "./middlewares/ErrorHandler";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/tasks", taskRouter);

app.use(errorHandler);

export default app;
