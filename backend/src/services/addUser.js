import { User } from "../models/users.js";

export async function addUser(userInfo) {
  const foundUser = await User.findOne({ email: userInfo.email });
  if (foundUser) throw new Error("User mit dieser Email existiert bereits");
  return User.create(userInfo);
}
