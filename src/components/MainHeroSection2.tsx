'use client';

interface MainHeroSection2Props {}

export const MainHeroSection2: React.FC<MainHeroSection2Props> = () => {
  return (
    <div>
      <div className="px-5 sm:px-36 py-2 flex flex-row justify-between items-center">
        <div>
          <img src="/tiny-luci.svg" alt="little-lucy" className="sm:w-[180px] sm:h-[140px] w-[100px] h-[100px]" />
        </div>
        <div>
          <h1 className="font-bold sm:text-[82px] text-red-primary">BUY</h1>
        </div>
        <div>
          <img
            src="/hero-image2.svg"
            alt="hero-section-2-image"
            className="sm:w-[620px] sm:h-[520px] w-[200px] h-[200px]"
          />
        </div>
      </div>
      <h1 className="text-center sm:text-3xl text-sm font-bold border-2 border-black sm:p-4 p-2 w-fit mx-auto rounded-xl">
        CA:5Ke381D44MEQg3BQarWhAwhj1xbdNvXe2KHkTiZzw7r5
      </h1>
    </div>
  );
};
