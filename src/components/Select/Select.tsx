import { PropsWithChildren, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Select.module.scss';

interface SelectProps extends PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>> {
  className?: string;
}

export const Select = ({ children, className, ...props }: SelectProps) => {
  return (
    <select className={classNames(styles.select, className)} {...props}>
      {children}
    </select>
  );
};
