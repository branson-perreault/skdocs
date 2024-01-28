import { NextFunction, Request, Response } from 'express';

export const apiMiddleware  = async (
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> => {
    request.setTimeout(6000);
    next();
};

export const catchErrors = async (
    next: NextFunction,
    callback: () => Promise<void>
): Promise<void> => {
    try {
        return callback()
    } catch {
        next()
    }
}
