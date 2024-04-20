import express, { Router } from "express";
import morgan from "morgan";
import cors from "cors";
import petRouter from "./routes/pet/router";
import userRouter from "./routes/user/router";

const app = express();
const router = Router();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router).use("/api/user", userRouter).use("/api", petRouter);

export default app;
