import { HeaderContainer } from 'containers/main/HeaderContainer';
import { UpgradeContainer } from 'containers/main/UpgradeContainer';
import { MainLayout } from 'containers/MainLayout';
import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';

interface IProps {}

const WalletPage: FC<IProps> = () => (
  <MainLayout>
    <div className={styles.header}>
      <HeaderContainer />
    </div>
    <div className={styles.content}>
      <UpgradeContainer />
    </div>
    
  </MainLayout>
);

export { WalletPage };
