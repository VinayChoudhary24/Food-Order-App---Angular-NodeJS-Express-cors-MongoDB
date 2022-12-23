"use strict";
// This Contains the Food Model
// We Need to Create Interface and Schema, Model
exports.__esModule = true;
exports.FoodModel = exports.FoodSchema = void 0;
var mongoose_1 = require("mongoose");
// SECOND, Create Food Schema
exports.FoodSchema = new mongoose_1.Schema(
// Define All the Food Fields and It's Types inside MongoDB
// id is the Default Member of the Schema
{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, "default": false },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true }
}, {
    toJSON: {
        // To Send the Value using mongoose from Api's to Clients, it will call toJSON 
        virtuals: true
    },
    // to get the Values from the Database to the Code and Work with Them
    toObject: {
        virtuals: true
    },
    // To Know When They are Created and Updated
    timestamps: true
});
// THIRD, Create Food Model For CRUD
// Now We Can Do All the Create, Read, Update and Delete Operations to the Database
exports.FoodModel = (0, mongoose_1.model)('food', exports.FoodSchema);
