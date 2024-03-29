import { ReactNode } from 'react';
import { BACKGROUND_COLORS } from '../../styles/colors';
import './page.css';

type Props = {
    children: ReactNode
}
const Page = ({ children }: Props) => {
    return (
        <div className={'page'} style={{
            backgroundColor: BACKGROUND_COLORS.primary
        }}>
            {children}
        </div>
    );
};

export default Page;
