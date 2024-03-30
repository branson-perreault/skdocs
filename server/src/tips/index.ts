import repository from './repository';
import { Tip } from '../../../types';
import { NotFound } from '../errors/notfound';

const getTip = (uuid: string): Promise<Tip> => {
    return repository.getTip(uuid).then(tip => {
        if (tip === null) {
            throw new NotFound('Tip was not found');
        }
        return tip;
    });
};

const listTips = (): Promise<Tip[]> => {
    return repository.listTips();
};

export default {
    getTip,
    listTips
};
