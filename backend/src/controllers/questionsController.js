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

export const QuestionsController = {
  postCreateQuestionCtrl,
};
