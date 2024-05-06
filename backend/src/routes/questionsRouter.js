import express from "express";
import { QuestionsController } from "../controllers/questionsController.js";

export const questionsRouter = express
  .Router()
  .post("/", QuestionsController.postCreateQuestionCtrl)
  .delete("/:questionId", QuestionsController.deleteQuestionAndUserAnswersCtrl);
