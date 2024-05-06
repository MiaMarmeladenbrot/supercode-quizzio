import { User } from "../models/users.js";
import { UserAnswer } from "../models/userAnswers.js";

// remove question AND referenced userAnswers
export async function removeUserAndUserAnswers(userId) {
  // nur falls User überhaupt existiert
  // userAnswers nach der userId durchsuchen und die gefundenen userAnswers auch löschen?
  // dann den User selbst löschen?

  const foundUser = await User.findById(userId);
  if (!foundUser)
    throw new Error("The user with the id " + userId + " does not exist.");

  // userAnswers löschen:
  const removedUserAnswers = await UserAnswer.deleteMany({ userId });
  console.log(removedUserAnswers); // -> { acknowledged: true, deletedCount: 0 }

  // User selbst löschen:
  const removedUser = await User.findByIdAndDelete(userId);
  console.log(removedUser);
  return { ...removedUser.toObject(), removedUserAnswers };
}
