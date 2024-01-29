import { Children, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    direction?: 'row' | 'column';
    gap?: number;
    alignItems?: 'flex-start' | 'flex-end' | 'center';
    justifyContent?: 'start' | 'end' | 'center' | 'space-between';
    inlineFlex?: boolean;
    flexItems?: boolean;
}

const Flex = ({
          children,
          direction = 'row',
          gap = 8,
          alignItems = 'flex-start',
          justifyContent = 'start',
          inlineFlex = false,
          flexItems = false
      }: Props) => {
    const items = Children.toArray(children).filter(Boolean);
    return <div
        style={{
            display: inlineFlex ? 'inline-flex' : 'flex',
            flexDirection: direction,
            alignItems,
            justifyContent,
            flexWrap: 'nowrap',
            gap,
            flexGrow: 1,
        }}
    >
        {items.map((child, i) => (
            <div
                key={i}
                style={{
                    display: flexItems ? 'flex' : 'inline',
                    flex: '0 1 auto',
                }}
            >
                {child}
            </div>
        ))}
    </div>;
};

export default Flex;
