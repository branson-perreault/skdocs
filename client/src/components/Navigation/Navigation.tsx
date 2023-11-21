import { ReactElement } from "react";
import './navigation.scss';
import { MdMenu } from 'react-icons/md';
import Text from '../Text/Text';

const Navigation = (): ReactElement => {
    return <div className='navigation'>
        <div className={'navigation__container'}>
            <div className={'navigation__container--left'}>
                <Text as='h2' color={'white'}>Doctors Accepting Patients in Saskatchewan</Text>
            </div>
            <div className={'navigation__container--right'}>
                <MdMenu color={'white'} size={32}/>
            </div>
        </div>
    </div>;
};

export default Navigation;