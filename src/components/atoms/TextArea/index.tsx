import { useAppSelector } from '@redux/configureStore';
import classNames from 'classnames';
import React, { FC } from 'react';
import Button from '../Button';
import Typography from '../Typography';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

interface TextAreaProps extends WithClassName {
  placeholder?: string;
  title?: string;
  name?: string;
  textColor?: ThemeColors;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  hiddenBtn?: boolean;
  rows?: number;
}

const TextArea: FC<TextAreaProps> = (props) => {

  return (
    <div className={cx('relative', styles['text-area-container'], props.className)}>
      <Typography label={props.title} modifiers={['font-bold', 'mb-3']} />
      <textarea
        name={props.name}
        rows={props.rows || 5}
        value={props.value}
        onChange={props.onChange}
        className={cx('text-area', props.textColor ? props.textColor : 'text-white')}
        onSubmit={(e) => alert('test')}
        placeholder={props.placeholder}
      />
      {!props.hiddenBtn && (
        <Button
          size="32x32"
          background="bg-purple-linear"
          br="rounded-xl"
          onClick={props.onSubmit}
          modifiers={[styles.button]}>
          {/* {lang.txtSave} */}
        </Button>
      )}
    </div>
  );
};

export default TextArea;
