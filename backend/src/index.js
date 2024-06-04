import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./config/Db.js";
import cors from "cors";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



// app.use(
// 	cors({
// 		origin: '*',
// 		methods: '*',
// 		allowedHeaders: ['Content-Type', 'Authorization'],
// 		credentials: true,
// 	  })
// )

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed for your scenario
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,token');
  if (req.method === 'OPTIONS') {
    // Preflight request
    return res.status(200).end();
  }
  next();
});

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
