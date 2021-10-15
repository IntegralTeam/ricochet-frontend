import React, {
  FC, useCallback, useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { IconButton } from 'components/common/IconButton';
import { UserSettings } from 'components/layout/UserSettings';
import Link from 'components/common/Link';
import { MobileMenu } from 'components/layout/MobileMenu';
import { useShowSettingsVariants } from 'hooks/useShowSettingsVariants';
import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.svg';
import menuImg from '../../../assets/images/menu.svg';

interface IProps {

}

export const HeaderContainer:FC<IProps> = () => {
  const location = useLocation();
  
  const [isShowMenu, setIsShowMenu] = useState(false);

  const {
    selectedLanguage,
    onSelectLanguage, 
  } = useShowSettingsVariants();

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
            <div>Invest</div>
          </Link>
          <Link
            to={Routes.Wallet}
            className={styles.upgrade_link} 
            activeClassName={styles.active}
          >
            <div>Wallet</div>
          </Link>
        </div>
        <div className={styles.settings_wrap}>
          <UserSettings
            className={styles.dot} 
            onSelectLanguage={onSelectLanguage}
            language={selectedLanguage}
            balance={5434}
            address="0xA9Ed3b12E28faCb4b04f28a24d3e722DD9b72e40"
          />
        </div>
        <div className={styles.mob_menu}>
          <IconButton imgName={menuImg} onClick={toggleMenuMobile} />
        </div>
        {isShowMenu && <MobileMenu closeMenu={toggleMenuMobile} />}
      </div>
      <div className={styles.mob_head}>{location.pathname === Routes.Wallet ? 'Wallet' : 'Invest'}</div>
    </div>
  );
};
