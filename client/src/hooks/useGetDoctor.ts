import { Doctor } from '../../../types';
import { useCallback, useEffect, useState } from 'react';
import api from '../api';

type UseGetDoctor = {
    getDoctor: () => void;
    doctor: Doctor | null;
    loading: boolean;
}

export const useGetDoctor = (uuid: string, performFetch = false): UseGetDoctor => {
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [loading, setLoading] = useState<boolean>(performFetch);

    const callback = useCallback(() => {
        setLoading(true);
        return api.getDoctor(uuid)
            .then(doctor => setDoctor(doctor))
            .finally(() => setLoading(false));
    }, [setLoading, setDoctor, uuid]);

    useEffect(() => {
        if (performFetch) {
            callback();
        }
    }, [performFetch, callback]);

    return {
        getDoctor: callback,
        doctor,
        loading
    };
};
