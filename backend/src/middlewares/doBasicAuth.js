// ! Authorization Middleware

import { User } from "../models/users.js";
import { hash } from "../utils/hash.js";

export async function doBasicAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" });

  if (!req.headers.authorization)
    return _invalidAuth("No authorization in headers");

  const [authType, authInfoBase64] = req.headers.authorization.split(" ");
  if (authType !== "Basic") return _invalidAuth("no authType");
  if (!authInfoBase64) return _invalidAuth("no authInfo Base64");

  const authInfoClearText = Buffer.from(authInfoBase64, "base64").toString(
    "utf-8"
  );

  const [email, password] = authInfoClearText.split(":");
  if (!email || !password) return _invalidAuth("no email or password");

  // # userId aus req.params mit req.headers abgleichen?
  // # oder bräuchte man userId jetzt gar nicht mehr in URL?
  const userId = req.params.userId;
  const user = await User.findOne({ email });
  if (!user) return _invalidAuth("falsche email"); // falsche Email
  if (user._id.toString() !== userId.toString())
    return _invalidAuth("user aus headers ungleich user aus url"); // User aus req.headers und user aus URL stimmen nicht überein; User versucht auf Daten eines anderen Users zuzugreifen

  if (user.failedLoginTries >= 3)
    return res.json({
      message:
        "3 failed login tries - your account was locked, please contact the admin via admin@quizzio.com.",
    });

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) {
    await User.updateOne(
      { _id: user._id },
      { $set: { failedLoginTries: user.failedLoginTries + 1 } } // counter, um failed logins hochzuzählen bei jeder falschen Passworteingabe
    );
    return _invalidAuth("passwort nicht korrekt"); // korrekte Email, aber falsches Passwort
  }

  // reset failedLoginTries bei erfolgreichem Login
  await User.updateOne({ _id: user._id }, { $set: { failedLoginTries: 0 } });

  // user zwischenspeichern, um ihn an Controller weiterzugeben
  req.authenticatedUser = user;

  next();
}
