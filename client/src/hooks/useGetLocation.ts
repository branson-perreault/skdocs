import { Location } from '../../../types';
import { useCallback, useEffect, useState } from 'react';
import api from '../api';

type UseGetLocation = {
    getLocation: () => void;
    location: Location | null;
    loading: boolean;
}

export const useGetLocation = (uuid: string, performFetch = false): UseGetLocation => {
    const [location, setLocation] = useState<Location | null>(null);
    const [loading, setLoading] = useState<boolean>(performFetch);

    const callback = useCallback(() => {
        setLoading(true);
        return api.getLocation(uuid)
            .then(location => setLocation(location))
            .finally(() => setLoading(false));
    }, [setLoading, setLocation]);

    useEffect(() => {
        if (performFetch) {
            callback();
        }
    }, [performFetch, callback]);

    return {
        getLocation: callback,
        location,
        loading
    };
};
