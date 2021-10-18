import { ModalSelectToken } from 'containers/modal/ModalSelectToken';
import React, {
  FC,
  ChangeEvent,
  useCallback,
  useState, 
} from 'react';
import { useDispatch } from 'react-redux';

interface IProps {
  onCloseModal: () => void
}

export const ModalContainer: FC<IProps> = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const onSelectCoin = useCallback(() => {
    dispatch('SELECT_COIN');
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
    />
  );
};
