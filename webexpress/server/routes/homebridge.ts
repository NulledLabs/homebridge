import { Router, Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../config";
import * as fs from "fs";

const homebridgeRouter: Router = Router();

// homebridgeRouter.use((request: Request & { headers: { authorization: string } }, response: Response, next: NextFunction) => {
//     const token = request.headers.authorization;

//     verify(token, secret, function(tokenError) {
//         if (tokenError) {
//             return response.status(403).json({
//                 message: "Invalid token, please Log in first"
//             });
//         }

//         next();
//     });
// });

homebridgeRouter.get("/", (request: Request, response: Response) => {
    var configFile = fs.readFileSync('/Users/Mike/Code/homebridge/config.json','utf8');

    // response.json({
    //     text: "Greetings, you have valid token.",
    //     title: "Protected call"
    // });
    response.json(configFile);
});

export { homebridgeRouter }





