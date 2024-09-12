'use client';

interface MainAppHeaderProps {}

export const MainAppHeader: React.FC<MainAppHeaderProps> = () => {
  return (
    <div className="flex justify-between items-center px-5 sm:px-36 py-2 border-b-2 border-red-500">
      <div className="flex items-center">
        <img src="/header-logo.png" alt="header-logo" className="w-[64px] h-[64px]" />
      </div>
      <div className="flex items-center gap-2">
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
  );
};
