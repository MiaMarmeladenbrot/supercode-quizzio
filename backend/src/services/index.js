import { addQuestion } from "./addQuestion.js";
import { addQuiz } from "./addQuiz.js";
import { addUser } from "./addUser.js";
import { addUserAnswer } from "./addUserAnswer.js";
import { removeQuiz } from "./removeQuiz.js";
import { showOneQuiz } from "./showOneQuiz.js";

export const QuizzesService = {
  addQuiz,
  showOneQuiz,
  removeQuiz,
};

export const QuestionsService = {
  addQuestion,
};

export const UsersService = { addUser };

export const UserAnswersService = {
  addUserAnswer,
};
