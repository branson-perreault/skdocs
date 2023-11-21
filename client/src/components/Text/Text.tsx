import { createElement, ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import styles from './text.scss';

type Props = {
    children: ReactNode;
    as?: 'h1'|'h2'|'h3'|'h4'|'h5'|'body'|'caption';
    color?: string;
    emphasis?: 'bold'|'italic';
}
const Text = ({children, as, color, emphasis}: Props): ReactElement => {
    const elementProps = {
        style: {
            color
        },
        classnames: classnames(styles['text'], {
            [styles['text--bold']]: emphasis?.includes('bold'),
            [styles['text--italic']]: emphasis?.includes('italic'),
        })
    }
    const element = as || 'span';
    return createElement(element, elementProps, children);
};

export default Text;