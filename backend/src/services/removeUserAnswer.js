import { UserAnswer } from "../models/userAnswers.js";

export async function removeUserAnswer(userAnswerId) {
  const foundUserAnswer = await UserAnswer.findById(userAnswerId);
  if (!foundUserAnswer)
    throw new Error(
      "The user answer with the id " + userAnswerId + " does not exist."
    );

  const removedUserAnswer = await UserAnswer.findByIdAndDelete(userAnswerId);
  return removedUserAnswer;
}
