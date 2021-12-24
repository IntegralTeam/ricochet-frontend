import React, {
  useEffect,
  useCallback,
} from 'react';
import { BankDetails } from 'components/banks/BankDetails';
import { LoadingWrapper } from 'components/common/LoadingWrapper';
import { selectMain } from 'store/main/selectors';
import { selectBanks } from 'store/banks/selectors';
import { useShallowSelector } from 'hooks/useShallowSelector';
import { BankType } from 'store/banks/types';
import { useDispatch } from 'react-redux';
import { banksGetData } from 'store/banks/actionCreators';
import { mainCheck } from 'store/main/actionCreators';
import { InvestNav } from 'components/layout/InvestNav';
import { ModalType } from 'store/modal/types';
import { modalShow } from 'store/modal/actionCreators';
import styles from './styles.module.scss';

export const BanksContainer = () => {
  const dispatch = useDispatch();
  const { banks } = useShallowSelector(selectBanks);
  const { address: accountAddress, isLoading, isReadOnly } = useShallowSelector(selectMain);

  const handleSignIn = useCallback(() => {
    if (isReadOnly) {
      dispatch(modalShow(ModalType.Metamask));
    } else dispatch(mainCheck());
  }, [dispatch, modalShow, isReadOnly]);

  useEffect(() => {
    if (!banks[0]) dispatch(banksGetData());
  }, [banks]);

  const renderBanks = () => (
    banks.map((bank: BankType) => (
      <BankDetails
        key={bank.bankAddress}
        bank={bank}
        accountAddress={accountAddress}
        handleSignIn={handleSignIn}
      />
    ))
  );

  return (
    <div className={styles.outer_container}>
      <InvestNav />
      <div className={styles.container}>
        <LoadingWrapper
          isLoading={isLoading}
          className={styles.fullframe}
        >
          <div className={styles.contentTotal}>{renderBanks()}</div>
        </LoadingWrapper>
      </div>
    </div>
  );
};