import { User } from "../models/users.js";

export async function editUser(userId, userUpdateInfos) {
  const findUser = await User.findById(userId);
  if (!findUser) throw new Error("Could not find User with the id " + userId);

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: userUpdateInfos },
    { new: true }
  );

  return updatedUser;
}
