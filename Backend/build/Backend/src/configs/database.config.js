"use strict";
exports.__esModule = true;
exports.dbConnect = void 0;
// Import connect and ConnectOptions to Make a Connection with DB
var mongoose_1 = require("mongoose");
// Create a Function to Export Outside and Use it is Server.ts
// Now we Can Access the .env File with process.env.
// process.env.MONGO_URI
var dbConnect = function () {
    // Putting ! will Tell Compiler that this Value is Always Present and is Not Undefined
    // connect returns a PROMISE, we use .then() 
    (0, mongoose_1.connect)(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
    // Success Part
    function () { return console.log("connect successfully!"); }, 
    // Failed/Error Part
    function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
