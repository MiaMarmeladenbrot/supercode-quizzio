// ! Authorization Middleware

import { User } from "../models/users.js";
import { hash } from "../utils/hash.js";

export async function doBasicAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" });

  if (!req.headers.authorization) return _invalidAuth("No authorization");

  const [authType, authInfoBase64] = req.headers.authorization.split(" ");
  if (authType !== "Basic") return _invalidAuth();
  if (!authInfoBase64) return _invalidAuth();

  const authInfoClearText = Buffer.from(authInfoBase64, "base64").toString(
    "utf-8"
  );

  const [email, password] = authInfoClearText.split(":");
  if (!email || !password) return _invalidAuth();

  // # userId aus req.params mit req.headers abgleichen?
  // # oder bräuchte man userId jetzt gar nicht mehr in URL?
  const userId = req.params.userId;
  const user = await User.findOne({ email });
  if (!user) return _invalidAuth(); // falsche Email
  if (user !== userId) return _invalidAuth(); // User aus req.headers und user aus URL stimmen nicht überein; User versucht auf Daten eines anderen Users zuzugreifen

  //   # fehlversuche noch einbauen?

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) return _invalidAuth(); // korrekte Email, aber falsches Passwort

  req.authenticatedUser = user;

  next();
}
