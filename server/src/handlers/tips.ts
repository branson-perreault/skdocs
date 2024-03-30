import { NextFunction, Request, Response } from 'express';
import tips from '../tips';
import { catchErrors } from '../controllers/api/middleware';
import { CreateTipRequest } from '../../../types';

export const getTip = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    catchErrors(next, async () => {
        const results = await tips.getTip(request.params['uuid']);
        response.json(results);
    });
};

export const listTips = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    catchErrors(next, async () => {
        const results = await tips.listTips(
            request.query.verified === 'true' ? true : request.query.verified === 'false' ? false : undefined
        );
        response.json(results);
    });
};

export const createTip = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    catchErrors(next, async () => {
        const createTipRequest: CreateTipRequest = {
            message: request.body.message || ''
        };
        const results = await tips.createUnverifiedTip(createTipRequest);
        response.json(results);
    });
};
