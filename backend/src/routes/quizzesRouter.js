import express from "express";
import { QuizzesController } from "../controllers/quizzesController.js";

export const quizzesRouter = express
  .Router()
  .get(
    "/api/v1/quizzes/:quizId/stats/:userId",
    QuizzesController.showQuizStatsForUserCtrl
  )
  .get("/api/v1/quizzes/:quizId", QuizzesController.getOneQuizWithQuestionsCtrl)
  .post("/api/v1/quizzes", QuizzesController.postCreateQuizCtrl)
  .delete("/api/v1/quizzes/:quizId", QuizzesController.deleteQuizCtrl)
  .patch("/api/v1/quizzes/:quizId", QuizzesController.patchUpdateQuizCtrl);
