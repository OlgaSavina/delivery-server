import { body } from "express-validator";


export const orderCreateValidation = [
  body("name").isLength({ min: 3 }).isString(),
  body("email").isLength({ min: 3 }).isString(),
  body("phone").isLength({ min: 3 }).isString(),
  body("adress").isLength({ min: 3 }).isString(),
];
