// This Contains the User Model
// We Need to Create Interface and Schema, Model

import { model, Schema } from "mongoose";

// From User.ts i.e Frontend Shared/models 
export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    address: string;
    isAdmin: boolean;
}

// /Create mongoose Schema
export const UserSchema = new Schema<User>(
    {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},
    }, {
        timestamps: true,
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
);

// Create the Model
export const UserModel = model<User>('user', UserSchema)