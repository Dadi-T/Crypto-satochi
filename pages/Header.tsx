import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className=" flex h-screen w-screen">
        <div className="bg-white flex flex-col justify-center basis-3/4 mr-16   ml-20 ">
          <button className="lg:text-[24px] bg-main text-textButton self-start absolute top-10 left-10 px-4">
            Satochi List
          </button>
          <h1 className=" md:text-4xl lg:text-8xl lg:my-16 max-w-lg">
            The <span className="text-main">Crypo Satoshi</span> List
          </h1>
          <h2 className="lg:text-[20px] lg:mb-8 max-w-md">
            The World’s Best Cryptocurrency Capital Investors In 2022
          </h2>
          <button className="lg:text-[16.8px] bg-main text-textButton self-start px-6 py-2 rounded-md">
            View List
          </button>
        </div>
        <div className="bg-[#000000] image-content relative">
          <div className="absolute user-2">
            <Image src="/User-2.svg" width={218.4} height={218.4} />
          </div>

          <img src="/MonkeyLeft.svg" className="absolute monkeyLeft" />
          <img src="/Modestas.svg" className="absolute Modestas" />
          <img src="/Confucius.png" className="absolute Confucius" />
          <img src="/Jenelle.png" className="absolute Jenelle" />
          <img src="/Godefroy.png" className="absolute Godefroy" />
          <img src="/Josiah.png" className="absolute Josiah" />
          <img src="/Rufus.png" className="absolute Rufus" />
        </div>
      </div>
    </div>
  );
}
