import { Quiz } from "../models/quizzes.js";

export async function removeQuiz(quizId) {
  const foundQuiz = await Quiz.findById(quizId);
  if (!foundQuiz)
    throw new Error("The quiz with the id " + quizId + " does not exist.");

  const removedQuiz = await Quiz.findByIdAndDelete(quizId);
  return removedQuiz;
}
