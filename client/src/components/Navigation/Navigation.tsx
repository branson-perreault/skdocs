import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import './navigation.css';

const Navigation = (): ReactElement => {
    return <div className='navigation'>
        <div className={'navigation__container'}>
            <div className={'navigation__container--left'}>
                <Text as='h2' color={'white'}>Doctors Accepting Patients in Saskatchewan</Text>
                <Flex direction={'row'} gap={8}>
                    <Text as='h4' color={'white'}><Link to={'/find'}>Search</Link></Text>
                    <Text as='h4' color={'white'}><Link to={'/about'}>About</Link></Text>
                </Flex>
            </div>
            <div className={'navigation__container--right'}>
            </div>
        </div>
    </div>;
};

export default Navigation;
