import mongoose from "mongoose";

const userAnswersSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Types.ObjectId, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true },
    answerContent: [{ type: String, required: true }],
    answerFeedback: { type: Boolean, required: true },
  },
  { collection: "userAnswers", timestamps: false }
);

export const UserAnswer = mongoose.model("UserAnswer", userAnswersSchema);
