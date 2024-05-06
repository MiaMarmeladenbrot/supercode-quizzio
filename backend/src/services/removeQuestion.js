import { Question } from "../models/questions.js";

// remove question AND remove referenced userAnswers

export async function removeQuestionAndUserAnswers(questionId) {
  // userAnswers nach der questionId durchsuchen und die gefundenen userAnswers auch löschen?
  // dann die Frage selbst löschen?
  
  
  const removedQuestion = await Question.findByIdAndDelete(questionId);
  return removedQuestion;
}
