import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answers: [{ type: String, required: true }],
    correctAnswers: [{ type: String, required: true }],
    // userIds: [{ type: mongoose.Types.ObjectId, ref: "Question" }],
  },
  { collection: "questions", timestamps: false }
);

export const Question = mongoose.model("Question", questionsSchema);
