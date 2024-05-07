import { User } from "../models/users.js";
import { UserAnswer } from "../models/userAnswers.js";

export async function removeUserAndUserAnswers(userId) {
  const removedUser = await User.findByIdAndDelete(userId);
  if (!removedUser)
    throw new Error("The user with the id " + userId + " does not exist.");

  const removedUserAnswers = await UserAnswer.deleteMany({ userId });

  return { ...removedUser.toObject(), removedUserAnswers };
}
