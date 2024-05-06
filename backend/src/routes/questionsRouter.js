import express from "express";
import { QuestionsController } from "../controllers/questionsController.js";

export const questionsRouter = express
  .Router()
  .post("/", QuestionsController.postCreateQuestionCtrl)
  .patch("/:questionId", QuestionsController.patchUpdateQuestionCtrl)
  .delete("/:questionId", QuestionsController.deleteQuestionAndUserAnswersCtrl);
