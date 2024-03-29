import React, { ReactElement } from 'react';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import './navigation.css';
import { COLORS } from '../../styles/colors';

const Navigation = (): ReactElement => {
    return <div className='navigation' style={{
        backgroundColor: COLORS.accentDark
    }}>
        <div className={'navigation__container'}>
            <div className={'navigation__container--left'}>
                <Flex direction={'column'} gap={12}>
                <Text as='h2' color={'white'}>Doctors Accepting Patients in Saskatchewan</Text>
                <Flex direction={'row'} gap={12}>
                    <Text as='h4' color={'white'}><Button as='link' theme={'link'} to={'/find'}>Search</Button></Text>
                    <Text as='h4' color={'white'}><Button as='link' theme={'link'} to={'/about'}>About</Button></Text>
                </Flex>
                </Flex>
            </div>
            <div className={'navigation__container--right'}>
            </div>
        </div>
    </div>;
};

export default Navigation;
