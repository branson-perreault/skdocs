import repository from './repository';
import { Tip } from '../../../types';
import { NotFound } from '../errors/notfound';
import { Conflict } from '../errors/conflict';
import { CreateTipRequest } from '../../../types/tip';

const getTip = (uuid: string): Promise<Tip> => {
    return repository.getTip(uuid).then(tip => {
        if (tip === null) {
            throw new NotFound('Tip was not found');
        }
        return tip;
    });
};

const listTips = (verified?: boolean): Promise<Tip[]> => {
    return repository.listTips(verified);
};

const createUnverifiedTip = (request: CreateTipRequest): Promise<Tip> => {
    return repository.createTip(request).then(tip => {
        if (!tip) {
            throw new Conflict();
        }
        return tip as Tip;
    });
};

export default {
    getTip,
    listTips,
    createUnverifiedTip
};
