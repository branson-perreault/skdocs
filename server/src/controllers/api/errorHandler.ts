import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../../errors/error';

export const apiErrorHandler = async (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    if (error instanceof BaseError) {
        response.status(error.getCode()).send({
            code: error.getCode(),
            reason: error.getReason(),
            message: error.getMessage()
        });
    } else {
        const error = new BaseError();
        response.status(error.getCode()).send({
            code: error.getCode(),
            reason: error.getReason(),
            message: error.getMessage()
        });
    }
};

