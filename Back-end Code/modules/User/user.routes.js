// const router = require('express').Router()

import { Router } from "express";

const router = Router();
// const userController = require('./user.controller')
import * as userController from "./user.controller.js";
// console.log({ userController });
router.get("/", userController.getUser);
router.post("/addUser", userController.addUser);
router.post("/login", userController.login);
export default router;
