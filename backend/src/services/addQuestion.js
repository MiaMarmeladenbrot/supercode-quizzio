import { Question } from "../models/questions.js";

export async function addQuestion(questionInfo) {
  const foundQuestion = await Question.findOne({
    question: questionInfo.question,
  });
  if (foundQuestion) throw new Error("Diese Frage gibt es bereits.");
  const addedQuestion = await Question.create(questionInfo);
  return addedQuestion;
}
