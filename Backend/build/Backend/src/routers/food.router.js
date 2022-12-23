"use strict";
// This Contains All the Api's for Food i.e Moved From server.ts
// EXPORT DEFAULT to Use this food.router.ts inside the Server.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var data_1 = require("../data");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var food_model_1 = require("../models/food.model");
// Import Router from Express to replace app. => router.
var express_1 = require("express");
var router = (0, express_1.Router)();
// To SEED the FoodData from data.ts to the DB i.e /seed
// we Need asyncHandler for this Request
router.get("/seed", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foodsCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_model_1.FoodModel.countDocuments()];
            case 1:
                foodsCount = _a.sent();
                if (foodsCount > 0) {
                    res.send("Seed is Already Done!");
                    return [2 /*return*/];
                }
                // If NOT Seeded, Create the sampleFoods inside the DB
                return [4 /*yield*/, food_model_1.FoodModel.create(data_1.sampleFoods)];
            case 2:
                // If NOT Seeded, Create the sampleFoods inside the DB
                _a.sent();
                res.send("Seed Completed!!");
                return [2 /*return*/];
        }
    });
}); }));
// The GET Api, to Get all the FoodData from data.ts File i.e getFoodData()-- the Second parameter is the Handler i.e Arrow Function
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_model_1.FoodModel.find()];
            case 1:
                foods = _a.sent();
                // we GET the sampleFoods[] Here from DB
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// The GET Api, to get the Food by SearchTerm i.e getAllFoodsBySearchTerm
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/search/:searchTerm", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params.searchTerm, 'i');
                return [4 /*yield*/, food_model_1.FoodModel.find({ name: { $regex: searchRegex } })
                    // // get the getAllFoodsBySearchTerm
                    // const searchTerm = req.params.searchTerm;
                    // const foods = sampleFoods.filter( food =>
                    // // Use .toLowerCase() to Make Sure Every Searched Item in the Search Bar by User is of Same CASE i.e PIZZA is same as pizza
                    // food.name.toLowerCase().includes(searchTerm.toLowerCase()));   
                ];
            case 1:
                foods = _a.sent();
                // // get the getAllFoodsBySearchTerm
                // const searchTerm = req.params.searchTerm;
                // const foods = sampleFoods.filter( food =>
                // // Use .toLowerCase() to Make Sure Every Searched Item in the Search Bar by User is of Same CASE i.e PIZZA is same as pizza
                // food.name.toLowerCase().includes(searchTerm.toLowerCase()));   
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// GET Api, to get the Food by Tags i.e getAllTags
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/tags", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tags;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_model_1.FoodModel.aggregate([
                    {
                        // it Finds Similar Tags and Counts Them
                        $unwind: '$tags'
                    },
                    {
                        $group: {
                            _id: '$tags',
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            name: '$_id',
                            count: '$count'
                        }
                    }
                ]).sort({ count: -1 })];
            case 1:
                tags = _a.sent();
                // const all = {
                //     name: 'All',
                //     count: await FoodModel.countDocuments()
                // }
                // tags.unshift(all); 
                // get the getAllTags
                res.send(tags);
                return [2 /*return*/];
        }
    });
}); }));
// GET Api, to get Food by Single Tag Click i.e getAllFoodByTag
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/tag/:tagName", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_model_1.FoodModel.find({ tags: req.params.tagName })
                // // get the getAllFoodByTag
                // const tagName = req.params.tagName;
                // const foods = sampleFoods.filter( food => 
                // food.tags?.includes(tagName));
            ];
            case 1:
                foods = _a.sent();
                // // get the getAllFoodByTag
                // const tagName = req.params.tagName;
                // const foods = sampleFoods.filter( food => 
                // food.tags?.includes(tagName));
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// GET Api, to get the single Food by Id i.e getFoodById
// Remove the api/foods line because it's Already Defined in Server.ts
// Update and Add asyncHandler to get the FoodData instead of Data.ts To=> MongoDB 
router.get("/:foodId", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_model_1.FoodModel.findById(req.params.foodId)];
            case 1:
                foods = _a.sent();
                // // get the getFoodById
                // const foodId = req.params.foodId;
                // const foods = sampleFoods.find( (food) => 
                // food.id == foodId);
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// Put This to Use foodRouter inside the server.ts
exports["default"] = router;
