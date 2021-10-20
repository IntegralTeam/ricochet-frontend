import { Coin } from 'constants/coins';
import {
  MKRAddress, 
  DAIAddress, 
  USDCAddress,
  WBTCAddress,
} from './polygon_config';

export const upgradeTokensList = [
  {
    coin: Coin.MKR,
    tokenAddress: MKRAddress,
  },
  {
    coin: Coin.DAI,
    tokenAddress: DAIAddress,
  },
  {
    coin: Coin.USDC,
    tokenAddress: USDCAddress,
  },
  {
    coin: Coin.WBTC,
    tokenAddress: WBTCAddress,
  },
];
