import { UpgradePanel } from 'components/layout/UpgradePanel';
import { UserSettings } from 'components/layout/UserSettings';
import { Coin } from 'constants/coins';
import { useShowSettingsVariants } from 'hooks/useShowSettingsVariants';
import React, {
  FC, useCallback, useState,
} from 'react';
import styles from './styles.module.scss';

interface IProps {

}

export const UpgradeContainer:FC<IProps> = () => {
  const {
    selectedLanguage,
    onSelectLanguage, 
  } = useShowSettingsVariants();
  const [isSelectToken, setIsSelectToken] = useState(false);

  const handleVisionModal = useCallback(() => {  
    setIsSelectToken(!isSelectToken); 
  }, 
  [isSelectToken, setIsSelectToken]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.upgrade}>
          <div className={styles.header_upgrade}>
            Upgrade
          </div>
          <UpgradePanel
            placeholder="Input Amount" 
            balance={1053} 
            nameCoin={Coin.USDC}
            onChange={() => console.log()}
            onClickApprove={() => console.log()}
            onClickUpgrade={() => console.log()}
            onClickDowngrade={() => console.log()}
            value=""
            isUpgrade
            onSelectToken={handleVisionModal}
          />
        </div>
        <div className={styles.downgrade}>
          <div className={styles.header_downgrade}>
            Downgrade
          </div>
          <UpgradePanel 
            balance={593} 
            nameCoin={Coin.WBTC}
            onChange={() => console.log()}
            onClickApprove={() => console.log()}
            onClickUpgrade={() => console.log()}
            onClickDowngrade={() => console.log()}
            placeholder="Input Amount" 
            value=""
            isUpgrade={false}
            onSelectToken={handleVisionModal}
          />
        </div>
        <div className={styles.settings_mob}>
          <UserSettings
            onSelectLanguage={onSelectLanguage}
            language={selectedLanguage} 
            className={styles.dot}
            balance={5434}
            address="0xA9Ed3b12E28faCb4b04f28a24d3e722DD9b72e40"
          />
        </div>
      </div>
      {/* {isSelectToken && (
      <RicochetSelectTokenModal
        value={searchTerm}
        onChange={onSearch} 
        onSelectCoin={() => console.log()} 
        onClose={handleVisionModal}
      />
      )} */}
    </div>
  );
};
