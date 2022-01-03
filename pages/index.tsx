import type { NextPage } from "next";

import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Body from "./Body";
const Home: NextPage = () => {
  return (
    <div className="font-Baskervville text-[#18191F]">
      <HeaderImage />
      <Body />
    </div>
  );
};

export default Home;
