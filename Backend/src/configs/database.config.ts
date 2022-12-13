// Import connect and ConnectOptions to Make a Connection with DB
import { connect, ConnectOptions } from "mongoose";

// Create a Function to Export Outside and Use it is Server.ts
// Now we Can Access the .env File with process.env.
// process.env.MONGO_URI
export const dbConnect = () => {
    // Putting ! will Tell Compiler that this Value is Always Present and is Not Undefined
    // connect returns a PROMISE, we use .then() 
    connect(process. env. MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    } as ConnectOptions).then(
        // Success Part
        () => console.log("connect successfully!"),
        // Failed/Error Part
        (error) => console.log(error)
    )
}
