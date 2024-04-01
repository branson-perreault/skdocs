import { useFormikContext } from 'formik';
import '../form-field.css';

type Props = {
    name: string;
    label: string;
}
const TextField = ({ name, label }: Props) => {
    const { handleChange, values } = useFormikContext<any>();
    return (
        <label className={'form-field text-field'}>
            <input
                type='text'
                placeholder='&nbsp;'
                id={name}
                name={name}
                onChange={handleChange}
                value={values[name]}
            />
            <span className={'placeholder'}>{label}</span>
        </label>
    );
};

export default TextField;
