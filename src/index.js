import express from "express";
import {userRouter} from './routes/user-router.js'
import {movieRouter} from "./routes/movie-router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/user", userRouter);
app.use("/movie", movieRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
