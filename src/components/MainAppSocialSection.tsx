'use client';

interface MainAppSocialSectionProps {}

export const MainAppSocialSection: React.FC<MainAppSocialSectionProps> = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <img src="socials-1.svg" alt="socials-1" className="sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]" />
        <div className="uppercase sm:text-[100px] text-[50px] font-bold">
          SOCIALS
          <div className="flex items-center gap-2 w-full justify-between">
            <img
              src="/dexscreener-logo.svg"
              alt="header-logo"
              className="w-[39px] h-[39px] cursor-pointer"
              onClick={() =>
                window.open('https://dexscreener.com/solana/5Ke381D44MEQg3BQarWhAwhj1xbdNvXe2KHkTiZzw7r5', '_blank')
              }
            />
            <img
              src="/dextools-logo.svg"
              alt="header-logo"
              className="w-[39px] h-[39px] cursor-pointer"
              onClick={() =>
                window.open(
                  'https://www.dextools.io/app/en/solana/pair-explorer/DQ2nqCUTXLGUQpn1iQSrvP8CX3jioXaMDZpxvPSMDq7w?t=1725997958052',
                  '_blank',
                )
              }
            />
            <img
              src="/twitter-logo.svg"
              alt="header-logo"
              className="w-[39px] h-[39px] cursor-pointer"
              onClick={() => window.open('https://x.com/lucithecoin', '_blank')}
            />
            <img
              src="/telegram-logo.svg"
              alt="header-logo"
              className="w-[39px] h-[39px] cursor-pointer"
              onClick={() => window.open('https://t.me/lucitheportal', '_blank')}
            />
          </div>
        </div>
        <img src="socials-2.svg" alt="socials-2" className="sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]" />
      </div>
      <div
        className="w-full h-fit p-5 bg-red-primary"
        onClick={() =>
          window.open('https://app.meteora.ag/pools/DQ2nqCUTXLGUQpn1iQSrvP8CX3jioXaMDZpxvPSMDq7w', '_blank')
        }
      >
        <h1 className="sm:text-5xl text-2xl font-bold text-center">BUY</h1>
      </div>
    </div>
  );
};
