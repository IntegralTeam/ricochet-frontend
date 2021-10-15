import React, {
  FC,
} from 'react';
import cx from 'classnames';
import { Languages } from 'constants/languages';
import styles from './styles.module.scss';

interface IProps {
  language: string
  onSelectLanguage?: (value: Languages) => void
}

interface LiProps {
  value:Languages, 
  onClick: any,
  className: string
}

const Li: FC<LiProps> = ({
  value, onClick, children, className,
}) => 
  <li className={className} onClick={() => onClick(value)} role="presentation">{children}</li>;

export const SelectVariants: FC<IProps> = ({ onSelectLanguage, language }) => (
  <div className={styles.lang_wrap}>
    <ul className={styles.lang_list}>
      {
        Object.values(Languages).map((item) => (
          <Li
            key={item}
            className={cx(styles.lang, { [styles.active]: item === language })} 
            value={item}
            onClick={onSelectLanguage}
          >
            {item}
          </Li>
        ))
      }
    </ul>
  </div>
);
