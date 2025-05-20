import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'm' | 'l';

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({ variant = 'primary', size = 'l', children, ...props }: ButtonProps) => {
  return (
    <button className={classNames(styles.button, styles[variant], styles[size])} {...props}>
      {children}
    </button>
  );
};
