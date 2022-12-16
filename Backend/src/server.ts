// Import dotenv File to use the MONGO_URI
import dotenv from 'dotenv';
dotenv.config();
// Now we Can Access the .env File with process.env.
// process.env.MONGO_URI

// Import Express and cors to Create the Web Application
// to Remove Import Error Click on QuickFix and install @typess/express && install @types/cors
import express from "express";
import cors from "cors";

import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';

// Import dbConnect
import { dbConnect } from './configs/database.config';
// Call the Function
dbConnect();
// After This we are Connected to MongoDB Atlas with mongoose

// the const app is now Express Application
// All the Api's are Defined inside const app 
const app = express();

// Enable Json in Expres
app.use(express.json());

// For Frontend we use localhost:4200, now the localhost Changes so we need CORS for this
// declare an Object inside cors() to use
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

// Connect the food.router.ts here
app.use("/api/foods", foodRouter);

// Connect the user.router.ts
app.use("/api/users", userRouter);

// Connect the order.router.ts
app.use("/api/orders", orderRouter);

// Define a Port to Listen the API Requests
const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})