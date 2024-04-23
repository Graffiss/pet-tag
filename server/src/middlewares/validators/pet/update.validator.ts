import { body } from "express-validator";

export const updateValidator = (req, res, next) => {
  body("name").isString().isLength({ min: 2, max: 255 }).optional();
  body("type").isIn(["DOG", "CAT", "OTHER"]).optional();
  body("birthdate").isISO8601().optional();
  body("breed").isString().optional();
  body("color").isString().optional();
  body("primaryPhone").isString().optional();
  body("secondaryPhone").isString().optional();
  body("address").isString().optional();
  body("vetName").isString().optional();
  body("missing").isIn(["MISSING", "NOT_MISSING", "FOUND"]).optional();

  next();
};
