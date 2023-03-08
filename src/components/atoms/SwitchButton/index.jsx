import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Circle, CircleSecondary, Root, RootSecondary } from './styled';
import Typography from '../Typography';

const SwitchButton = ({
  switchType = 'primary',
  value,
  onSwitch,
  iconLeft = faPlus,
  iconRight = faMinus,
  labelLeft = '',
  labelRight = '',
  fullWidth = false,
}) => {
  switch (switchType) {
    case 'secondary':
      return (
        <RootSecondary
          fullWidth={fullWidth}
          move={value}
          onClick={() => {
            onSwitch?.(!value);
          }}>
          {labelLeft ? (
            <Typography
              variant={'body2'}
              label={labelLeft}
              modifiers={['font-bold', 'z-1']}
              textColorClass={!value && 'text-grey'}
            />
          ) : (
            <FontAwesomeIcon icon={iconLeft} className="faUpDownLeftRight" />
          )}
          {labelRight ? (
            <Typography
              variant={'body2'}
              label={labelRight}
              modifiers={['font-bold', 'z-1']}
              textColorClass={!value && 'text-grey'}
            />
          ) : (
            <FontAwesomeIcon icon={iconRight} className="faTrash" />
          )}
          <CircleSecondary move={value} />
        </RootSecondary>
      );

    default:
      return (
        <Root
          fullWidth={fullWidth}
          move={value}
          onClick={() => {
            onSwitch?.(!value);
          }}>
          <Circle move={value} />
        </Root>
      );
  }
};

SwitchButton.propTypes = {
  value: PropTypes.bool,
  onSwitch: PropTypes.func,
  switchType: PropTypes.oneOf(['primary', 'secondary']),
};

export default SwitchButton;
