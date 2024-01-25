import { createElement, ReactElement, ReactNode } from 'react';
import classnames from 'classnames';

const styles = {
    'text': {
        'color': '#424242',
        'font-weight': '400',
        'margin': '0'
    },
    'text--bold': {
        'font-weight': '600'
    },
    'text--italic': {
        'font-style': 'italic'
    }
};

type Props = {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'caption';
    color?: string;
    emphasis?: 'bold' | 'italic';
}
const Text = ({children, as, color, emphasis}: Props): ReactElement => {
    const elementProps = {
        style: {
            color
        },
        classnames: classnames(styles['text'],
            emphasis?.includes('bold') ? {...styles['text--bold']} : {},
            emphasis?.includes('italic') ? {...styles['text--italic']} : {}
        )
    };
    const element = as || 'span';
    return createElement(element, elementProps, children);
};

export default Text;
