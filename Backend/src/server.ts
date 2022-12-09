// Import Express and cors to Create the Web Application
// to Remove Import Error Click on QuickFix and install @typess/express && install @types/cors
import express from "express";
import cors from "cors";
import { sampleFoods, sampleTags } from "./data";

// the const app is now Express Application
// All the Api's are Defined inside const app 
const app = express();

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


// Define a Port to Listen the API Requests
const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})