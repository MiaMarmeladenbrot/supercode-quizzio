import { Question } from "../models/questions.js";
import { UserAnswer } from "../models/userAnswers.js";

// remove question AND referenced userAnswers
export async function removeQuestionAndUserAnswers(questionId) {
  // userAnswers nach der questionId durchsuchen und die gefundenen userAnswers auch löschen?
  // dann die Frage selbst löschen?

  // userAnswers löschen:
  const removedUserAnswers = await UserAnswer.deleteMany({ questionId });
  // console.log(removedUserAnswers);

  // Frage selbst löschen:
  const removedQuestion = await Question.findByIdAndDelete(questionId);
  // console.log(removedQuestion);
  return { ...removedQuestion.toObject(), removedUserAnswers };
}
