import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { TextInput } from 'components/common/TextInput';
import { PanelChange } from 'components/layout/PanelChange';
import { UserSettings } from 'components/layout/UserSettings';
import { useShowSettingsVariants } from 'hooks/useShowSettingsVariants';
import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';

interface IProps {

}

export const InvestContainer :FC<IProps> = () => {
  const {
    selectedLanguage,
    onSelectLanguage, 
  } = useShowSettingsVariants();

  return (
    <div className={styles.container}>
      <div className={styles.input_wrap}>
        <TextInput 
          value="Search by Name"
          placeholder="Search by Name"
          onChange={() => console.log()} 
          className={styles.input} 
          containerClassName={styles.container_input}
          left={<FontIcon name={FontIconName.Search} className={styles.search} size={16} />}
        />
      </div>
      <div className={styles.headers}>
        <div className={styles.market}>Stream Market</div>
        <div className={styles.stream}>Your Stream</div>
        <div className={styles.balances}>Your Balances</div>
        <div className={styles.streaming}>Total Value Streaming</div>
      </div>
      <div className={styles.content}>
        { [...new Array(6)].map((item) => (
          <div className={styles.panel} key={item}>
            <PanelChange 
              value="Input Rate"
              placeholder="Input Rate" 
              onChange={() => console.log('onChange')}  
              onClickStart={() => console.log('onClickStart')} 
              onClickStop={() => console.log('onClickStop')}
            />
          </div>
        ))}
        <div className={styles.settings_mob}>
          <UserSettings
            language={selectedLanguage}
            onSelectLanguage={onSelectLanguage}
            className={styles.dot}
            balance={5434}
            address="0xA9Ed3b12E28faCb4b04f28a24d3e722DD9b72e40"
          />
        </div>
      </div>
    </div>
  );
};
