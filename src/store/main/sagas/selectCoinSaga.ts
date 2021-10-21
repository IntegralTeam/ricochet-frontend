import { put } from 'redux-saga/effects';
import { ModalType } from '../../modal/types';
import { modalShow, modalHide } from '../../modal/actionCreators';

import { mainSetState, selectCoin, showTokenList } from '../actionCreators';

export function* selectCoinSaga({ payload }: ReturnType<typeof selectCoin>) {
  try {
    yield put(mainSetState({ selectedCoin: payload.selectedCoin }));
    yield put(modalHide());
  } catch (e) {
    console.log(e);
  }
}

export function* showTokenListSaga({ payload }: ReturnType<typeof showTokenList>) {
  try {
    yield put(mainSetState({ coinType: payload.coinType }));
    yield put(modalShow(ModalType.SelectToken));
  } catch (e) {
    console.log(e);
  }
}
