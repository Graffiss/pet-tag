import { createJWT, hashPassword } from "../../../../utils";
import prisma from "../../../db";

export const createNewUser = async (req, res, next) => {
  try {
    const hash = await hashPassword(req.body.password);

    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hash,
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    error.type = "input";
    next(error);
  }
};
