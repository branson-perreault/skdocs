import { useParams } from 'react-router-dom';
import { useGetDoctor } from '../../hooks/useGetDoctor';

const Doctor = () => {
    const params = useParams();
    const uuid = params['uuid'] || '';

    const {doctor, loading} = useGetDoctor(uuid, true);

    if (loading) {
        return <span>loading...</span>;
    }

    if (!doctor) {
        return <span>not found</span>;
    }

    return <span>{`${doctor.first_name} ${doctor.last_name}`.trim()}</span>;
};

export default Doctor;
