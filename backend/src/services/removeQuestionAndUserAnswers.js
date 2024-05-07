import { Question } from "../models/questions.js";
import { Quiz } from "../models/quizzes.js";
import { UserAnswer } from "../models/userAnswers.js";

export async function removeQuestionAndUserAnswers(questionId) {
  // userAnswers nach der questionId durchsuchen und die gefundenen userAnswers auch löschen?
  // dann die Frage selbst löschen?
  // und Frage auch aus referenzierten Quizzes löschen!

  const foundQuestion = await Question.findById(questionId);
  if (!foundQuestion)
    throw new Error(
      "The question with the id " + questionId + " does not exist."
    );

  // userAnswers löschen:
  const removedUserAnswers = await UserAnswer.deleteMany({ questionId });

  // in Quizzes-Modell nach questionId suchen und dort nur die questionId aus dem array namens questionIds entfernen
  const removedQuestionsFromQuizzes = await Quiz.updateMany(
    { questionIds: questionId },
    { $pullAll: { questionIds: [questionId] } }
  );

  // Frage selbst löschen:
  const removedQuestion = await Question.findByIdAndDelete(questionId);

  return {
    ...removedQuestion.toObject(),
    removedUserAnswers,
    removedQuestionsFromQuizzes,
  };
}
