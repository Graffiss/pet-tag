import { Router } from "express";

const router = Router();

router.get("/pet", (req, res) => {
  res.json({ message: "Pet" });
});

router.get("/pet/:id", (req, res) => {});

router.post("/pet", (req, res) => {});

router.put("/pet/:id", (req, res) => {});

router.delete("/pet/:id", (req, res) => {});

export default router;
