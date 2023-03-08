import { mapModifiers } from '@utils';
import classNames from 'classnames';
import React from 'react';
import './index.scss';

interface BackgroundProps extends Partial<WithClassName & WithChildren> {
  variants?: 'em-brand' | 'calendar' | 'gradient-1';
}

const Background: React.FC<BackgroundProps> = ({
  children,
  variants,
  className,
}) => {
  return (
    <div className={classNames(mapModifiers('a-background', variants), className)}>
      {children}
    </div>
  );
};

export default Background;
