import { createReducer } from 'utils/createReducer';
import { MAIN_HANDLERS } from './handlers';
import { MainState } from './types';

export const mainInitialState: Readonly<MainState> = {
  address: '',
  isLoadingUsdcDowngrade: false,
  isLoadingUsdcUpgrade: false,
  isLoadingDaiDowngrade: false,
  isLoadingDaiUpgrade: false,
  isLoadingUsdcWbtcFlow: false,
  isLoadingUsdcWethFlow: false,
  isLoadingDaiMkrFlow: false,
  isLoadingWbtcDowngrade: false,
  isLoadingWbtcUpgrade: false,
  isLoadingWbtcFlow: false,
  isLoadingWethDownGrade: false,
  isLoadingWethUpgrade: false,
  isLoadingWethFlow: false,
};

export default createReducer(mainInitialState, MAIN_HANDLERS);
