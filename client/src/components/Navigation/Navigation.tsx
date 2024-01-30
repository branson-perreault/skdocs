import React, { ReactElement } from 'react';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import './navigation.css';

const Navigation = (): ReactElement => {
    return <div className='navigation'>
        <div className={'navigation__container'}>
            <div className={'navigation__container--left'}>
                <Text as='h2' color={'white'}>Doctors Accepting Patients in Saskatchewan</Text>
                <Flex direction={'row'} gap={8}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Text as='h4' color={'white'}><Button theme={'button'} href={'/find'}>Search</Button></Text>
                    <Text as='h4' color={'white'}><Button theme={'button-primary'} href={'/about'}>About</Button></Text>
                </Flex>
            </div>
            <div className={'navigation__container--right'}>
            </div>
        </div>
    </div>;
};

export default Navigation;
