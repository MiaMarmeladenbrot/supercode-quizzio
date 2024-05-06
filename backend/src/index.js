import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";
import { quizzesRouter } from "./routes/quizzesRouter.js";
import { questionsRouter } from "./routes/questionsRouter.js";
import { usersRouter } from "./routes/usersRouter.js";
import { userAnswersRouter } from "./routes/userAnswersRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(quizzesRouter);
app.use("/api/v1/questions", questionsRouter);
app.use(usersRouter);
app.use(userAnswersRouter);

try {
  await connectToDatabase();
  const PORT = 3008;
  app.listen(PORT, () => console.log("Server ready at Port", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}
