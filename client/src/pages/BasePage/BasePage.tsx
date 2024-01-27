import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

const BasePage = () => {
    return <>
        <Navigation />
        <Outlet />
    </>
}

export default BasePage;
