import repository from './repository';
import { Location } from '../../../types';
import { NotFound } from '../errors/notfound';

const getLocation = (uuid: string): Promise<Location> => {
    return repository.getLocation(uuid).then(location => {
        if (location === null) {
            throw new NotFound('Location was not found');
        }
        return location;
    });
};

const listLocations = (): Promise<Location[]> => {
    return repository.listLocations();
};

const listLocationsByDoctor = (uuid: string): Promise<Location[]> => {
    return repository.listLocationsByDoctor(uuid);
}

export default {
    getLocation,
    listLocations,
    listLocationsByDoctor
};
