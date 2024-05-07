import { Question } from "../models/questions.js";
import { UserAnswer } from "../models/userAnswers.js";
import { User } from "../models/users.js";

export async function addUserAnswer(userAnswerInfo) {
  // Error handling: Falls User diese Frage bereits beantwortet hat, kann er sie nicht noch einmal beantworten
  const foundUserAndQuestion = await UserAnswer.findOne({
    userId: userAnswerInfo.userId,
    questionId: userAnswerInfo.questionId,
  });
  if (foundUserAndQuestion)
    throw new Error("User hat diese Frage bereits beantwortet");

  // Error Handling: checken ob User und Question überhaupt existieren
  const question = await Question.findById(userAnswerInfo.questionId);
  if (!question) throw new Error("Question doesn't exist");

  const user = await User.findById(userAnswerInfo.userId);
  if (!user) throw new Error("User doesn't exist");

  // userFeedback soll automatisiert abgefangen werden
  // wenn also alle vom User im body mitgeschickten answerContents von der Länge und vom Inhalt mit dem Fragen-Content übereinstimmen, ist eine Frage richtig beantwortet
  // ansonsten nicht
  // das speichern wir gemeinsam mit den anderen userAnswerInfos ab und kreiieren so eine neue userAnswer
  const correctAnswer =
    userAnswerInfo.answerContent.length === question.correctAnswers.length &&
    userAnswerInfo.answerContent.every((ans) =>
      question.correctAnswers.includes(ans)
    );

  const userAnswer = await UserAnswer.create({
    ...userAnswerInfo,
    answerFeedback: correctAnswer,
  });
  return userAnswer;

  // return UserAnswer.create(userAnswerInfo);
}
