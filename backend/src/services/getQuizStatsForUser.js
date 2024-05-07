import { Question } from "../models/questions.js";
import { Quiz } from "../models/quizzes.js";
import { UserAnswer } from "../models/userAnswers.js";
import { User } from "../models/users.js";

export async function getQuizStatsForUser(quizId, userId) {
  const foundQuiz = await Quiz.findById(quizId);
  if (!foundQuiz) throw new Error("Quiz not found with id ", quizId);

  const foundUser = await User.findById(userId);
  if (!foundUser) throw new Error("User not found with id", userId);
  console.log(userId);
  // wir wollen hier:
  // alle Fragen des Quizes
  // alle Antworten des Users
  // alle richtigen Antworten des Users

  //   const questionsOfQuiz = await Question.find({ quizId }); //--> Ahmeds Lösung, bei mir sind die questionIds aber in den Quizzes gespeichert, also:
  //   alle Fragen eines Quizes finden:
  const questionIds = foundQuiz.questionIds;
  const allQuestionsOfQuiz = await Question.find({ _id: questionIds });
  console.log(allQuestionsOfQuiz);

  // alle userAnswers finden mit der questionId und mit der userId, um daraus dann die Länge abzulesen und so anzuzeigen, wie viele Fragen dieser User beantwortet hat, die auch Teil des Quiz sind
  const userAnswers = await UserAnswer.find({
    questionId: { $in: questionIds },
    userId,
  });

  // gefundene userAnswers filtenr nach denen, die korrekt beantwortet wurden und mithilfe der Länge dann anzuzeigen, wie viele richtig beantwortet wurden
  const correctAnswers = userAnswers.filter((ans) => ans.correctAnswers);

  return {
    foundQuiz,
    numberOfQuestions: allQuestionsOfQuiz.length,
    numberOfAnsweredQuestions: userAnswers.length,
    numberOfCorrectAnswers: correctAnswers.length,
  };
}
