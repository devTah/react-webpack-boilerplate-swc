import { mapModifiers } from '@utils';
import classNames from 'classnames';
import React from 'react';

interface RadioProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: '16x16' | '24x24';
  sync?: boolean;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({
  id,
  checked,
  onChange,
  size,
  sync,
  className,
}) => {
  return (
    <div
      id={id}
      className={classNames(
        className,
        mapModifiers('a-radio', size, checked && 'checked', sync && 'sync'),
      )}
      onClick={() => onChange && onChange(!checked)}>
      <span className="a-radio_thumb"></span>
    </div>
  );
};

export default Radio;
