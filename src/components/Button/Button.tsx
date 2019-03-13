import React, {AllHTMLAttributes, ReactNode} from 'react';
import clsx from 'clsx';
import Typo from '../Typo';
import styles from './Button.module.css';
import {ButtonVariants} from './types';

export interface IButtonProps
  extends AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  /** Class name append to root button */
  className?: string;
  variant?: ButtonVariants;
  display?: 'big';
}

const Button = ({
  children,
  className,
  variant,
  display,
  ...other
}: IButtonProps) => (
  <Typo
    {...other}
    tag="button"
    color="inherit"
    variant="button"
    align="middle"
    className={clsx(
      styles.wrap,
      className,
      variant === ButtonVariants.Secondary && styles.secondary,
      variant === ButtonVariants.Primary && styles.primary,
      display === 'big' && styles.big,
    )}
  >
    {children}
  </Typo>
);

export default Button;
