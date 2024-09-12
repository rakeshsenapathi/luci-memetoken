import type { AppProps } from 'next/app';
import React, { useMemo } from 'react';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { INITIAL_FORM_CONFIG, JUPITER_DEFAULT_RPC } from 'src/constants';
import IntegratedTerminal from 'src/content/IntegratedTerminal';
import { MainAppHeader } from 'src/components/MainAppHeader';
import { MainHeroSection } from 'src/components/MainHeroSection';
import localFont from 'next/font/local';
import { InfiniteLogoScroll } from 'src/components/InfiniteLogoScroll';
import { MainHeroSection2 } from 'src/components/MainHeroSection2';
import { MainHeaderSection3 } from 'src/components/MainHeaderSection3';
import { MainAppSocialSection } from 'src/components/MainAppSocialSection';
const myFont = localFont({ src: '../fonts/trick_or_treats/trickortreats.ttf', weight: '400', display: 'swap' });

const isDevNodeENV = process.env.NODE_ENV === 'development';
const isDeveloping = isDevNodeENV && typeof window !== 'undefined';
// In NextJS preview env settings
const isPreview = Boolean(process.env.NEXT_PUBLIC_IS_NEXT_PREVIEW);
if ((isDeveloping || isPreview) && typeof window !== 'undefined') {
  // Initialize an empty value, simulate webpack IIFE when imported
  (window as any).Jupiter = {};

  // Perform local fetch on development, and next preview
  Promise.all([import('../library'), import('../index')]).then((res) => {
    const [libraryProps, rendererProps] = res;

    (window as any).Jupiter = libraryProps;
    (window as any).JupiterRenderer = rendererProps;
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const rpcUrl = useMemo(() => JUPITER_DEFAULT_RPC, []);

  return (
    <main className={myFont.className}>
      <div className="bg-white h-screen w-screen max-w-screen overflow-x-hidden flex flex-col justify-between">
        <MainAppHeader />
        <MainHeroSection />
        <InfiniteLogoScroll />
        <MainHeroSection2 />
        <div className="grid sm:grid-cols-2 grid-cols-1 px-5 sm:px-36 py-5">
          <IntegratedTerminal
            rpcUrl={rpcUrl}
            formProps={INITIAL_FORM_CONFIG.formProps}
            simulateWalletPassthrough={INITIAL_FORM_CONFIG.simulateWalletPassthrough}
            strictTokenList={INITIAL_FORM_CONFIG.strictTokenList}
            defaultExplorer={INITIAL_FORM_CONFIG.defaultExplorer}
            useUserSlippage={INITIAL_FORM_CONFIG.useUserSlippage}
          />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center ">
              <img src="/jupiter-logo.svg" alt="jupiter-logo" className="w-[44px] h-[42px]" />
            </div>
            <div className="flex flex-row items-center gap-2 sm:-translate-y-8 sm:-translate-x-16">
              <img src="/tiny-luci-sitting.svg" alt="tiny-luci-sitting" className="w-[140px] h-[120px]" />
              <h1 className="text-center sm:text-[70px] text-[40px]">JUPITER</h1>
            </div>
          </div>
        </div>
        <MainHeaderSection3 />
        <MainAppSocialSection />
      </div>
    </main>
  );
}
