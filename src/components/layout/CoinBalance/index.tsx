import React, {
  FC,
} from 'react';
import { IconButton } from 'components/common/IconButton';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { Coin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  nameCoin: Coin,
  balance?: number,
  onSelectToken?: () => void,
}

export const CoinBalance: FC<IProps> = ({
  nameCoin, balance, onSelectToken,
}) => (
  <IconButton
    className={styles.label}
    onClick={onSelectToken}
    name={nameCoin}
  >
    <div className={styles.container_balance}>
      <div className={styles.balance_wrap}>
        <div className={styles.name_wrap}>
          <div className={styles.name}>
            {nameCoin}
          </div>
          <div className={styles.container_arrow}>
            <FontIcon name={FontIconName.ArrowDown} className={styles.arrow_down} size={20} />
          </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.balance_name}>Balance:</div>
          <div className={styles.balance_value_container}>
            <div className={styles.balance_value}>{balance}</div>
          </div>
        </div>
      </div>
    </div>
  </IconButton>
);
