import { Quiz } from "../models/quizzes.js";

export async function editQuiz(quizId, quizUpdateInfo) {
  const foundQuiz = await Quiz.findById(quizId);
  if (!foundQuiz) throw new Error("Could not find quiz with id ", quizId);

  const updatedQuiz = await Quiz.findByIdAndUpdate(
    quizId,
    { $set: quizUpdateInfo },
    { new: true }
  );

  return updatedQuiz;
}
