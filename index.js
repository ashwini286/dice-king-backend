import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import mainRoute from "./routes/mainRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { registerController } from "./Controllers/registerController.js";
dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
// app.use(cookieParser());

// app.use("/api/v1", mainRoute);  

app.get("/", (req, res) => {
    res.send("<h1>Welcome to dice king</h1>");
  });

  app.post("/register", registerController);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import mainRoute from "./routes/mainRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { registerController } from "./Controllers/registerController.js";
import { loginController } from './Controllers/loginController.js';
dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
// app.use(cookieParser());

// app.use("/api/v1", mainRoute);  

app.get("/", (req, res) => {
    res.send("<h1>Welcome to dice king</h1>");
  });

  app.post("/register", registerController);
  app.post("/login", loginController);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})