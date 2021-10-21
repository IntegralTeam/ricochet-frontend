import ButtonNew from 'components/common/ButtonNew';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { TextInput } from 'components/common/TextInput';
import { useTranslation } from 'i18n';
import React, {
  ChangeEvent,
  FC,
} from 'react';
import { Coin, iconsCoin, namesCoin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  value: string,
  onSelectCoin: () => void
  onChange: (e:ChangeEvent<HTMLInputElement>) => void,
  onCloseModal: () => void
}

export const ModalSelectToken: FC<IProps> = ({
  onSelectCoin, value, onChange, onCloseModal, 
}) => {
  const { t } = useTranslation('main');
  let resultsCoin: Coin[] = [...new Array(10).fill(Coin.ETH), ...namesCoin];
  resultsCoin = !value 
    ? resultsCoin 
    : resultsCoin.filter((coin) => coin.toUpperCase().includes(value.toUpperCase()));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.select}>
            <div className={styles.select_token_wrap}>
              {t('Select a token')}
            </div>
            <div className={styles.close_wrap}>
              <button className={styles.close_btn} onClick={onCloseModal}>
                <FontIcon name={FontIconName.Close} className={styles.close} size={14} />
              </button>
            </div>
          </div>
          <div className={styles.input_wrap}>
            <TextInput
              value={value}
              className={styles.input}
              onChange={onChange} 
              containerClassName={styles.container_input} 
              placeholder={t('Search name or paste address')}
              left={<FontIcon name={FontIconName.Search} className={styles.search} size={16} />}
            />
          </div>
          <div className={styles.common_wrap}>
            <div className={styles.common}>Common bases</div>
          </div>    
          <div className={styles.icon_wrap}>
            {namesCoin.map((name) => (
              <span key={name}>
                <ButtonNew
                  className={styles.icon_button}
                  onClick={onSelectCoin}
                >
                  <img src={iconsCoin[name]} alt={name} />
                  <div className={styles.icon_name}>{name}</div>
                </ButtonNew>
              </span>
            ))}
          </div>
          {(resultsCoin.length > 0) 
            ? (
              <div className={styles.table_wrap}>
                <div className={styles.table}>
                  {resultsCoin.map((name) => (
                    <div key={name} className={styles.row_wrap}>
              
                      <ButtonNew className={styles.coin_wrap} onClick={onSelectCoin}>
                        <img src={iconsCoin[name]} alt={name} />
                        <div className={styles.coin_name_wrap}>
                          <div className={styles.coin_name}>
                            {name}
                          </div>
                          <div className={styles.description}>
                            {t('Ethereum')}
                          </div>
                        </div>
                      </ButtonNew>

                      <div className={styles.rate_wrap}>
                        <div className={styles.rate}>
                          153.2396
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
            : <div className={styles.results}>{t('Results not found')}</div>}
        </div>
      </div>
      <div className={styles.backdrop} onClick={onCloseModal} role="presentation" />
    </>
  );
};
