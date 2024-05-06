import { Question } from "../models/questions.js";
import { UserAnswer } from "../models/userAnswers.js";

// remove question AND referenced userAnswers
export async function removeQuestionAndUserAnswers(questionId) {
  // userAnswers nach der questionId durchsuchen und die gefundenen userAnswers auch löschen?
  // dann die Frage selbst löschen?

  const foundQuestion = await Question.findById(questionId);
  if (!foundQuestion)
    throw new Error(
      "The question with the id " + questionId + " does not exist."
    );

  // userAnswers löschen:
  const removedUserAnswers = await UserAnswer.deleteMany({ questionId });
  // console.log(removedUserAnswers);

  // Frage selbst löschen:
  const removedQuestion = await Question.findByIdAndDelete(questionId);
  // console.log(removedQuestion);
  return { ...removedQuestion.toObject(), removedUserAnswers };

  // # Frage noch aus den referenzierten Quizzes löschen - oder gleich andersrum referenzieren?
}
