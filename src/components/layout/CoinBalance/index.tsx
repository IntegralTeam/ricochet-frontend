import React, {
  FC,
} from 'react';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import ButtonNew from 'components/common/ButtonNew';
import { useLang } from 'hooks/useLang';
import { Coin, iconsCoin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  nameCoin: Coin,
  balance?: number,
  onSelectToken?: () => void,
}

export const CoinBalance: FC<IProps> = ({
  nameCoin, balance, onSelectToken,
}) => {
  const { t } = useLang();
  
  return (
    <ButtonNew
      className={styles.label}
      onClick={onSelectToken}
    >
      <div className={styles.container_balance}>
        <img src={iconsCoin[nameCoin]} alt={nameCoin} />
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
            <div className={styles.balance_name}>
              {t('Balance')}
              :
            </div>
            <div className={styles.balance_value_container}>
              <div className={styles.balance_value}>{balance}</div>
            </div>
          </div>
        </div>
      </div>
    </ButtonNew>
  );
};
