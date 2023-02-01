// const router = require('express').Router()

import { Router } from "express";

const router = Router();

import * as cardController from "./card.controller.js";

router.post("/addcard", cardController.addcard);
router.get("/", cardController.getcards);
router.delete(
  "/deletecard/:prodId/:UserId",
  cardController.deletecard
);

router.put("/:prodId/:UserId", cardController.updatecard);
export default router;
