import React, {
  FC,
} from 'react';
import { LocaleKey, localeNames } from 'i18n/utils';
import { values } from 'ramda';
import styles from './styles.module.scss';

interface IProps {
  onChange: (value: LocaleKey) => void 
}

export const SelectLanguage: FC<IProps> = ({ onChange }) => (
  <div className={styles.lang_wrap}>
    <div className={styles.lang_list}>
      {
        values(LocaleKey).map((locale) => (
          <button key={locale} onMouseDown={() => onChange(locale)} className={styles.row}>
            {localeNames[locale]}
          </button>
        ))
      }
    </div>
  </div>
);
