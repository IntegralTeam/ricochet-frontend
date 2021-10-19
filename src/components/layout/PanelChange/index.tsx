import React, {
  FC, useCallback, useState,
} from 'react';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { useLang } from 'hooks/useLang';
import styles from './styles.module.scss';
import { Coin } from '../../../constants/coins';
import { CoinChange } from '../CoinChange';
import { CoinBalancePanel } from '../CoinBalancePanel';
import { CoinRateForm } from '../CoinRateForm';

interface IProps {
  value: string,
  placeholder?:string,
  onChange: () => void,
  onClickStart: () => void,
  onClickStop: () => void
}

export const PanelChange: FC<IProps> = ({
  value, onChange, onClickStart, onClickStop, placeholder,
}) => {
  const [inputShow, setInputShow] = useState(false);
  const { t } = useLang();

  const toggleInputShow = useCallback(() => { setInputShow(!inputShow); }, 
    [inputShow, setInputShow]);
  
  return (
    <>
      <section className={styles.panel}>
        <div className={styles.btn_arrow} onClick={toggleInputShow} role="presentation">
          <div className={styles.container}>
            <div className={styles.wrap}>
              <div className={styles.coin}>
                <CoinChange nameCoinLeft={Coin.USDC} nameCoinRight={Coin.WBTC} />
              </div>

              <div className={styles.streaming_mob}>
                <span className={styles.number}>78,382.45</span>
                {`${Coin.USDC}x/mo.`}
              </div>

              <div className={styles.stream}>
                <div className={styles.stream_values}>
                  <span className={styles.number}>1000</span>
                  {`${Coin.USDC}/mo.`}
                </div>
                <div className={styles.date}>
                  {t('Runs out on')}
                  :
                  <span className={styles.number_date}>11/04/21</span>
                </div>
              </div>
              <div className={styles.balances}>
                <div className={styles.first_balance_container}>

                  <CoinBalancePanel className={styles.currency_first_balance} name={Coin.USDC} balance="2.000.29548" />
                </div>
                <CoinBalancePanel className={styles.currency_second_balance} name={Coin.WBTC} balance="0.39548" />
              </div>
              <div className={styles.streaming}>
                <span className={styles.number}>78,382.45</span>
                {`${Coin.USDC}x/mo.`}
              </div>
              {inputShow && (
              <div className={styles.form_mob}>
                <CoinRateForm
                  placeholder={placeholder}
                  value={value} 
                  onChange={onChange} 
                  onClickStart={onClickStart} 
                  onClickStop={onClickStop}
                />
              </div>
              )}

              {inputShow 
                ? (
                  <FontIcon name={FontIconName.ArrowUp} className={styles.arrow_up} />
                )
                : (
                  <FontIcon name={FontIconName.ArrowDown} className={styles.arrow_down} />
                )}
            </div>
          </div>
        </div>
        {inputShow && (
          <div className={styles.form}>
            <CoinRateForm
              placeholder={placeholder}
              value={value} 
              onChange={onChange} 
              onClickStart={onClickStart} 
              onClickStop={onClickStop}
            />
          </div>
        )}
  
      </section>
    </>
  );
};
