import Page from '../../components/Page/Page';
import Text from '../../components/Text/Text';
import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import Form from '../../components/Forms/Form/Form';
import TextField from '../../components/Forms/TextField/TextField';

const Tips = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            message: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return <Page>
        <Text as={'h1'}>Leave a tip</Text>

        <Form formik={formik}>
            <TextField name={'name'} label={'Name'} />
            <label className={'textarea'}>
                <span>Message</span>
                <input
                    id='message'
                    name='message'
                    type='textarea'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />
            </label>
            <Button onClick={formik.submitForm}>Submit</Button>
        </Form>

    </Page>;
};

export default Tips;
