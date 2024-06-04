import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./config/Db.js";
import cors from "cors";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



app.use(
	cors({
		origin: '*',
		methods: '*',
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
	  })
)

app.use(express.json());
app.use(express.static("public"));

app.use("/api/user", userRouter);


connectDB();

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
