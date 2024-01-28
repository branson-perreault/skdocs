import { NextFunction, Request, Response } from 'express';
import locations from '../locations';
import { catchErrors } from '../controllers/api/middleware';

export const getLocation = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    catchErrors(next, async () => {
        const results = await locations.getLocation(request.params['uuid']);
        response.json(results);
    });
};

export const getLocations = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    catchErrors(next, async () => {
        const results = await locations.listLocations();
        response.json(results);
    });
};
