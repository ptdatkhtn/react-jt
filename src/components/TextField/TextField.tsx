import React, {AllHTMLAttributes, FormEvent, useState} from 'react';
import clsx from 'clsx';

import {TextFieldAlignment} from './types';

import Typo, {TypoVariants, TypoColors} from '../Typo';

import styles from './TextField.module.css';

export interface ITextFieldProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  assistiveText?: string;
  error?: boolean;
  display?: string;
  alignIcon?: TextFieldAlignment;
}

function getDisplay(display: string) {
  if ('tall' === display) {
    return styles.tall;
  }
  return styles.normal;
}

function getColor(error: boolean, focus: boolean): TypoColors {
  if (error) {
    return TypoColors.red;
  }
  return focus ? TypoColors.black : TypoColors.greyMedium;
}

const TextField = ({
  label,
  icon,
  assistiveText = '',
  error = false,
  display = 'normal',
  alignIcon = TextFieldAlignment.right,
  ...others
}: ITextFieldProps) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  function onFocus() {
    setFocus(true);
  }

  function onFocusOut() {
    const hasValue = value ? true : false;
    setFocus(hasValue || false);
  }

  function onChange(e: FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <div>
      <div
        className={clsx(styles.textField, getDisplay(display), {
          [styles.focus]: focus,
        })}
      >
        <div
          className={clsx(styles.formGroup, {
            [styles.reverse]: 'left' === alignIcon,
          })}
        >
          <div className={styles.formLabel}>
            {label && (
              <Typo
                className={clsx(styles.label, {
                  [styles.activedLabel]: focus,
                  [styles.deactivedLabel]: !focus,
                })}
                variant={TypoVariants.subTitle}
              >
                {label}
              </Typo>
            )}
            <input
              className={styles.input}
              {...others}
              onFocus={onFocus}
              onBlur={onFocusOut}
              onChange={onChange}
            />
          </div>
          {icon && <img className={styles.icon} src={icon} alt={label} />}
        </div>
      </div>
      <Typo
        variant={TypoVariants.subTitle}
        color={getColor(error, focus)}
        className={styles.assistiveText}
      >
        {assistiveText}
      </Typo>
    </div>
  );
};

export default TextField;
