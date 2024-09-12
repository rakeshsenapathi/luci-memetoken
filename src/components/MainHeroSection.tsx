'use client';

interface MainHeroSectionProps {}

export const MainHeroSection: React.FC<MainHeroSectionProps> = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-center px-5 sm:px-36 py-2 ">
      <div className="text-red-primary text-xl sm:-translate-y-16">
        <h1>He is Mischievous</h1>
        <h1>He is vicious and smart</h1>
        <h1>Chaotic lil’ creature.</h1>
        <h1>King of hell but he’s cute.</h1>
        <h1>Boss of the trenches.</h1>
        <h1>His name is LUCI.</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {' '}
        <h1 className="text-red-primary sm:text-[150px] text-[80px] font-bold">LUCI</h1>
        <img
          src="/hero-image.svg"
          alt="hero-image"
          className="sm:w-[575px] sm:h-[456px] w-[300px] sm:-translate-y-16"
        />
      </div>
      <div className="flex flex-col justify-center items-center -rotate-6 sm:translate-y-16">
        <h1 className="italic text-2xl">The Little</h1>
        <h1 className="italic text-2xl">Demon</h1>
      </div>
    </div>
  );
};
