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

async function showQuizStatsForUserCtrl(req, res) {
  try {
    const quizId = req.params.quizId;
    const userId = req.params.userId;
    const foundStats = await QuizzesService.showQuizStatsForUser(
      quizId,
      userId
    );
    res.json(foundStats);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message:
        err.message || "Could not find any statistics for this user and quiz.",
    });
  }
}

async function patchUpdateQuizCtrl(req, res) {
  try {
    const quizId = req.params.quizId;
    const quizUpdateInfo = req.body;

    const updatedQuiz = await QuizzesService.editQuiz(quizId, quizUpdateInfo);
    res.json(updatedQuiz);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: message.err || "Could not update quiz." });
  }
}

export const QuizzesController = {
  getOneQuizWithQuestionsCtrl,
  postCreateQuizCtrl,
  deleteQuizCtrl,
  showQuizStatsForUserCtrl,
  patchUpdateQuizCtrl,
};
