"use strict";
// This will Do the Authenticaton for the User, Whenever User Requests Something That Requires Authentication Verification
// A Middleware is a Function with Request, Response and next()
// We Will use the Middleware in Order.router 
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var http_status_1 = require("../constants/http_status");
exports["default"] = (function (req, res, next) {
    // Get the Token of the User
    var token = req.headers.access_token;
    // If the Token Dosent have a Value
    if (!token)
        return res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    // When the Token has a Value
    // We need to Use Try{} and Catch{} Method
    try {
        var decodedUser = (0, jsonwebtoken_1.verify)(token, "process.env.JWT_SECRET!");
        req.user = decodedUser;
    }
    catch (error) {
        res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    }
    return next();
});
