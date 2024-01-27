import { ReactElement } from 'react';
import Text from '../Text/Text';
import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = (): ReactElement => {
    return <div className='navigation'>
        <div className={'navigation__container'}>
            <div className={'navigation__container--left'}>
                <Text as='h2' color={'white'}>Doctors Accepting Patients in Saskatchewan</Text>
                <div className={'row'}>
                    <Text as='h4' color={'white'}><Link to={'/find'}>Find</Link></Text>
                    <Text as='h4' color={'white'}><Link to={'/about'}>About</Link></Text>
                </div>
            </div>
            <div className={'navigation__container--right'}>
            </div>
        </div>
    </div>;
};

export default Navigation;
