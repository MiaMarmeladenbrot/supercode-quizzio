import mongoose from "mongoose";

const userAnswersSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    answerContent: [{ type: String, required: true }], // aus dem Frontend als input-state mitschicken
    answerFeedback: { type: Boolean, required: true }, // wird beim Erstellen der userAnswer abgeglichen und gespeichert
  },
  { collection: "userAnswers", timestamps: false }
);

export const UserAnswer = mongoose.model("UserAnswer", userAnswersSchema);
