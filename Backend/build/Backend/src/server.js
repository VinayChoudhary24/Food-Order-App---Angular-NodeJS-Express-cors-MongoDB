"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// Import dotenv File to use the MONGO_URI
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
// Now we Can Access the .env File with process.env.
// process.env.MONGO_URI
// Import Express and cors to Create the Web Application
// to Remove Import Error Click on QuickFix and install @typess/express && install @types/cors
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_router_1 = __importDefault(require("./routers/food.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var order_router_1 = __importDefault(require("./routers/order.router"));
// Import dbConnect
var database_config_1 = require("./configs/database.config");
// Call the Function
(0, database_config_1.dbConnect)();
// After This we are Connected to MongoDB Atlas with mongoose
// the const app is now Express Application
// All the Api's are Defined inside const app 
var app = (0, express_1["default"])();
// Enable Json in Expres
app.use(express_1["default"].json());
// For Frontend we use localhost:4200, now the localhost Changes so we need CORS for this
// declare an Object inside cors() to use
app.use((0, cors_1["default"])({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
// Connect the food.router.ts here
app.use("/api/foods", food_router_1["default"]);
// Connect the user.router.ts
app.use("/api/users", user_router_1["default"]);
// Connect the order.router.ts
app.use("/api/orders", order_router_1["default"]);
// Define a Port to Listen the API Requests
var port = 5000;
app.listen(port, function () {
    console.log("Website served on http://localhost:" + port);
});
