import { addQuestion } from "./addQuestion.js";
import { addQuiz } from "./addQuiz.js";
import { addUser } from "./addUser.js";
import { addUserAnswer } from "./addUserAnswer.js";
import { editQuestion } from "./editQuestion.js";
import { editUser } from "./editUser.js";
import { removeQuestionAndUserAnswers } from "./removeQuestionAndUserAnswers.js";
import { removeQuiz } from "./removeQuiz.js";
import { removeUserAndUserAnswers } from "./removeUserAndUserAnswers.js";
import { removeUserAnswer } from "./removeUserAnswer.js";
import { showAllUserAnswersByUserId } from "./showAllUserAnswers.js";
import { showOneQuiz } from "./showOneQuiz.js";

export const QuizzesService = {
  addQuiz,
  showOneQuiz,
  removeQuiz,
};

export const QuestionsService = {
  addQuestion,
  removeQuestionAndUserAnswers,
  editQuestion,
};

export const UsersService = {
  addUser,
  editUser,
  removeUserAndUserAnswers,
};

export const UserAnswersService = {
  addUserAnswer,
  showAllUserAnswersByUserId,
  removeUserAnswer,
};
