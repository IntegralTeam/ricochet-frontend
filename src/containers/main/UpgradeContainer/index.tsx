import { UpgradePanel } from 'components/layout/UpgradePanel';
import { UserSettings } from 'components/layout/UserSettings';
import { Coin } from 'constants/coins';
import { useLang } from 'hooks/useLang';
import React, {
  FC,
} from 'react';
import { useDispatch } from 'react-redux';
import { modalShow } from 'store/modal/actionCreators';
import { ModalType } from 'store/modal/types';
import styles from './styles.module.scss';

interface IProps {

}

export const UpgradeContainer:FC<IProps> = () => {
  const { language, changeLanguage, t } = useLang();

  const dispatch = useDispatch();
  const handleVisionModal = () => {
    dispatch(modalShow(ModalType.SelectToken));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.upgrade}>
          <div className={styles.header_upgrade}>
            {t('Upgrade')}
          </div>
          <UpgradePanel
            placeholder={t('Input Amount')}
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
            {t('Downgrade')}
          </div>
          <UpgradePanel 
            balance={593} 
            nameCoin={Coin.WBTC}
            onChange={() => console.log()}
            onClickApprove={() => console.log()}
            onClickUpgrade={() => console.log()}
            onClickDowngrade={() => console.log()}
            placeholder={t('Input Amount')} 
            value=""
            isUpgrade={false}
            onSelectToken={handleVisionModal}
          />
        </div>
        <div className={styles.settings_mob}>
          <UserSettings
            onSelectLanguage={changeLanguage}
            language={language} 
            className={styles.dot}
            balance={5434}
            address="0xA9Ed3b12E28faCb4b04f28a24d3e722DD9b72e40"
          />
        </div>
      </div>
    </div>
  );
};
