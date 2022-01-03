export default function HeaderImage() {
  return (
    <div className="lg:backgroundImage md:backgroundImage-tablet">
      <div className="bg-white flex flex-col justify-center basis-3/4 mr-16   ml-20 ">
        <button className=" md:text-[18px] lg:text-[24px] bg-main text-textButton self-start absolute top-10 left-10 px-4">
          Satochi List
        </button>
        <h1 className=" md:text-4xl lg:text-8xl lg:my-16 lg:max-w-lg md:max-w-xs">
          The <span className="text-main">Crypo Satoshi</span> List
        </h1>
        <h2 className="lg:text-[20px] lg:mb-8 lg:max-w-md md:max-w-xs">
          The World’s Best Cryptocurrency Capital Investors In 2022
        </h2>
        <button className="lg:text-[16.8px] bg-main text-textButton self-start px-6 py-2 rounded-md">
          View List
        </button>
      </div>
    </div>
  );
}
