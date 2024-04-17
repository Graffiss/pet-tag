import { comparePasswords, createJWT } from "../../../../utils";
import prisma from "../../../db";

export const login = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { username: req.body.username },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = createJWT(user);
  res.json({ token });
};
