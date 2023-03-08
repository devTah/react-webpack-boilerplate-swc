import Button from '@components/atoms/Button';
import Typography, { TypographyProps } from '@components/atoms/Typography';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import styled from 'styled-components';

const cx = classNames.bind(styles);

export interface StepItemProps {
  contentImg: React.ReactNode;
  contentText: {
    title?: string;
    body?: string;
    variantTitle?: TypographyProps['variant'];
    modifiersTitle?: TypographyProps['modifiers'];
    variantBody?: TypographyProps['variant'];
    modifiersBody?: TypographyProps['modifiers'];
  };
}

const WrapImg = styled.div<{ row: string }>``;

const StepItem: React.FC<StepItemProps> = ({ contentImg, contentText }) => {
  return (
    <div className={cx('grid', 'h-full', 'w-full', styles.container)}>
      <div className={cx('relative display-center', styles.contentImg)}>
        {contentImg}
      </div>
      <div className={cx('row-span-3 px-5 text-center')}>
        <Typography
          variant={contentText.variantTitle || 'h2'}
          modifiers={[
            'text-white',
            'font-bold',
            cx(styles.contentText),
            ...(contentText.modifiersTitle || []),
          ]}
          label={contentText.title}
        />
        <Typography
          textColorClass="text-grey-3"
          modifiers={['text-base']}
          label={contentText.body}
          variant={'body2'}
        />
      </div>
    </div>
  );
};

export default StepItem;
