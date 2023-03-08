import { mapModifiersTailWind } from '@utils';
import React, { Suspense } from 'react';

// Colors
import { AppColors } from '@assets/colors';

// Icon

export interface SVGIconProps {
  className?: string;
  icon?: TSVGIcon;
  color?: TAppColors;
  width?: number;
  height?: number;
  modifiers?: Modifiers;
  type?: 'bold' | 'bulk';
}
export interface SVGProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  type?: 'bold' | 'bulk';
}

const ICON = {};

export type TSVGIcon = keyof typeof ICON;

export const IconFactory: React.FC<SVGIconProps> = ({
  className,
  icon = 'coin',
  color = 'grey',
  modifiers = [],
  ...props
}) => {
  const Component = ICON[icon];
  return (
    <div
      className={mapModifiersTailWind(
        `svg_icon svg_icon-${icon} svg_icon-${props.type}`,
        ['flex', 'items-center', 'justify-center', ...modifiers],
        className,
      )}>
      <Suspense fallback={<div>...</div>}>
        {Component && <Component color={AppColors[color]} {...props} />}
      </Suspense>
    </div>
  );
};

const Icon: React.FC<SVGIconProps> = ({ type, ...props }) => {
  return <IconFactory type="bold" {...props} />;
};

export const SVGIcon: React.FC<SVGIconProps> = ({ type, ...props }) => {
  return <IconFactory type="bulk" {...props} />;
};

export default Icon;
