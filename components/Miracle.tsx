export default function Miracle({ number }: { number: number }) {
  return (
    <div className="flex my-4 ">
      <p className="text-textButton bg-main p-3 number ">0{number}</p>
      <div className="ml-2 flex flex-col justify-around ">
        <p className="font-Baskervville">Miracle Vaccaro</p>
        <p>Sequouia</p>
      </div>
    </div>
  );
}
