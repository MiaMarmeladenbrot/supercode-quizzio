import { UsersService } from "../services/index.js";

async function postCreateUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UsersService.addUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add user" });
  }
}

async function deleteUserAndUserAnswersCtrl(req, res) {
  try {
    const userId = req.params.userId;
    const deletedUserAndUserAnswers =
      await UsersService.removeUserAndUserAnswers(userId);
    res.json(deletedUserAndUserAnswers);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not delete user with id " + userId });
  }
}
export const UsersController = {
  postCreateUserCtrl,
  deleteUserAndUserAnswersCtrl,
};
