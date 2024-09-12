import { PublicKey } from '@solana/web3.js';
import { DEFAULT_EXPLORER, FormProps } from 'src/types';
import { SwapMode } from 'src/types/enums';

export const JUPITER_DEFAULT_RPC =
  process.env.NEXT_PUBLIC_JUPITER_DEFAULT_RPC ||
  'https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed';
export const DEFAULT_SLIPPAGE = 0.5;

export const WRAPPED_SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112');
export const LUCI_TOKEN_MINT = new PublicKey('5Ke381D44MEQg3BQarWhAwhj1xbdNvXe2KHkTiZzw7r5');
export const SOL_MINT_TOKEN_INFO = {
  chainId: 101,
  address: 'So11111111111111111111111111111111111111112',
  symbol: 'SOL',
  name: 'Wrapped SOL',
  decimals: 9,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
  tags: [],
  extensions: {
    website: 'https://solana.com/',
    serumV3Usdc: '9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT',
    serumV3Usdt: 'HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1',
    coingeckoId: 'solana',
  },
};

export interface IFormConfigurator {
  simulateWalletPassthrough: boolean;
  strictTokenList: boolean;
  defaultExplorer: DEFAULT_EXPLORER;
  formProps: FormProps;
  useUserSlippage: boolean;
}

export const INITIAL_FORM_CONFIG: IFormConfigurator = Object.freeze({
  simulateWalletPassthrough: false,
  strictTokenList: false,
  defaultExplorer: 'Solana Explorer',
  formProps: {
    fixedInputMint: false,
    fixedOutputMint: true,
    swapMode: SwapMode.ExactIn,
    fixedAmount: false,
    initialAmount: '',
    initialInputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    initialOutputMint: LUCI_TOKEN_MINT.toString(),
  },
  useUserSlippage: true,
});

export const TOKEN_2022_PROGRAM_ID = new PublicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb');
