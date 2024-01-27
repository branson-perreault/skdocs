import { NextFunction, Request, Response } from 'express';
import locations from '../locations';

export const getLocation  = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const results = await locations.getLocation(request.params['uuid']);
        response.json(results);
    } catch (error) {
        next(error);
    }
};

export const getLocations  = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const results = await locations.listLocations();
        response.json(results);
    } catch (error) {
        next(error);
    }
};
