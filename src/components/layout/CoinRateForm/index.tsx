import { TextInput } from 'components/common/TextInput';
import React, {
  FC,
} from 'react';
import ButtonNew from '../../common/ButtonNew';
import { Coin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  value: string,
  placeholder?: string,
  onChange: () => void,
  onClickStart: () => void,
  onClickStop: () => void,
}

export const CoinRateForm: FC<IProps> = ({
  value, onChange, onClickStart, onClickStop, placeholder,
}) => (
 
  <div className={styles.input_container}>
    <div className={styles.input_wrap}>
      <TextInput
        value={value}
        className={styles.input}
        onChange={onChange} 
        containerClassName={styles.container_input} 
        placeholder={placeholder}
        right={<div className={styles.right}>{`${Coin.USDC}x/mo.`}</div>}
      />
    </div>
    <div className={styles.buttons}>
      <div className={styles.start_wrap}>
        <ButtonNew onClick={onClickStart} className={styles.start}>Start/Edit</ButtonNew>
      </div>
      <div className={styles.stop_wrap}>
        <ButtonNew onClick={onClickStop} className={styles.stop}>Stop</ButtonNew>
      </div>
    </div>
  </div>
  
);
