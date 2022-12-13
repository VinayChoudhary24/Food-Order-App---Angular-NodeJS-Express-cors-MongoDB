// This Contains All the Api's for Food i.e Moved From server.ts
// EXPORT DEFAULT to Use this food.router.ts inside the Server.ts

import { sampleFoods, sampleTags } from "../data";
import asyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";

// Import Router from Express to replace app. => router.
import { Router } from "express";
const router = Router();

// To SEED the FoodData from data.ts to the DB i.e /seed
// we Need asyncHandler for this Request
router.get("/seed", asyncHandler( 
    async (req, res) => {
     // Check if the DB is Already SEEDED or NOT
    const foodsCount = await FoodModel.countDocuments();
    if(foodsCount > 0) {
        res.send("Seed is Already Done!");
        return;
    }
    // If NOT Seeded, Create the sampleFoods inside the DB
    await FoodModel.create(sampleFoods);
    res.send("Seed Completed!!")
}
))

// The GET Api, to Get all the FoodData from data.ts File i.e getFoodData()-- the Second parameter is the Handler i.e Arrow Function
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find();
        // we GET the sampleFoods[] Here from DB
        res.send(foods);
    }
))

// The GET Api, to get the Food by SearchTerm i.e getAllFoodsBySearchTerm
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        // We Need a RegularExpression to Search Inside the MongoDB
        // use Second Parameter 'i' to Make the SearchTerm Case-Insensitive
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const foods = await FoodModel.find({name: {$regex: searchRegex}})
        // // get the getAllFoodsBySearchTerm
        // const searchTerm = req.params.searchTerm;
        // const foods = sampleFoods.filter( food =>
        // // Use .toLowerCase() to Make Sure Every Searched Item in the Search Bar by User is of Same CASE i.e PIZZA is same as pizza
        // food.name.toLowerCase().includes(searchTerm.toLowerCase()));   
        res.send(foods);
    }
))

// GET Api, to get the Food by Tags i.e getAllTags
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await FoodModel.aggregate([
            {
                // it Finds Similar Tags and Counts Them
                $unwind: '$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});
        
        // const all = {
        //     name: 'All',
        //     count: await FoodModel.countDocuments()
        // }
        // tags.unshift(all); 
        // get the getAllTags
        res.send(tags);
    }
    
))

// GET Api, to get Food by Single Tag Click i.e getAllFoodByTag
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find({tags: req.params.tagName})
        // // get the getAllFoodByTag
        // const tagName = req.params.tagName;
        // const foods = sampleFoods.filter( food => 
        // food.tags?.includes(tagName));
        res.send(foods);
    }
))

// GET Api, to get the single Food by Id i.e getFoodById
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/:foodId", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.findById(req.params.foodId);
        // // get the getFoodById
        // const foodId = req.params.foodId;
        // const foods = sampleFoods.find( (food) => 
        // food.id == foodId);
        res.send(foods);
    }
))

// Put This to Use foodRouter inside the server.ts
export default router;