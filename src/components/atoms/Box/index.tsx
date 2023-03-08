import classNames from 'classnames';
import React from 'react';

interface BoxProps extends WithChildren {
  modifiers?: Modifiers;
  color?: TTextColor;
  bg?: TBgColor | TBgImage;
  border?: TailWindBorderStyle[] | string[];
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ modifiers, color, bg, border, children, onClick, style, className }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames('box', className, modifiers, color, bg, border)}
        onClick={onClick}
        style={style}>
        {children}
      </div>
    );
  },
);

export default Box;
