import express, { Router } from "express";
import morgan from "morgan";
import cors from "cors";
import petRouter from "./routes/pet/router";
import userRouter from "./routes/user/router";
import { unknownEndpoint } from "./middlewares/unknown-endpoint";

const app = express();
const router = Router();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router).use("/api/user", userRouter).use("/api/pet", petRouter);

app.use((error, req, res, next) => {
  if (error.type === "auth") {
    res.status(401).json({ error: "Unauthorized" });
  } else if (error.type === "input") {
    res.status(400).json({ error: "Invalid input" });
  } else {
    res.status(500).json({ error: `Something went wrong: ${error.message}` });
  }
});

app.use(unknownEndpoint);

export default app;
