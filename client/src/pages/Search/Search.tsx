import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useListDoctors } from '../../hooks/useListDoctors';
import Flex from '../../components/Flex/Flex';
import Button from '../../components/Button/Button';

const Search = (): ReactElement => {
    const {doctors, loading} = useListDoctors(true);
    const navigate = useNavigate();

    const goToDoctor = (uuid: string) => {
        navigate(`/doctors/${uuid}`);
    };

    if (loading) {
        return <span>Loading....</span>;
    }

    if (!doctors || doctors.length === 0) {
        return <span>No doctors found matching your search</span>;
    }

    return <div>
        <Flex direction={'column'} gap={24}>
            {doctors?.map(d => <Button theme={'button-primary'}
                onClick={() => goToDoctor(d.uuid)}>{`${d.first_name} ${d.last_name}`.trim()}</Button>)}
        </Flex>
    </div>;
};

export default Search;
