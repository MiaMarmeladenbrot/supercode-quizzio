import { Question } from "../models/questions.js";

export async function editQuestion(questionId, questionUpdateInfos) {
  const findQuestion = await Question.findById(questionId);
  if (!findQuestion)
    throw new Error("Could not find Question with the id " + questionId);

  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { $set: questionUpdateInfos },
    { new: true }
  );

  return updatedQuestion;
}
