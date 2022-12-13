// This Contains the Food Model
// We Need to Create Interface and Schema, Model

import { model, Schema } from "mongoose";

// FIRST, interface 
// The Model of the Food Data
export interface Food {
    id: string;
    name: string;
    price: number;
    tags: string[];
    favorite: boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
    cookTime: string;
  }

// SECOND, Create Food Schema
export const FoodSchema = new Schema<Food>(
    // Define All the Food Fields and It's Types inside MongoDB
    // id is the Default Member of the Schema
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        tags: { type: [String]},
        favorite: {type: Boolean, default: false},
        stars: {type: Number, required: true},
        imageUrl: {type: String, required: true},
        origins: {type: [String], required: true},
        cookTime: {type: String, required: true},
    },{
        toJSON:{
            // To Send the Value using mongoose from Api's to Clients, it will call toJSON 
            virtuals: true
        },
        // to get the Values from the Database to the Code and Work with Them
        toObject:{
            virtuals: true
        },
        // To Know When They are Created and Updated
        timestamps: true
    } 
);

// THIRD, Create Food Model For CRUD
// Now We Can Do All the Create, Read, Update and Delete Operations to the Database
export const FoodModel = model<Food>('food', FoodSchema);