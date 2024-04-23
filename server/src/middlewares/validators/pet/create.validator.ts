import { body } from "express-validator";

export const createValidator = (req, res, next) => {
  body("name").exists().isString().isLength({ min: 2, max: 255 });
  body("type").exists().isIn(["DOG", "CAT", "OTHER"]);
  body("birthdate").isISO8601().optional();
  body("breed").isString().optional();
  body("color").isString().optional();
  body("primaryPhone").isString().optional();
  body("secondaryPhone").isString().optional();
  body("address").isString().optional();
  body("vetName").isString().optional();

  next();
};
