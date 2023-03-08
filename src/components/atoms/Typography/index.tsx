import React from 'react';
import { mapModifiers, mapModifiersTailWind } from '@utils';
import classNames from 'classnames';

export interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | '9x15'
    | '80x100';
  label: React.ReactNode;
  modifiers?: Modifiers;
  textColorClass?: TTextColor;
  opacity?: number;
  onClick?: () => void;
  className?: string;
}

const mapType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  label,
  modifiers = [],
  textColorClass,
  opacity,
  onClick,
  className
}) => {
  return React.createElement(
    typeof label !== 'string' && typeof label !== 'number'
      ? 'div'
      : mapType[variant] || 'p',
    {
      className: classNames(
        className,
        { 'text-white': textColorClass ? false : true },
        mapModifiers('a-typography', variant),
        modifiers,
        textColorClass,
      ),
      onClick: onClick,
      style: {
        opacity: opacity,
      },
    },
    label,
  );
};

export default React.memo(Typography);
