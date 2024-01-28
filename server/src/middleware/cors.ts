import { NextFunction, Request, Response } from 'express';

export const corsPolicy = (req: Request, response: Response, next: NextFunction) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
};
