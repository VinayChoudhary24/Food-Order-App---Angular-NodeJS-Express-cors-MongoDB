// Import Express and cors to Create the Web Application
// to Remove Import Error Click on QuickFix and install @typess/express && install @types/cors
import express from "express";
import cors from "cors";
import { sampleFoods, sampleTags, sampleUsers } from "./data";
import jwt from "jsonwebtoken"

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

//# Define All API Requests

// The GET Api, to Get all the FoodData from data.ts File i.e getFoodData()-- the Second parameter is the Handler i.e Arrow Function
app.get("/api/foods", (req, res) => {
    // we GET the sampleFoods[] Here
    res.send(sampleFoods);
})

// The GET Api, to get the Food by SearchTerm i.e getAllFoodsBySearchTerm
app.get("/api/foods/search/:searchTerm", (req, res) => {
    // get the getAllFoodsBySearchTerm
    const searchTerm = req.params.searchTerm;
    const foods = sampleFoods.filter( food =>
    // Use .toLowerCase() to Make Sure Every Searched Item in the Search Bar by User is of Same CASE i.e PIZZA is same as pizza
    food.name.toLowerCase().includes(searchTerm.toLowerCase()));   
    res.send(foods);
})

// GET Api, to get the Food by Tags i.e getAllTags
app.get("/api/foods/tags", (req, res) => {
    // get the getAllTags
    res.send(sampleTags);
})

// GET Api, to get Food by Single Tag Click i.e getAllFoodByTag
app.get("/api/foods/tag/:tagName", (req, res) => {
    // get the getAllFoodByTag
    const tagName = req.params.tagName;
    const foods = sampleFoods.filter( food => 
    food.tags?.includes(tagName));
    res.send(foods);
})

// GET Api, to get the single Food by Id i.e getFoodById
app.get("/api/foods/:foodId", (req, res) => {
    // get the getFoodById
    const foodId = req.params.foodId;
    const foods = sampleFoods.find( (food) => 
    food.id == foodId);
    res.send(foods);
})

// POST Api, to POST the Login Details from Frontend to Database
app.post("/api/users/login", (req, res) => {
    // to get the Body of Request
    // const body = req.body;

    // Instead of getting the Body we can DE-STRUCTURE email and Password like this
    // DESTRUCTURE the email and password
    const { email, password } = req.body;
    // Find the User
    const user = sampleUsers.find( user => user.email === email && user.password === password);
    // Check if the User is Available or Not
    if(user) {
        // User is Available/Found i.e send Successfull Response that contains user and Token Value
        res.send(generateTokenResponse(user))
    }else {
        // User is Not Available/Not Found i.e send Error Status and Message
        res.status(400).send("Email or Password is not valid!!");
    }
})

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

// Define a Port to Listen the API Requests
const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})