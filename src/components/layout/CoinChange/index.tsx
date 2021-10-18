import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { IconButton } from 'components/common/IconButton';
import { Coin } from 'constants/coins';
import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';

interface IProps {
  nameCoinLeft: Coin,
  nameCoinRight: Coin,
}

export const CoinChange: FC<IProps> = ({
  nameCoinLeft, nameCoinRight,
}) => (
  <div className={styles.currency}>
    <div className={styles.labels}>
      <IconButton name={nameCoinLeft} className={styles.img_usd} />
      <IconButton name={nameCoinRight} className={styles.img_bitcoin} />
    </div>
    <div className={styles.currency_name_container}>
      <div className={styles.currency_name}>
        <div className={styles.currency_first}>{nameCoinLeft}</div>
        <div className={styles.arrow_circle_container}>
          <FontIcon
            name={FontIconName.ArrowRightCircled} 
            className={styles.arrow_circle}
            size={20}
          /> 
        </div>
        <div className={styles.currency_second}>{nameCoinRight}</div>
      </div>
    </div>
  </div>
);
