import { COLORS, FONT_COLORS } from "../../styles/colors";

const styles = {
    text: {
        padding: '12px',
        borderWidth: '1px',
        borderRadius: '4px',
        borderColor: COLORS.greyLight,
        boxShadow: 'none',
        color: FONT_COLORS.primary,
        fontWeight: '600',
    }
}

type Props = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    as?: 'text' | 'search';
}

const Input = ({
    value,
    onChange,
    placeholder,
    as = 'text'
}: Props)=> {

    const textStyles = styles.text;

    return <input
        value={value}
        onChange={onChange}
        type={as}
        placeholder={placeholder}
        style={{
            ...textStyles,
        }}
    >
    </input>
};

export default Input;