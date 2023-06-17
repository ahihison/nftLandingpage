import React from "react";
import Button from "../components/Button";
import WalletIcon from "../components/icons/WalletIcon";
const navMenuDatas = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Explore",
    link: "/",
  },
  {
    title: "Products",
    link: "/",
  },
  {
    title: "Activity",
    link: "/",
  },
  {
    title: "Elements",
    link: "/",
  },
];
const Header = () => {
  return (
    <header className="h-[100px] fixed top-0 left-0 right-0 bg-background shadow-md z-50">
      <div className="wrapper flex justify-between h-full items-center">
        <a href="/" title="logo" className="">
          <img srcSet="./logo.png 2x" alt="logo" />
        </a>
        <div className="flex items-center gap-x-[59px]">
          <ul className="flex items-center gap-x-[30px]">
            {navMenuDatas.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  className="text-[25px] leading-7 font-normal "
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="bg-primaryColor text-2xl effect-btn"
            style={{ height: "50px" }}
          >
            <WalletIcon />
            Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
