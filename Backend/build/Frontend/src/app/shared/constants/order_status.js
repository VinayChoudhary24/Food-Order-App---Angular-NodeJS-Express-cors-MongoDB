"use strict";
exports.__esModule = true;
exports.OrderStatus = void 0;
// Display the Status of the order Placed
// Use this OrderStatus Inside the Order.model
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NEW"] = "NEW";
    OrderStatus["PAID"] = "PAID";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["REFUNDED"] = "REFUNDED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
