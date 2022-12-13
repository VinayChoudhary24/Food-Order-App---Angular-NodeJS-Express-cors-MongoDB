// This Contains All the Api's for User i.e Moved From server.ts
// EXPORT DEFAULT to Use this user.router.ts inside the Server.ts
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { sampleUsers } from "../data";
import { UserModel } from "../models/user.model";

// Import Router from Express to replace app. => router.
import { Router } from "express";
const router = Router();

// To SEED the UserData from data.ts to the DB i.e /seed
// we Need asyncHandler for this Request
router.get("/seed", asyncHandler( 
    async (req, res) => {
     // Check if the DB is Already SEEDED or NOT
    const usersCount = await UserModel.countDocuments();
    if(usersCount > 0) {
        res.send("Seed is Already Done!");
        return;
    }
    // If NOT Seeded, Create the sampleFoods inside the DB
    await UserModel.create(sampleUsers);
    res.send("Seed Completed!!")
}
))

// POST Api, to POST the Login Details from Frontend to Database
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.post("/login", asyncHandler(
    async (req, res) => {
        // to get the Body of Request
        // const body = req.body;
    
        // Instead of getting the Body we can DE-STRUCTURE email and Password like this
        // DESTRUCTURE the email and password
        const { email, password } = req.body;
        // Find the User
        // const user = sampleUsers.find( user => user.email === email && user.password === password);
        //## Use findOne({}) to Login in From MongoDB withemail, Password
        const user = await UserModel.findOne({email, password})
        // Check if the User is Available or Not
        if(user) {
            // User is Available/Found i.e send Successfull Response that contains user and Token Value
            res.send(generateTokenResponse(user))
        }else {
            // User is Not Available/Not Found i.e send Error Status and Message
            res.status(400).send("Email or Password is not valid!!");
        }
    }
))

// This Function will generate Token Response
const generateTokenResponse = (user: any) => {
    // sign()-- Process of Generating Token
    // The First Parameter is What we Want in the Code and 
    // Second Parameter is the SECRET KEY and 
    // Third Parameter is Options i.e Expiry of Token
    const token = jwt.sign({
        email: user.email, 
        isAdmin: user.isAdmin,
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}

export default router;