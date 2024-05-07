import { UsersService } from "../services/index.js";

async function postCreateUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UsersService.addUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not add user" });
  }
}

async function patchUpdateUserCtrl(req, res) {
  try {
    const userId = req.params.userId;
    const userUpdateInfos = req.body;

    const editedUser = await UsersService.editUser(userId, userUpdateInfos);
    res.json(editedUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not update this user." });
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
      .json({
        err,
        message: err.message || "Could not delete user with this id",
      });
  }
}
export const UsersController = {
  postCreateUserCtrl,
  patchUpdateUserCtrl,
  deleteUserAndUserAnswersCtrl,
};
