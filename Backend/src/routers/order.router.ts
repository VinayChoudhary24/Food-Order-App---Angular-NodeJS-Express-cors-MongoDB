import { Router } from "express";
import asyncHandler from "express-async-handler";
import { OrderStatus } from "../../../Frontend/src/app/shared/constants/order_status";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import auth from "../middlewares/auth.mid";
import { OrderModel } from "../models/order.model";


const router = Router();

// Add the auth.mid.ts
router.use(auth);

// Request to Post the OrderModel to DB
router.post('/create', asyncHandler(
    async (req: any, res: any) => {
        // Save the Order From the Body
        const requestOrder = req.body;

        // Check for the Items inside body
        // No Order
        if(requestOrder.items.length <= 0) {
            res.status(HTTP_BAD_REQUEST).send('Cart Is Empty...');
            return; 
        }
        // Already an Order
        await OrderModel.deleteOne({
            user: req.user.id,
            status: OrderStatus.NEW
        });
        const newOrder = new OrderModel({...requestOrder, user:req.user.id});
        await newOrder.save();
        // Send to the Client
        res.send(newOrder);   
    }
));

// To Get the Order Details from Checkout Page to Payment Page
// /For PAYMENT PAGE
router.get('/newOrderForCurrentUser', asyncHandler(
    async (req: any, res) => {
        const order = await getNewOrderForCurrentUser(req);
        // When the User is Available send the Orde Details
        if(order) res.send(order);
        else res.status(HTTP_BAD_REQUEST).send(); 
    }
))

// Api For Paypal Paymnet i.e pay Method
router.post('/pay', asyncHandler(
    async (req: any, res) => {
        // Get the PaymentId from the Body of the Request
        const {paymentId} = req.body;
        // get the New Order From the Current User 
        const order = await getNewOrderForCurrentUser(req);
        if(!order) {
            // there is no Order Found
            res.status(HTTP_BAD_REQUEST).send('Order Not Found...');
            return;
        }
        // Order is Present
        order.paymentId = paymentId;
        order.status = OrderStatus.PAID;
        await order.save();

        // Send the Order Id to the Client
        res.send(order._id);
    }
))

// the Api for Tracking Order Page
router.get('/track/:id', asyncHandler(
    async (req, res) => {
        // Get the Order By Id from Req.Body
        const order = await OrderModel.findById(req.params.id);
        res.send(order);
    }
))

// 
async function getNewOrderForCurrentUser(req:any) {
    return await OrderModel.findOne({user: req.user.id, status: OrderStatus.NEW});
}

// Put This to Use orderRouter inside the server.ts
export default router;