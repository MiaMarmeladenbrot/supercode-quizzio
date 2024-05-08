import { UserAnswersService } from "../services/index.js";

async function getShowAllUserAnswersByUserIdCtrl(req, res) {
  try {
    // const userId = req.params.userId;

    // Id wird jetzt aus der zuvor abgeschlossenen Authentifizierung der User Id genommen:
    const authenticatedUserId = req.authenticatedUser._id;
    const foundUserAnswers =
      await UserAnswersService.showAllUserAnswersByUserId(authenticatedUserId);
    res.json(foundUserAnswers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: err.message || "Could not find the answers of this user.",
    });
  }
}

async function postCreateUserAnswerCtrl(req, res) {
  try {
    // userId und questionId sind Teil der Endpunkt-URL: .post("/api/v1/userAnswers", UserAnswersController.postCreateUserAnswerCtrl);
    // Alternativ könnten sie auch im req.body mitgegeben werden, dann wäre Endpunkt kürzer: post("/api/v1/userAnswers")

    const userId = req.params.userId;
    const questionId = req.params.questionId;

    const newUserAnswer = {
      questionId,
      userId,
      // # wie kommen wir an answer-Daten?
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
    res
      .status(500)
      .json({ err, message: err.message || "Could not add new user answer" });
  }
}

async function deleteUserAnswerCtrl(req, res) {
  try {
    const userAnswerId = req.params.userAnswerId;
    const removedUserAnswer = await UserAnswersService.removeUserAnswer(
      userAnswerId
    );
    res.json(removedUserAnswer);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: err.message || "Could not delete user answer with this id.",
    });
  }
}

export const UserAnswersController = {
  getShowAllUserAnswersByUserIdCtrl,
  postCreateUserAnswerCtrl,
  deleteUserAnswerCtrl,
};
