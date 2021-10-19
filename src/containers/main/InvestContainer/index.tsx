import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { TextInput } from 'components/common/TextInput';
import { PanelChange } from 'components/layout/PanelChange';
import { UserSettings } from 'components/layout/UserSettings';
import { useLang } from 'hooks/useLang';
import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';

interface IProps {

}

export const InvestContainer :FC<IProps> = () => {
  const { language, changeLanguage, t } = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.input_wrap}>
        <TextInput 
          value=""
          placeholder={t('Search by Name')}
          onChange={() => console.log()} 
          className={styles.input} 
          containerClassName={styles.container_input}
          left={<FontIcon name={FontIconName.Search} className={styles.search} size={16} />}
        />
      </div>
      <div className={styles.headers}>
        <div className={styles.market}>{t('Stream Market')}</div>
        <div className={styles.stream}>{t('Your Stream')}</div>
        <div className={styles.balances}>{t('Your Balances')}</div>
        <div className={styles.streaming}>{t('Total Value Streaming')}</div>
      </div>
      <div className={styles.content}>
        { [...new Array(6)].map((item) => (
          <div className={styles.panel} key={item}>
            <PanelChange 
              value=""
              placeholder={t('Input Rate')} 
              onChange={() => console.log('onChange')}  
              onClickStart={() => console.log('onClickStart')} 
              onClickStop={() => console.log('onClickStop')}
            />
          </div>
        ))}
        <div className={styles.settings_mob}>
          <UserSettings
            language={language}
            onSelectLanguage={changeLanguage}
            className={styles.dot}
            balance={5434}
            address="0xA9Ed3b12E28faCb4b04f28a24d3e722DD9b72e40"
          />
        </div>
      </div>
    </div>
  );
};
