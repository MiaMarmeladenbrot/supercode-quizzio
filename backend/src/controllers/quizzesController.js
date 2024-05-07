import { QuizzesService } from "../services/index.js";

async function getOneQuizWithQuestionsCtrl(req, res) {
  try {
    const quizId = req.params.quizId;
    const foundQuiz = await QuizzesService.showOneQuiz(quizId);
    res.json(foundQuiz);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not get this quiz" });
  }
}

async function postCreateQuizCtrl(req, res) {
  try {
    const newQuiz = req.body;
    const addedQuiz = await QuizzesService.addQuiz(newQuiz);
    res.json(addedQuiz);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add new quiz" });
  }
}

async function deleteQuizCtrl(req, res) {
  try {
    const quizId = req.params.quizId;
    const deletedQuiz = await QuizzesService.removeQuiz(quizId);
    res.json(deletedQuiz);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could note delete this quiz" });
  }
}

export const QuizzesController = {
  getOneQuizWithQuestionsCtrl,
  postCreateQuizCtrl,
  deleteQuizCtrl,
};
