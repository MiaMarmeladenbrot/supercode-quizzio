import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema(
  {
    question: { type: String },
    answers: [{ type: String }],
    correctAnswers: [{ type: String }],
  },
  { collection: "questions", timestamps: false }
);

export const Question = mongoose.model("Question", questionsSchema);
