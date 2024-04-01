import { FormikProvider } from 'formik';
import { ReactNode } from 'react';
import Flex from '../../Flex/Flex';

type Props = {
    children: ReactNode;
    formik?: any;
    onSubmit?: () => void;
}
const Form = ({ children, formik, onSubmit }: Props) => {
    const form = <form onSubmit={() => onSubmit ? onSubmit() : formik?.submitForm()}>
        <Flex direction={'column'}>
            {children}
        </Flex>
    </form>;
    if (formik) {
        return <FormikProvider value={formik}>{form}</FormikProvider>;
    }
};

export default Form;
