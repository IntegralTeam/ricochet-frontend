import { HeaderContainer } from 'containers/main/HeaderContainer';
import { InvestContainer } from 'containers/main/InvestContainer';
import { MainLayout } from 'containers/MainLayout';
import React, {
  FC,
} from 'react';
import styles from './styles.module.scss';

interface IProps {}

const InvestPage: FC<IProps> = () => (
  <MainLayout>
    <div className={styles.header}>
      <HeaderContainer />
    </div>
    <div className={styles.content}>
      <InvestContainer />
    </div>
    
  </MainLayout>
);

export { InvestPage };
