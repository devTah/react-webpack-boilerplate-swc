import { mapModifiers, mapModifiersTailWind } from '@utils';
import classNames from 'classnames';
import React, { useMemo } from 'react';

const mapWidth = {
  auto: 'w-auto',
  '28x28': 'w-7', // xs
  '32x32': 'w-8',
  '52x52': 'w-13',
  '56x56': 'w-14',
  '40x40': 'w-10', //md
  '44x44': 'w-11',
  '60x60': 'w-15',
  '64x64': 'w-16',
};
const mapHeight = {
  auto: 'h-auto',
  '28x28': 'h-7', // xs
  '32x32': 'h-8',
  '52x52': 'h-13',
  '56x56': 'h-14',
  '40x40': 'h-10', //md
  '44x44': 'h-11',
  '60x60': 'h-15',
  '64x64': 'h-16',
};

export interface ButtonProps extends WithChildren {
  size?:
    | 'auto'
    | '28x28'
    | '32x32'
    | '52x52'
    | '56x56'
    | '40x40'
    | '44x44'
    | '60x60'
    | '64x64';
  fullWidth?: boolean;

  label?: React.ReactNode;
  modifiers?: Modifiers;
  background?: TBgColor;

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
  beforeIcon?: React.ReactNode | string;
  afterIcon?: React.ReactNode | string;
  justify?: 'between' | 'center' | 'evenly' | 'start' | 'end';
  textColorClass?: TTextColor;
  form?: string;
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  variant?: 'normal' | 'outline';
  disabled?: boolean;
  br?: TailWindRound;
}

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      size = '52x52',
      fullWidth = false,
      variant = 'normal',
      label,
      modifiers = [],
      onClick,
      type,
      children,
      background,
      afterIcon,
      beforeIcon,
      textColorClass,
      justify = 'center',
      form,
      buttonProps,
      disabled,
      br = 'rounded-3xl',
    },
    ref,
  ) => {
    const cols = useMemo(() => {
      if (beforeIcon) return 'col-span-6';
      if (!beforeIcon && afterIcon) return 'col-span-6';
      if (!beforeIcon && !afterIcon) return 'col-span-8';
    }, [beforeIcon, afterIcon]);

    const stateStyle: Modifiers = useMemo(() => {
      if (disabled) return ['bg-grey-4'];
      return variant === 'outline'
        ? [
            'border',
            `border${background?.slice(2) || '-white'}`,
            `text${background?.slice(2) || '-white'}`,
          ]
        : [background || ''];
    }, [variant, disabled, background]);

    return (
      <React.Fragment>
        <button
          form={form}
          ref={ref}
          type={type}
          className={classNames(
            mapModifiers('a-button'),
            mapModifiersTailWind(`justify-${justify}`, [
              br,
              ...modifiers,
              fullWidth ? 'w-full' : mapWidth[size],
              mapHeight[size],
            ]),
            {
              'text-white': textColorClass || variant === 'outline' ? false : true,
            },
            'place-content-center',
            stateStyle,
            textColorClass,
          )}
          onClick={onClick}
          disabled={disabled}
          {...buttonProps}>
          {beforeIcon && <div className="justify-self-start ml-4">{beforeIcon}</div>}
          <div className={cols}>{label ?? children}</div>
          {afterIcon && <div className="justify-self-end mr-4">{afterIcon}</div>}
        </button>
      </React.Fragment>
    );
  },
);

export default Button;
