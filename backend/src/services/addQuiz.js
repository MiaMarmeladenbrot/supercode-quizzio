import { Quiz } from "../models/quizzes.js";

export async function addQuiz(quizInfo) {
  const foundQuiz = await Quiz.findOne({ name: quizInfo.name });
  if (foundQuiz)
    throw new Error("Ein Quiz mit diesem Namen existiert bereits.");
  return Quiz.create(quizInfo);
}
