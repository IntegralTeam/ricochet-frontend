import React, {
  FC,
} from 'react';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { Dropdown } from 'components/common/Dropdown';
import { LocaleKey, localeNames } from 'i18n/utils';
import { useTranslation } from 'react-i18next';
import ButtonNew from 'components/common/ButtonNew';
import styles from './styles.module.scss';
import { SelectLanguage } from '../SelectLanguage';

interface IProps {
  balance: number,
  address: string,
  language: LocaleKey,
  className?: string,
  onSelectLanguage: (value: LocaleKey) => void,
}

export const UserSettings: FC<IProps> = ({
  onSelectLanguage, balance, address, language, className,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.user_settings}>
      <ButtonNew className={styles.balance_panel}>
        <div className={styles.balance}>{`${balance} RIC`}</div>
        <div className={styles.address}>{address}</div>
        <FontIcon className={styles.icon} name={FontIconName.RicoUser} size={16} />
      </ButtonNew>

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
                  <a className={styles.head} href="./RicochetExchangeWhitepaper.pdf" target="_blank" rel="noreferrer">Docs</a>
                  <span className={styles.description}>{t('Documentations for users of Ricochet')}</span>
                </li>
                <li className={styles.paper}>
                  <a className={styles.head} href="https://docs.ricochet.exchange/" target="_blank" rel="noreferrer">White Paper</a>
                  <span className={styles.description}>{t('Check out our fundamential ideas')}</span>
                </li>
                <li className={styles.discord}>
                  <a className={styles.head} href="https://discord.gg/mss4t2ED3y" target="_blank" rel="noreferrer">Discord</a>
                  <span className={styles.description}>{t('Join the community on Discord')}</span>
                </li>
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
