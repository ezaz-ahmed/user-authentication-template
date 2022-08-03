import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectDb from "./config/database.js";
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 8080;


app.use('/api/users', userRoutes)

app.listen(PORT, console.log(`Port: ${PORT}`));

const con = await connectDb();

console.log(`${con.connection.host} \nMongoDB Connected`);