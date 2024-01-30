import { createElement, ReactElement, ReactNode } from 'react';
import { FONT_COLORS } from '../../styles/colors';
import './text.css';


type Props = {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'caption';
    color?: keyof typeof FONT_COLORS;
    emphasis?: 'bold' | 'italic';
}
const Text = ({children, as, color, emphasis}: Props): ReactElement => {
    const textColor = color ? FONT_COLORS[color] : FONT_COLORS.primary;
    const elementProps = {
        style: {
            color: textColor,
            fontWeight: emphasis?.includes('bold') ? '600' : '400',
            fontStyle: emphasis?.includes('italic') ? 'italic' : 'normal'
        },
    };
    const element = as || 'span';
    return createElement(element, elementProps, children);
};

export default Text;
