import { verifyJWT } from "../../../utils/helpers/jwt-token.helper";

export const auth = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    return res.status(401).json({ message: "Token is invalid" });
  }

  try {
    const user = verifyJWT(token);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: "Token is invalid" });
  }
};
