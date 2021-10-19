import { RICAddress } from 'constants/polygon_config';
import { HeaderContainer } from 'containers/main/HeaderContainer';
import { InvestContainer } from 'containers/main/InvestContainer';
import { MainLayout } from 'containers/MainLayout';
import { useShallowSelector } from 'hooks/useShallowSelector';
import React, {
  FC, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { mainCheck } from 'store/main/actionCreators';
import { selectMain } from 'store/main/selectors';
import styles from './styles.module.scss';

interface IProps {}

const InvestPage: FC<IProps> = () => {
  const dispatch = useDispatch();

  const {
    address,
    balances, 
  } = useShallowSelector(selectMain);

  useEffect(() => {
    dispatch(mainCheck());
  }, [dispatch]);

  return (
    <MainLayout>
      <div className={styles.header}>
        <HeaderContainer balance={balances && balances[RICAddress]} address={address || 'Connecting'} />
      </div>
      <div className={styles.content}>
        <InvestContainer balance={balances && balances[RICAddress]} address={address || 'Connecting'} />
      </div>
    
    </MainLayout>
  );
};

export { InvestPage };
