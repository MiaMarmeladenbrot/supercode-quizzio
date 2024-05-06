import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    questionIds: [
      { type: mongoose.Types.ObjectId, ref: "Question", required: true },
      // recipeId: { type: mongoose.Types.ObjectId, ref: "Rezept", required: true },
    ],
  },
  { collection: "quizzes", timestamps: false }
);

export const Quiz = mongoose.model("Quiz", quizzesSchema);
