import { NextFunction, Request, Response } from 'express';
import doctors from '../doctors';
import { catchErrors } from '../controllers/api/middleware';
import { CreateDoctorRequest } from '../../../types';

export const getDoctor = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    catchErrors(next, async () => {
        const results = await doctors.getDoctor(request.params['uuid']);
        response.json(results);
    });
};

export const getDoctors = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    catchErrors(next, async () => {
        const results = await doctors.listDoctors();
        response.json(results);
    });
};

export const createDoctor = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    catchErrors(next, async () => {
        const createDoctorRequest: CreateDoctorRequest = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            physicianId: request.body.physicianId || null,
            accepting: !!request.body.accepting
        };
        const results = await doctors.createDoctor(createDoctorRequest);
        response.json(results);
    });
};
