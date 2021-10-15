import React, {
  FC,
} from 'react';
import cx from 'classnames';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import styles from './styles.module.scss';

interface IProps {
  name: FontIconName,
  size: number,
  className?: string,
  onClick?: () => void
}

export const ButtonUserInfo: FC<IProps> = ({
  children, name, size, className, onClick,
}) => (
  <section className={cx(styles.panel, className)}>
    {children}
    <button className={styles.button} onClick={onClick}>
      <FontIcon className={styles.icon} name={name} size={size} />
    </button>
  </section>
);
