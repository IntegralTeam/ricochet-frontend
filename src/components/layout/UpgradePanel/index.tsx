import React, {
  FC,
} from 'react';
import { TextInput } from 'components/common/TextInput';
import { Coin } from '../../../constants/coins';
import styles from './styles.module.scss';
import { CoinBalance } from '../CoinBalance';
import { UpgradeDowngradeButtons } from '../UpgradeDowngradeButtons';

interface IProps {
  balance: number,
  value: string,
  placeholder?: string,
  isUpgrade: boolean,
  nameCoin: Coin,
  onChange: () => void,
  onClickApprove: () => void,
  onClickUpgrade: () => void,
  onSelectToken: () => void,
  onClickDowngrade: () => void
}

export const UpgradePanel: FC<IProps> = ({
  balance, nameCoin, placeholder,
  onChange, onClickApprove, onClickUpgrade, onClickDowngrade, value, isUpgrade, onSelectToken, 
}) => (
  <section className={styles.panel_mob}>
    <section className={styles.panel}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <CoinBalance 
            nameCoin={nameCoin} 
            balance={balance} 
            onSelectToken={onSelectToken}
          />
        
        </div>
    
        <div className={styles.input_wrap}>
          <TextInput
            value={value}
            className={styles.input}
            onChange={onChange} 
            containerClassName={styles.container_input} 
            placeholder={placeholder}
          />
        </div>
        <div className={styles.buttons}>
          <UpgradeDowngradeButtons 
            onClickApprove={onClickApprove}
            onClickUpgrade={onClickUpgrade}
            onClickDowngrade={onClickDowngrade}
            isUpgrade={isUpgrade}
          />
        </div>
      </div>
    </section>
    <div className={styles.buttons_mob}>
      <UpgradeDowngradeButtons 
        onClickApprove={onClickApprove}
        onClickUpgrade={onClickUpgrade}
        onClickDowngrade={onClickDowngrade}
        isUpgrade={isUpgrade}
      />
    </div>
  </section>
);
