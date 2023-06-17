import React from "react";
import Button from "../components/Button";
const totalBannerDatas = [
  {
    total: 26,
    name: "Artwork",
  },
  {
    total: 18,
    name: "Aucation",
  },
  {
    total: 8,
    name: "Artist",
  },
];
const Banner = () => {
  return (
    <section className="pt-[100px] relative isolate">
      <div className="absolute w-[412px] h-[412px] rounded-full bg-[#2A3E84] top-0 right-0 blur-[175px]"></div>
      <div className="absolute w-[412px] h-[412px] rounded-full bg-[#2A3E84] top-0 left-0 blur-[175px] -z-10"></div>
      <div className="wrapper mt-[150px] flex gap-x-[164px] items-end">
        <div className="max-w-[738px] w-full">
          <h1 className="text-8xl leading-snug font-bold font-font2">
            Discover <br />
            Collect and <br /> Sell NFT.
          </h1>
          <p className="text-3xl mt-[50px]">
            Explore on the world’s best largest NFT marketplace
          </p>
          <Button className="bg-primaryGadient text-3xl h-[60px] min-w-[250px] mt-[50px]">
            Explore
          </Button>
          <ul className="mt-[50px] flex items-center gap-x-[50px]">
            {totalBannerDatas.map((item, index) => (
              <li key={index}>
                <div className="text-[50px] font-font2">{item.total}K+</div>
                <div className="text-[20px] font-medium text-center">
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 ">
          <div className="relative isolate">
            <img
              src="./lineBanner.svg"
              alt="line banner"
              className="absolute -z-10"
            />
            <img
              srcSet="./logoBanner.png 2x"
              alt="logo banner"
              className="absolute -top-[200px] right-16"
            />
            <img src="./hero.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
