import { MouseEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKGROUND_COLORS, COLORS, FONT_COLORS } from '../../styles/colors';
import './button.css';

const styles = {
    button: {
        padding: '12px',
        borderWidth: '1px',
        borderRadius: '4px',
        borderColor: COLORS.greyLight,
        background: BACKGROUND_COLORS.secondary,
        boxShadow: 'none',
        color: FONT_COLORS.primary,
        fontWeight: '600',
    },
    buttonPrimary: {
        borderColor: COLORS.greyLight,
        background: BACKGROUND_COLORS.accent,
        color: FONT_COLORS.white,
        fontWeight: '600'
    },
    link: {},
    linkPrimary: {}
};

type Props = {
    children: string | ReactNode;
    onClick?: () => void;
    as?: 'button' | 'link';
    href?: string;
    target?: string;
    theme?: 'button' | 'button-primary' | 'link' | 'link-primary'
}
const Button = ({
    children,
    onClick,
    as = 'button',
    href = '',
    target,
    theme
}: Props) => {
    const navigate = useNavigate();

    const onButtonClick = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        if (as === 'link' && href) {
            window.open(href, target, 'noreferrer,noopener');
        } else if (href) {
            navigate(href);
        }
        if (onClick) {
            onClick();
        }
    };

    if (as === 'link') {
        return <a href={''} onClick={onButtonClick}>{children}</a>;
    }

    const buttonStyles = styles.button;
    if (theme === 'button-primary') {
        Object.assign(buttonStyles, styles.buttonPrimary);
    }
    return <button
        onClick={onButtonClick}
        style={{
            textTransform: 'uppercase',
            ...buttonStyles,
        }}
    >
        {children}
    </button>;
};

export default Button;
