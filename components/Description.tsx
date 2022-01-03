import Miracle from "./Miracle";

export default function Description() {
  const miracles: number[] = [1, 2, 3];
  return (
    <div className="flex flex-col basis-3/4 justify-between font-normal font-inter">
      <h2 className="text-[42.11px] font-extrabold">
        The 2022 Satoshi Crypto List
      </h2>
      <p className="text-[18.95px]">
        To qualify, investors are ranked by their portfolio companies that have
        gone public or been acquired for at least $200 million over the past
        five years, or that have at least doubled their private valuation since
        initial investment to $400 million or more over the same period.
      </p>
      {miracles.map((number: number) => {
        return <Miracle number={number} />;
      })}
      <button className="bg-main py-2 px-6 text-textButton self-start font-medium text-sm rounded-lg ">
        View Full List
      </button>
    </div>
  );
}
