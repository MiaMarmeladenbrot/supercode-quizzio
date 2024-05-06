import express from "express";
import { UserAnswersController } from "../controllers/userAnswersController.js";

export const userAnswersRouter = express
  .Router()
  // Alternativer Endpunkt, dann userId und questionId im req.body mitgeben: .post("/api/v1/userAnswers", UserAnswersController.postCreateUserAnswerCtrl);
  .post(
    "/api/v1/users/:userId/userAnswers/:questionId",
    UserAnswersController.postCreateUserAnswerCtrl
  )
  .delete(
    "/api/v1/userAnswers/:userAnswerId",
    UserAnswersController.deleteUserAnswerCtrl
  );
