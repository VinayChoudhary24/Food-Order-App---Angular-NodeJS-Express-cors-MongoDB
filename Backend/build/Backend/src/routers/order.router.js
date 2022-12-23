"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var express_1 = require("express");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var order_status_1 = require("../../../Frontend/src/app/shared/constants/order_status");
var http_status_1 = require("../constants/http_status");
var auth_mid_1 = __importDefault(require("../middlewares/auth.mid"));
var order_model_1 = require("../models/order.model");
var router = (0, express_1.Router)();
// Add the auth.mid.ts
router.use(auth_mid_1["default"]);
// Request to Post the OrderModel to DB
router.post('/create', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestOrder, newOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestOrder = req.body;
                // Check for the Items inside body
                // No Order
                if (requestOrder.items.length <= 0) {
                    res.status(http_status_1.HTTP_BAD_REQUEST).send('Cart Is Empty...');
                    return [2 /*return*/];
                }
                // Already an Order
                return [4 /*yield*/, order_model_1.OrderModel.deleteOne({
                        user: req.user.id,
                        status: order_status_1.OrderStatus.NEW
                    })];
            case 1:
                // Already an Order
                _a.sent();
                newOrder = new order_model_1.OrderModel(__assign(__assign({}, requestOrder), { user: req.user.id }));
                return [4 /*yield*/, newOrder.save()];
            case 2:
                _a.sent();
                // Send to the Client
                res.send(newOrder);
                return [2 /*return*/];
        }
    });
}); }));
// To Get the Order Details from Checkout Page to Payment Page
// /For PAYMENT PAGE
router.get('/newOrderForCurrentUser', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getNewOrderForCurrentUser(req)];
            case 1:
                order = _a.sent();
                // When the User is Available send the Orde Details
                if (order)
                    res.send(order);
                else
                    res.status(http_status_1.HTTP_BAD_REQUEST).send();
                return [2 /*return*/];
        }
    });
}); }));
// Api For Paypal Paymnet i.e pay Method
router.post('/pay', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var paymentId, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                paymentId = req.body.paymentId;
                return [4 /*yield*/, getNewOrderForCurrentUser(req)];
            case 1:
                order = _a.sent();
                if (!order) {
                    // there is no Order Found
                    res.status(http_status_1.HTTP_BAD_REQUEST).send('Order Not Found...');
                    return [2 /*return*/];
                }
                // Order is Present
                order.paymentId = paymentId;
                order.status = order_status_1.OrderStatus.PAID;
                return [4 /*yield*/, order.save()];
            case 2:
                _a.sent();
                // Send the Order Id to the Client
                res.send(order._id);
                return [2 /*return*/];
        }
    });
}); }));
// the Api for Tracking Order Page
router.get('/track/:id', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, order_model_1.OrderModel.findById(req.params.id)];
            case 1:
                order = _a.sent();
                res.send(order);
                return [2 /*return*/];
        }
    });
}); }));
// 
function getNewOrderForCurrentUser(req) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order_model_1.OrderModel.findOne({ user: req.user.id, status: order_status_1.OrderStatus.NEW })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// Put This to Use orderRouter inside the server.ts
exports["default"] = router;
