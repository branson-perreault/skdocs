import { Location } from '../../../types';
import { useCallback, useEffect, useState } from 'react';
import api from '../api';

type UseListLocations = {
    listLocations: () => void;
    locations: Location[] | null;
    loading: boolean;
}

export const useListLocations = (performFetch = false): UseListLocations => {
    const [locations, setLocations] = useState<Location[] | null>(null);
    const [loading, setLoading] = useState<boolean>(performFetch);

    const callback = useCallback(() => {
        if (loading) {
            return;
        }
        setLoading(true);
        return api.listLocations()
            .then(locations => setLocations(locations))
            .finally(() => setLoading(false));
    }, [setLoading, setLocations]);

    useEffect(() => {
        if (performFetch) {
            callback();
        }
    }, [performFetch, callback]);

    return {
        listLocations: callback,
        locations: locations,
        loading
    };
};
