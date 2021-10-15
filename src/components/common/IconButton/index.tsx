import React, {
  FC,
} from 'react';
import cx from 'classnames';
import { Coin, iconsCoin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  name?: Coin,
  imgName?: string
  balance?: number,
  className?: string,
  children?: JSX.Element | string,
  onClick?: () => void,
}

export const IconButton: FC<IProps> = ({
  name, imgName, onClick, className, children,
}) => (
  <>
    <button className={cx(styles.button, className)} onClick={onClick}>
      {name && <img src={iconsCoin[name]} alt={name} />}
      {imgName && <img src={imgName} alt="" />}
      {children}
    </button>
  </>
);
