import { Quiz } from "../models/quizzes.js";

export async function removeQuiz(quizId) {
  const removedQuiz = await Quiz.findByIdAndDelete(quizId);
  return removedQuiz;
}
