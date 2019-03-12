import clsx from 'clsx';
import React, {
  ReactNode,
  createElement,
  AllHTMLAttributes,
  Component,
} from 'react';

import styles from './Typo.module.css';

export interface ITypoProps<T> extends AllHTMLAttributes<T> {
  children: ReactNode;
  align?: string;
  color?: string;
  tag?: string;
  className?: string;
  variant?: string;
}

export function getColor(color: string) {
  switch (color) {
    case 'inherit':
      return styles.inherit;
    case 'black':
      return styles.black;
    case 'darkGrey':
      return styles.darkGrey;
    case 'white':
      return styles.white;
    case 'blue':
      return styles.blue;
    case 'red':
      return styles.red;
    default:
      return styles.black;
  }
}

export function getTag(tag: string) {
  switch (tag) {
    case 'h1':
      return styles.h1;
    case 'h2':
      return styles.h2;
    case 'h3':
      return styles.h3;
    case 'h4':
      return styles.h4;
    case 'h5':
      return styles.h5;
    case 'body1':
      return styles.body1;
    case 'body2':
      return styles.body2;
    case 'button':
      return styles.button;
    case 'subTitle':
      return styles.subTitle;
    default:
      return styles.body1;
  }
}

export function getAlign(align: string) {
  if ('middle' === align) {
    return styles.middle;
  }

  return styles.left;
}

class Typo<T = HTMLSpanElement> extends Component<ITypoProps<T>> {
  public render() {
    const {
      children,
      align = 'left',
      color = 'black',
      variant = 'body1',
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
          getTag(variant),
          getColor(color),
          getAlign(align),
          className,
        ),
      },
      children,
    );
  }
}

export default Typo;
