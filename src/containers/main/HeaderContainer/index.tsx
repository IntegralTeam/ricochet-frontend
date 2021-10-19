import React, {
  FC, useCallback, useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { UserSettings } from 'components/layout/UserSettings';
import Link from 'components/common/Link';
import { MobileMenu } from 'components/layout/MobileMenu';
import { useLang } from 'hooks/useLang';
import ButtonNew from 'components/common/ButtonNew';
import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.svg';
import menuImg from '../../../assets/images/menu.svg';

interface IProps {

}

export const HeaderContainer:FC<IProps> = () => {
  const location = useLocation();
  const { language, changeLanguage, t } = useLang();
  
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenuMobile = useCallback(() => {
    setIsShowMenu(!isShowMenu);
  }, [isShowMenu, setIsShowMenu]);

  return (
    <div className={styles.header_wrap}>
      <div className={styles.mob_panel}>
        <div className={styles.logo}>
          <Link to={Routes.Invest}><img src={logo} alt="Ricochet" /></Link>
        </div>
        <div className={styles.links}>
          <Link
            to={Routes.Invest}
            className={styles.dca_link} 
            activeClassName={styles.active}
          >
            <div>{t('Invest')}</div>
          </Link>
          <Link
            to={Routes.Wallet}
            className={styles.upgrade_link} 
            activeClassName={styles.active}
          >
            <div>{t('Wallet')}</div>
          </Link>
        </div>
        <div className={styles.settings_wrap}>
          <UserSettings
            className={styles.dot} 
            onSelectLanguage={changeLanguage}
            language={language}
            balance={5434}
            address="0xA9Ed3b12E28faCb4b04f28a24d3e722DD9b72e40"
          />
        </div>
        <div className={styles.mob_menu}>
          <ButtonNew className={styles.menu_button} onClick={toggleMenuMobile}>
            <img src={menuImg} alt="" />
          </ButtonNew>
        </div>
        {isShowMenu && <MobileMenu closeMenu={toggleMenuMobile} />}
      </div>
      <div className={styles.mob_head}>{location.pathname === Routes.Wallet ? t('Wallet') : t('Invest')}</div>
    </div>
  );
};
