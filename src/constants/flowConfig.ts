import {
  USDCxAddress, 
  usdcxWethxExchangeAddress, 
  WETHxAddress,
  usdcxWbtcxExchangeAddress,
  wethxUsdcxExchangeAddress,
  WBTCxAddress,
  wbtcxUsdcxExchangeAddress,
} from './polygon_config';

export const startFlowConfig = {
  usdc_weth: {
    superToken: usdcxWethxExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: WETHxAddress,
  },
  usdc_wbtc: {
    superToken: usdcxWbtcxExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: WBTCxAddress,
  },
  weth_usdc: {
    superToken: wethxUsdcxExchangeAddress,
    tokenA: WETHxAddress,
    tokenB: USDCxAddress,
  },
  wbtc_usdc: {
    superToken: wbtcxUsdcxExchangeAddress,
    tokenA: WBTCxAddress,
    tokenB: USDCxAddress,
  },
};

export const stopFlowConfig = {
  usdc_weth: {
    superToken: usdcxWethxExchangeAddress,
    token: USDCxAddress,
  },
  usdc_wbtc: {
    superToken: usdcxWbtcxExchangeAddress,
    token: USDCxAddress,
  },
  weth_usdc: {
    superToken: wethxUsdcxExchangeAddress,
    token: WETHxAddress,
  },
  wbtc_usdc: {
    superToken: wbtcxUsdcxExchangeAddress,
    token: WBTCxAddress,
  },
};
