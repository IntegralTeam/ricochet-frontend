import wbtc from '../assets/images/coins/bitcoin.svg';
import btc from '../assets/images/coins/bitcoinRotate.svg';
import eth from '../assets/images/coins/ethereum.svg';
import shib from '../assets/images/coins/shibaInu.svg';
import usdt from '../assets/images/coins/tetherUsdt.svg';
import usdc from '../assets/images/coins/usdCoin.svg';

export enum Coin {
  WBTC = 'WBTC',
  BTC = 'BTC', 
  ETH = 'ETH', 
  SHIB = 'SHIB',
  USDT = 'USDT',
  USDC = 'USDC',
}

export const namesCoin = [
  Coin.USDC,
  Coin.WBTC,
  Coin.ETH,
  Coin.USDT,
  Coin.SHIB,
  Coin.BTC,
];

export const iconsCoin: Record<Coin, string> = {
  [Coin.USDC]: usdc,
  [Coin.WBTC]: wbtc,
  [Coin.ETH]: eth,
  [Coin.USDT]: usdt,
  [Coin.SHIB]: shib,
  [Coin.BTC]: btc,
};
