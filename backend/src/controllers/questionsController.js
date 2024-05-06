import { QuestionsService } from "../services/index.js";

async function postCreateQuestionCtrl(req, res) {
  try {
    const newQuestion = req.body;
    const addedQuestion = await QuestionsService.addQuestion(newQuestion);
    res.json(addedQuestion);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new question" });
  }
}

async function deleteQuestionAndUserAnswersCtrl(req, res) {
  try {
    const questionId = req.params.questionId;
    const deletedQuestionAndUserAnswers =
      await QuestionsService.removeQuestionAndUserAnswers(questionId);
    res.json(deletedQuestionAndUserAnswers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: "Could not delete question with this id",
    });
  }
}

export const QuestionsController = {
  postCreateQuestionCtrl,
  deleteQuestionAndUserAnswersCtrl,
};
