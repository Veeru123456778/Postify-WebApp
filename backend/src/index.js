import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./config/Db.js";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//allowing 100 requests per minute

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
});

const corsOptions = {
  origin: 'https://postify-web-app-frontend.vercel.app',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("public/temp"));
app.use(limiter);

app.use("/api/user", userRouter);
app.options('/api/user/signup', cors());


connectDB();

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
