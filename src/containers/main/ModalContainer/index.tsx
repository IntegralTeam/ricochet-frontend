import { Coin, namesCoin, namesCoinX } from 'constants/coins';
import { downgradeTokensList } from 'constants/downgradeConfig';
import { ModalSelectToken } from 'containers/modal/ModalSelectToken';
import { useShallowSelector } from 'hooks/useShallowSelector';
import React, {
  FC,
  ChangeEvent,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { selectCoin } from 'store/main/actionCreators';
import { selectMain } from 'store/main/selectors';

interface IProps {
  onCloseModal: () => void
}

export const ModalContainer: FC<IProps> = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const { coinType } = useShallowSelector(selectMain);

  const [tokensList, setTokensList] = useState<Coin[]>(namesCoinX);

  useEffect(() => {
    if (downgradeTokensList.find((el) => el.coin === coinType)) {
      setTokensList(namesCoinX);
    } else {
      setTokensList(namesCoin);
    }
  }, [coinType]);
  
  const onSelectCoin = useCallback((coin: Coin) => {
    dispatch(selectCoin(coin));
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const onSearch = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, [searchTerm, setSearchTerm]);

  return (
    <ModalSelectToken
      onSelectCoin={onSelectCoin}
      value={searchTerm}
      onChange={onSearch}
      onCloseModal={onCloseModal}
      tokensList={tokensList}
    />
  );
};
