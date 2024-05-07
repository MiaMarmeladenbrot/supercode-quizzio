import { Question } from "../models/questions.js";

export async function addQuestion(questionInfo) {
  const foundQuestion = await Question.findOne({
    question: questionInfo.question,
  });
  if (foundQuestion) throw new Error("This question does already exist.");

  // einschränkungen für Fragen: muss mindestens zwei Auswahlmöglichkeiten haben, indestens eine muss korrekt sein und die korrekten Antworten müssen in allen Antworten enthalten sein
  const min2Answers = questionInfo.answers.length >= 2;
  if (!min2Answers)
    throw new Error(
      "There have to be at least 2 options for a multiple choice question."
    );

  const min1CorrectAnswer = questionInfo.correctAnswers.length >= 1;
  if (!min1CorrectAnswer)
    throw new Error("At least one answer has to be the correct answer.");

  const checkCorrectAnswers = questionInfo.correctAnswers.every((correctAns) =>
    questionInfo.answers.includes(correctAns)
  );
  if (!checkCorrectAnswers)
    throw new Error("The correct answers must be subset of all answers.");

  const addedQuestion = await Question.create(questionInfo);
  return addedQuestion;
}
