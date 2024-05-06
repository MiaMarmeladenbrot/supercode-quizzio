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

export const UsersController = {
  postCreateUserCtrl,
};
