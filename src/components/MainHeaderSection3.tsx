'use client';

import { InfiniteLogoScroll } from './InfiniteLogoScroll';

interface MainHeaderSection3Props {}

export const MainHeaderSection3: React.FC<MainHeaderSection3Props> = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:py-10 py-4">
      <div>
        <h1 className="text-red-500 text-center sm:text-3xl text-xl break-words">
          lil cute demon, chilling
          <br />
          in a very warm place.
        </h1>
        <img src="/hero-image3.svg" alt="hero-image3" className="sm:w-[1100px] sm:h-[540px] w-[300px] h-[200px]" />
      </div>
      <div
        className="flex flex-row items-center justify-center sm:p-4 p-2"
        onClick={() =>
          window.open('https://app.meteora.ag/pools/DQ2nqCUTXLGUQpn1iQSrvP8CX3jioXaMDZpxvPSMDq7w', '_blank')
        }
      >
        <img src="/meteora.svg" alt="meteor-logo" className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]" />
        <h1 className="text-center sm:text-3xl text-sm break-words">The top 50 holders earn fees</h1>
      </div>
      <InfiniteLogoScroll />
    </div>
  );
};
