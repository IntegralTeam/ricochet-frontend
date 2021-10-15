import React, {
  FC,
} from 'react';
import { FontIcon, FontIconName } from 'components/common/FontIcon';
import { Dropdown } from 'components/common/Dropdown';
import { Languages } from 'constants/languages';
import { googleLink } from 'constants/urls';
import styles from './styles.module.scss';
import { ButtonUserInfo } from '../ButtonUserInfo';
import { SelectVariants } from '../SelectVariants';

interface IProps {
  balance: number,
  address: string,
  language: string,
  className?: string,
  onSelectLanguage?: (value: Languages) => void,
}

export const UserSettings: FC<IProps> = ({
  onSelectLanguage, balance, address, language, className,
}) => (
  <div className={styles.user_settings}>
    <ButtonUserInfo className={styles.balance_panel} name={FontIconName.RicoUser} size={16}>
      <div className={styles.balance}>{`${balance} RIC`}</div>
      <div className={styles.address}>{address}</div>
    </ButtonUserInfo>
    <div className={styles.language_wrap}>
      <ButtonUserInfo name={FontIconName.ArrowDown} size={16}>
        <Dropdown
          placement="bottom-start"
          popupClassName={styles.lang_dropdown} 
          label={<div className={styles.language}>{language}</div>}
        >
          <SelectVariants onSelectLanguage={onSelectLanguage} language={language} />
        </Dropdown>
      </ButtonUserInfo>
    </div>
    <div className={styles.dot_wrap}>
      <button className={styles.button}>
        <Dropdown
          placement="bottom-end"
          popupClassName={styles.settings_dropdown} 
          label={<FontIcon className={className} name={FontIconName.Dot} size={16} />}
        >
          <div className={styles.settings_wrap}>
            <ul className={styles.list}>
              <li className={styles.docs}>
                <a className={styles.head} href={googleLink} target="_blank" rel="noreferrer">Docs</a>
                <span className={styles.description}>Documentations for users of Ricochet</span>
              </li>
              <li className={styles.paper}>
                <a className={styles.head} href={googleLink} target="_blank" rel="noreferrer">White Paper</a>
                <span className={styles.description}>Check out our fundamential ideas</span>
              </li>
              <li className={styles.discord}>
                <a className={styles.head} href={googleLink} target="_blank" rel="noreferrer">Discord</a>
                <span className={styles.description}>Join the community on Discord</span>
              </li>
            </ul>
          </div>
        </Dropdown>
      </button>
    </div>
  </div>
);
