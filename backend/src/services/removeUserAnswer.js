import { UserAnswer } from "../models/userAnswers.js";

export async function removeUserAnswer(userAnswerId) {
  const removedUserAnswer = await UserAnswer.findByIdAndDelete(userAnswerId);
  return removedUserAnswer;
}
