import clsx from 'clsx';
import React, {
  ReactNode,
  createElement,
  AllHTMLAttributes,
  Component,
} from 'react';

import styles from './Typo.module.css';
import {TypoColors, TypoVariants, TypoAlignment} from './types';

export interface ITypoProps<T> extends AllHTMLAttributes<T> {
  children: ReactNode;
  align?: TypoAlignment;
  color?: TypoColors;
  tag?: string;
  className?: string;
  variant?: TypoVariants;
}

class Typo<T = HTMLSpanElement> extends Component<ITypoProps<T>> {
  private static getColor(color: string) {
    switch (color) {
      case 'inherit':
        return TypoColors.inherit;
      case 'black':
        return TypoColors.black;
      case 'greyDark':
        return TypoColors.greyDark;
      case 'white':
        return TypoColors.white;
      case 'blue':
        return TypoColors.blue;
      case 'red':
        return TypoColors.red;
      default:
        return TypoColors.black;
    }
  }

  private static getVariant(variant: string) {
    switch (variant) {
      case 'h1':
        return TypoVariants.h1;
      case 'h2':
        return TypoVariants.h2;
      case 'h3':
        return TypoVariants.h3;
      case 'h4':
        return TypoVariants.h4;
      case 'h5':
        return TypoVariants.h5;
      case 'body1':
        return TypoVariants.body1;
      case 'body2':
        return TypoVariants.body2;
      case 'button':
        return TypoVariants.button;
      case 'subTitle':
        return TypoVariants.subTitle;
      default:
        return TypoVariants.body1;
    }
  }

  private static getAlign(align: string) {
    if ('middle' === align) {
      return TypoAlignment.middle;
    }
    return TypoAlignment.left;
  }

  public render() {
    const {
      children,
      align = 'left',
      color = TypoColors.black,
      variant = TypoVariants.body1,
      tag = 'span',
      className,
      ...other
    } = this.props;
    return createElement(
      tag,
      {
        ...other,
        className: clsx(
          styles.typo,
          Typo.getVariant(variant),
          Typo.getColor(color),
          Typo.getAlign(align),
          className,
        ),
      },
      children,
    );
  }
}

export default Typo;
