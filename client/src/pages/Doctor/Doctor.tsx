import { useParams } from 'react-router-dom';
import { useGetDoctor } from '../../hooks/useGetDoctor';
import Text from '../../components/Text/Text';
import Flex from '../../components/Flex/Flex';
import { useListLocations } from '../../hooks/useListLocations';
import React from 'react';
import Button from '../../components/Button/Button';
import { useListDoctorLocations } from '../../hooks/useListDoctorLocations';

const Doctor = () => {
    const params = useParams();
    const uuid = params['uuid'] || '';

    const {doctor, loading: loadingDoctor} = useGetDoctor(uuid, true);
    const {locations, loading: loadingLocations} = useListDoctorLocations(uuid, true);

    const loading = loadingDoctor || loadingLocations;

    if (loading) {
        return <span>loading...</span>;
    }

    if (!doctor) {
        return <span>not found</span>;
    }

    return <Flex direction={'column'}>
        <Text as={'h1'}>Dr. {`${doctor.first_name} ${doctor.last_name}`.trim()}</Text>
        <Flex alignItems={'center'}><Text as={'h3'}>Accepting patients?</Text>{doctor.accepting ? 'Yes' : 'No'}</Flex>
        <Button theme={'link'} as={'link'} href={`https://www.cps.sk.ca/imis/CPSS/Physician_Summary/Physician_Profile.aspx?ID=${doctor.physician_id}`}>Physician Profile</Button>
        <Text as={'h2'}>Locations</Text>
        {locations?.map(location => <span>{location.name}</span>)}
    </Flex>;
};

export default Doctor;
