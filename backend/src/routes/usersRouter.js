import express from "express";
import { UsersController } from "../controllers/usersController.js";

export const usersRouter = express
  .Router()
  .post("/api/v1/users", UsersController.postCreateUserCtrl)
  .patch("/api/v1/users/:userId", UsersController.patchUpdateUserCtrl)
  .delete(
    "/api/v1/users/:userId",
    UsersController.deleteUserAndUserAnswersCtrl
  );
