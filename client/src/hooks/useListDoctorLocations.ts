import { Location } from '../../../types';
import { useCallback, useEffect, useState } from 'react';
import api from '../api';

type UseListDoctorLocations = {
    listDoctorLocations: (uuid: string) => void;
    locations: Location[] | null;
    loading: boolean;
}

export const useListDoctorLocations = (uuid: string, performFetch = false): UseListDoctorLocations => {
    const [locations, setLocations] = useState<Location[] | null>(null);
    const [loading, setLoading] = useState<boolean>(performFetch);

    const callback = useCallback((uuid: string) => {
        setLoading(true);
        return api.listDoctorLocations(uuid)
            .then(locations => setLocations(locations))
            .finally(() => {
                setLoading(false)
            });
    }, [setLoading, setLocations]);

    useEffect(() => {
        if (performFetch && uuid) {
            callback(uuid);
        }
    }, [performFetch, callback, uuid]);

    return {
        listDoctorLocations: callback,
        locations: locations,
        loading
    };
};
