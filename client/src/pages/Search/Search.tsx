import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useListDoctors } from '../../hooks/useListDoctors';
import Flex from '../../components/Flex/Flex';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import Input from '../../components/Input/Input';
import { Doctor } from '../../../../types';

const Search = (): ReactElement => {
    const {doctors, loading} = useListDoctors(true);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<Doctor[] | null>(doctors);
    const navigate = useNavigate();

    const goToDoctor = (uuid: string) => {
        navigate(`/doctors/${uuid}`);
    };

    useEffect(() => {
        const filtered = doctors?.filter((doctor) => 
            `${doctor.first_name} ${doctor.last_name}`.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()));
        setResults(filtered || doctors)
    }, [search, loading])

    if (loading) {
        return <span>Loading....</span>;
    }

    if (!doctors || doctors.length === 0) {
        return <span>No doctors found matching your search</span>;
    }

    return <Page>
        <Flex direction={'column'} gap={24}>
            <Input value={search} as={'search'} placeholder="Search..." onChange={(e) => setSearch(e.currentTarget.value)}/>
            {results?.map(d => <Button theme={'button-primary'}
                onClick={() => goToDoctor(d.uuid)}>{`${d.first_name} ${d.last_name}`.trim()}</Button>)}
        </Flex>
    </Page>;
};

export default Search;
