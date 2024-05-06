import { UserAnswer } from "../models/userAnswers.js";

export async function addUserAnswer(userAnswerInfo) {
  // Error handling: Falls User diese Frage bereits beantwortet hat, kann er sie nicht noch einmal beantworten
  const foundUserAndQuestion = await UserAnswer.findOne({
    userId: userAnswerInfo.userId,
    questionId: userAnswerInfo.questionId,
  });
  if (foundUserAndQuestion)
    throw new Error("User hat diese Frage bereits beantwortet");

  return UserAnswer.create(userAnswerInfo);
}
