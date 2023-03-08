import { mapModifiersTailWind } from '@utils';
import React from 'react';

interface DividerProps {
  modifiers?: Modifiers;
  variant?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  color?: TBgColor;
  className?: string
}

const Divider: React.FC<DividerProps> = ({ modifiers, style, variant, color, className }) => {
  switch (variant) {
    case 'vertical':
      return (
        <div
          style={style}
          className={mapModifiersTailWind(
            className,
            'a-divider',
            ['w-0.5'],
            modifiers,
            color || 'bg-white/[0.2]',
          )}
        />
      );

    default:
      return (
        <div
          style={style}
          className={mapModifiersTailWind(
            className,
            'a-divider',
            ['w-full', 'h-[1px]'],
            modifiers,
            color || 'bg-white/[0.2]',
          )}
        />
      );
  }

  return (
    <div
      style={style}
      className={mapModifiersTailWind('a-divider', ['w-full', 'h-0.5'], modifiers)}
    />
  );
};

export default Divider;
