import React, { FC } from 'react';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { Dropdown } from 'components/common/Dropdown';
import { LocaleKey, localeNames } from 'i18n/utils';
import ButtonNew from 'components/common/ButtonNew';
import { useHistory } from 'react-router-dom';
import { numFormatter } from 'utils/balances';
import { useTranslation } from 'i18n';
import { invokeRamp } from 'api/rampNetwork';
import logo from 'assets/images/logo.png';
import styles from './styles.module.scss';
import { SelectLanguage } from '../SelectLanguage';
import { Routes } from '../../../constants/routes';
import { ModalType } from '../../../store/modal/types';
import { useModal } from '../../../hooks/useModal';

interface IProps {
  account: string;
  ricBalance?: string,
  language: LocaleKey,
  className?: string,
  onSelectLanguage: (value: LocaleKey) => void,
  isReadOnly?:boolean,
}

export const UserSettings: FC<IProps> = ({
  isReadOnly, onSelectLanguage, ricBalance = '', account, language, className,
}) => {
  const history = useHistory();
  const { showModal } = useModal();
  const handleFundButton = () => invokeRamp({
    hostLogoUrl: `${window.location.origin}${logo}`,
    userAddress: account,
  }, () => { history.push(Routes.Wallet); });

  const { t } = useTranslation('main');
  const isConnecting = account === 'Connecting';
  return (
    <div className={styles.user_settings}>
      {!isReadOnly && (
      <ButtonNew className={styles.balance_panel}>
        <div
          className={styles.balance}
        >
          {!isConnecting && ricBalance && `${numFormatter(parseFloat(ricBalance))} RIC`}
        </div>
        <div className={styles.address}>{isConnecting ? account : account.substring(0, 6)}</div>
        <div className={styles.icon_wrap}>
          <FontIcon className={styles.icon} name={FontIconName.RicoUser} size={16} />
        </div>
      </ButtonNew>
      )}
      {isReadOnly && (
      <ButtonNew className={styles.balance_panel} onClick={showModal(ModalType.Metamask)}>
        <div className={styles.connect_wallet}>{t('Connect Wallet')}</div>
      </ButtonNew>
      )}
      {!isConnecting && (
        <ButtonNew disabled={isReadOnly} className={styles.fund_panel} onClick={handleFundButton}>
          <div className={styles.fund_inner}>{t('Fund Wallet')}</div>
        </ButtonNew>
      )}
      <div className={styles.language_wrap}>
        <Dropdown
          placement="bottom-end"
          popupClassName={styles.lang_dropdown}
          buttonClassName={styles.lang_button}
          label={(
            <div className={styles.language}>
              <div className={styles.language_name}>{localeNames[language]}</div>
              <FontIcon className={styles.lang_icon} name={FontIconName.ArrowDown} size={16} />
            </div>
)}
        >
          <SelectLanguage onChange={onSelectLanguage} />
        </Dropdown>

      </div>

      <div className={styles.dot_wrap}>
        <div className={styles.button}>
          <Dropdown
            placement="bottom-end"
            popupClassName={styles.settings_dropdown}
            buttonClassName={styles.settings_button}
            label={<FontIcon className={className} name={FontIconName.Dot} size={16} />}
          >
            <div className={styles.settings_wrap}>
              <ul className={styles.list}>
                <li className={styles.docs}>
                  <a className={styles.head} href="https://docs.ricochet.exchange/" target="_blank" rel="noreferrer">{t('Docs')}</a>
                  <span className={styles.description}>{t('Documentations for users of Ricochet')}</span>
                </li>
                <li className={styles.paper}>
                  <a className={styles.head} href={`${process.env.PUBLIC_URL}/RicochetExchangeWhitepaper.pdf`} target="_blank" rel="noreferrer">{t('White Paper')}</a>
                  <span className={styles.description}>{t('Check out our fundamental ideas')}</span>
                </li>
                <li className={styles.discord}>
                  <a className={styles.head} href="https://discord.gg/mss4t2ED3y" target="_blank" rel="noreferrer">{t('Discord')}</a>
                  <span className={styles.description}>{t('Join the community on Discord')}</span>
                </li>
                <li className={styles.discord}>
                  <a className={styles.head} href="https://github.com/Ricochet-Exchange/ricochet-frontend/blob/main/TERMS.md" target="_blank" rel="noreferrer">{t('Terms')}</a>
                  <span className={styles.description}>{t('Read our terms of service')}</span>
                </li>
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
