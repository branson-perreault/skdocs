import { Doctor } from '../../../types';
import { useCallback, useEffect, useState } from 'react';
import api from '../api';

type UseListDoctors = {
    listDoctors: () => void;
    doctors: Doctor[] | null;
    loading: boolean;
}

export const useListDoctors = (performFetch = false): UseListDoctors => {
    const [doctors, setDoctors] = useState<Doctor[] | null>(null);
    const [loading, setLoading] = useState<boolean>(performFetch);

    const callback = useCallback(() => {
        setLoading(true);
        return api.listDoctors()
            .then(doctors => setDoctors(doctors))
            .finally(() => setLoading(false));
    }, [setLoading, setDoctors]);

    useEffect(() => {
        if (performFetch) {
            callback();
        }
    }, [performFetch, callback]);

    return {
        listDoctors: callback,
        doctors: doctors,
        loading
    };
};
