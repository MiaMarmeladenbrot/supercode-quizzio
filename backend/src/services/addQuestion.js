import { Question } from "../models/questions.js";

export async function addQuestion(questionInfo) {
  const addedQuestion = await Question.create(questionInfo);
  return addedQuestion;
}
