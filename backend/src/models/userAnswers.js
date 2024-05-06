import mongoose from "mongoose";

const userAnswersSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId },
    answerContent: [{ type: String }],
    answerFeedback: { type: Boolean },
  },
  { collection: "userAnswers", timestamps: false }
);

export const UserAnswer = mongoose.model("UserAnswer", userAnswersSchema);
