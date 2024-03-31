import { useParams } from 'react-router-dom';
import { useGetDoctor } from '../../hooks/useGetDoctor';
import Text from '../../components/Text/Text';
import Flex from '../../components/Flex/Flex';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import { useListDoctorLocations } from '../../hooks/useListDoctorLocations';

const Doctor = () => {
    const params = useParams();
    const uuid = params['uuid'] || '';

    const {doctor, loading: loadingDoctor} = useGetDoctor(uuid, true);
    const {locations, loading: loadingLocations} = useListDoctorLocations(uuid, true);

    const loading = loadingDoctor || loadingLocations;

    const dateOptions:Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    if (loading) {
        return <Page><span>loading...</span></Page>;
    }

    if (!doctor) {
        return <Page><span>not found</span></Page>;
    }

    return <Page>
        <Text as={'h1'}>Dr. {`${doctor.first_name} ${doctor.last_name}`.trim()}</Text>
        <Text as={'body'} color={'accent'} emphasis={'italic'}>Last Updated: {new Date(doctor.updated).toLocaleString()}</Text>
        <Flex alignItems={'center'}><Text as={'h3'}>Accepting patients?</Text>{doctor.accepting ? 'Yes' : 'No'}</Flex>
        <Button theme={'link-primary'} as={'link'} href={`https://www.cps.sk.ca/imis/CPSS/Physician_Summary/Physician_Profile.aspx?ID=${doctor.physician_id}`}>Physician Profile</Button>
        <Text as={'h2'}>Locations</Text>
        {locations?.map(location => <span key={location.uuid}>{location.name}</span>)}
    </Page>;
};

export default Doctor;
