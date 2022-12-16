import { Date, model, Schema, Types } from 'mongoose';
import { Food, FoodSchema } from './food.model';
import { OrderStatus } from '../../../Frontend/src/app/shared/constants/order_status';

// Create Interface for LatLng i.e leaflet in Backend
export interface LatLng {
    lat: string;
    lng: string;
}

// define Schema in Mongoose Types for DB
export const LatLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: true},
        lng: {type: String, required: true},
    }
)

// interface for OrderItems inside the Order
export interface OrderItem {
    food: Food;
    price: number;
    quantity: number;
}

// define Schema in Mongoose Types for DB
export const OrderItemSchema = new Schema<OrderItem>(
    {
        food: {type: FoodSchema, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
    }
)

// Interface for the Order --From Frontend/shared/model/order.ts
export interface Order {
    id: number;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    address: string;
    // To Store the Address Latitude and Longitude from Leaflet
    addressLatLng:LatLng 
    paymentId: string;
    // Display the Status of the order Placed
    status: OrderStatus;
    // Store the ID of the User
    user: Types.ObjectId;
    createAt: Date;
    updatedAt: Date; 
}

// Schema for Order --Define in mongoose types --for MongoDB
const orderSchema = new Schema<Order>(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        addressLatLng: {type: LatLngSchema, required: true},
        paymentId: {type: String},
        totalPrice: {type: Number, required: true},
        items: {type: [OrderItemSchema], required: true},
        status: {type: String, default: OrderStatus.NEW},
        user: {type: Schema.Types.ObjectId, required: true}
    },{
        // Options
        timestamps: true,
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
)

export const OrderModel = model('order', orderSchema);