// This will Do the Authenticaton for the User, Whenever User Requests Something That Requires Authentication Verification
// A Middleware is a Function with Request, Response and next()
// We Will use the Middleware in Order.router 

import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

export default (req: any, res: any, next: any) => {
    // Get the Token of the User
    const token = req.headers.access_token as string;
    // If the Token Dosent have a Value
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();
    
    // When the Token has a Value
    // We need to Use Try{} and Catch{} Method
    try {
        const decodedUser = verify(token, "process.env.JWT_SECRET!");
        req.user = decodedUser;
    } catch (error) {
        res.status(HTTP_UNAUTHORIZED).send();
    }
    return next(); 
}