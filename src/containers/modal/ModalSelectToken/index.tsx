import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { IconButton } from 'components/common/IconButton';
import { TextInput } from 'components/common/TextInput';
import React, {
  ChangeEvent,
  FC,
} from 'react';
import { Coin, namesCoin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  value: string,
  onSelectCoin: () => void
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

export const ModalSelectToken: FC<IProps> = ({ onSelectCoin, value, onChange }) => {
  let resultsCoin = [...new Array(10).fill(Coin.ETH), ...namesCoin];
  resultsCoin = !value 
    ? resultsCoin 
    : resultsCoin.filter((coin) => coin.toUpperCase().includes(value.toUpperCase()));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.select}>
            <div className={styles.select_token_wrap}>
              Select a token
            </div>
            <div className={styles.close_wrap}>
              <button className={styles.close_btn}>
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
              placeholder="Search name or paste address"
              left={<FontIcon name={FontIconName.Search} className={styles.search} size={16} />}
            />
          </div>
          <div className={styles.common_wrap}>
            <div className={styles.common}>Common bases</div>
          </div>    
          <div className={styles.icon_wrap}>
            {namesCoin.map((name) => (
              <span key={name}>
                <IconButton
                  name={name} 
                  className={styles.icon_button}
                  onClick={onSelectCoin}
                >
                  <div className={styles.icon_name}>{name}</div>
                </IconButton>
              </span>
            ))}
          </div>
          {(resultsCoin.length > 0) 
            ? (
              <div className={styles.table_wrap}>
                <div className={styles.table}>
                  {resultsCoin.map((item) => (
                    <div key={item} className={styles.row_wrap}>
              
                      <IconButton className={styles.coin_wrap} name={item} onClick={onSelectCoin}>
                        <div className={styles.coin_name_wrap}>
                          <div className={styles.coin_name}>
                            {item}
                          </div>
                          <div className={styles.description}>
                            Ethereum
                          </div>
                        </div>
                      </IconButton>

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
            : <div className={styles.results}>Results not found</div>}
        </div>
      </div>
      <div className={styles.backdrop} role="presentation" />
    </>
  );
};
