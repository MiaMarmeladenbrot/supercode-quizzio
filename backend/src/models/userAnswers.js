import mongoose from "mongoose";

const userAnswersSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Types.ObjectId, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true },
    answerContent: [{ type: String, required: true }], // aus dem Frontend als input-state mitschicken?
    answerFeedback: { type: Boolean, required: true }, // aus dem Frontend als input-state mitschicken?
  },
  { collection: "userAnswers", timestamps: false }
);

export const UserAnswer = mongoose.model("UserAnswer", userAnswersSchema);
