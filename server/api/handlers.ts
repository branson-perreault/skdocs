import { NextFunction, Request, Response } from 'express';

export const getIndex  = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    try {
        request.setTimeout(6000);
        response.json({path: '/api'})
    } catch (error) {
        next(error);
    }
};
