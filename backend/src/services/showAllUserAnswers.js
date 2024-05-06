import { UserAnswer } from "../models/userAnswers.js";
import { User } from "../models/users.js";

export async function showAllUserAnswersByUserId(userId) {
  const foundUser = await User.findById(userId);
  if (!foundUser) throw new Error("No user found with the id " + userId);

  const userAnswers = await UserAnswer.find({ userId });
  return userAnswers;
}
