import { Quiz } from "../models/quizzes.js";
import { Question } from "../models/questions.js";

export async function showOneQuiz(quizId) {
  const foundQuiz = await Quiz.findById(quizId);
  if (!foundQuiz)
    throw new Error(
      "Das Quiz mit der Id " + quizId + " existiert leider nicht."
    );

  // Output von Quiz:
  // {
  //   "_id": "6638b6afbe792a3de8c416c1",
  //   "name": "Bestes Quiz",
  //   "description": "Beantworte verschiedene Fragen",
  //   "questionIds": [
  //     "6638a97af2fef007cf062a0d",
  //     "6638a9baf2fef007cf062a0f"
  //   ],
  //   "__v": 0
  // }

  // falls Quiz existiert, brauchen wir mehr als nur die Ids der jeweiligen Fragen
  // mit gefundenen questionIds in Question-Modell nach den Infos suchen und die zum Return hinzufügen?
  // aber ohne die richtigen Antworten zu verraten - via find-projection correctAnswers ausklammern
  const questionIds = foundQuiz.questionIds;
  // console.log(questionIds);
  const quizQuestions = await Question.find(
    { _id: questionIds },
    { correctAnswers: 0 }
  );

  // return foundQuiz;
  return { ...foundQuiz.toObject(), quizQuestions };
}

// * Thomas' Lösung mit populate:
// import { Quiz } from "../models/quizSchema.js"

// export const showQuizWithQuestions = async (quizId) => {
//   const foundQuiz = await Quiz.findById(quizId).populate("questions")
//   return foundQuiz
// }
