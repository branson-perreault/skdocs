import { NextFunction, Request, Response } from 'express';
import doctors from '../../doctors';

export const getDoctor  = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const results = await doctors.getDoctor(request.params['uuid']);
        response.json(results);
    } catch (error) {
        next(error);
    }
};

export const getDoctors  = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const results = await doctors.listDoctors();
        response.json(results);
    } catch (error) {
        next(error);
    }
};
