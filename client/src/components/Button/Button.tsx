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
    link: {
        color: FONT_COLORS.white,
        textDecoration: 'none'
    },
    linkPrimary: {
        color: FONT_COLORS.accent
    }
};

type Props = {
    children: string | ReactNode;
    onClick?: () => void;
    href?: string;
    to?: string;
    as?: 'button' | 'link';
    target?: string;
    theme?: 'button' | 'button-primary' | 'link' | 'link-primary'
}
const Button = ({
    children,
    onClick,
    as = 'button',
    href = '',
    to = '',
    target,
    theme
}: Props) => {
    const navigate = useNavigate();

    const onButtonClick = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        if (href) {
            window.open(href, target, 'noreferrer,noopener');
        } else if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick();
        }
    };

    if (as === 'link') {
        const linkStyles = styles.link;
        if (theme === 'link-primary') {
            Object.assign(linkStyles, styles.linkPrimary);
        }
        return (
            <a href={''}
               onClick={onButtonClick}
               className={'link'}
               style={{
                   textTransform: 'uppercase',
                   ...linkStyles,
               }}>
                {children}
            </a>
        );
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
