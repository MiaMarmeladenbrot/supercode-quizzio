import { UserAnswersService } from "../services/index.js";

async function postCreateUserAnswerCtrl(req, res) {
  try {
    // userId und questionId sind Teil der Endpunkt-URL: .post("/api/v1/userAnswers", UserAnswersController.postCreateUserAnswerCtrl);
    // Alternativ könnten sie auch im req.body mitgegeben werden, dann wäre Endpunkt kürzer: post("/api/v1/userAnswers")

    const userId = req.params.userId;
    const questionId = req.params.questionId;

    const newUserAnswer = {
      questionId,
      userId,
      answerContent: req.body.answerContent,
      answerFeedback: req.body.answerFeedback,
    };
    // const newUserAnswer = req.body;

    const addedUserAnswer = await UserAnswersService.addUserAnswer(
      newUserAnswer
    );
    res.json(addedUserAnswer);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new user answer" });
  }
}

export const UserAnswersController = {
  postCreateUserAnswerCtrl,
};
