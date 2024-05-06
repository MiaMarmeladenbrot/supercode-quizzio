import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    answerIds: [{ type: mongoose.Types.ObjectId, ref: "userAnswers" }],
  },
  { collection: "users", timestamps: false }
);

export const User = mongoose.model("User", usersSchema);
