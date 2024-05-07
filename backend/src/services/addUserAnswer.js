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

  return UserAnswer.create(userAnswerInfo);
}
