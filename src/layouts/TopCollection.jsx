import React from "react";
const listTitleButton = [
  {
    title: "24H",
    isActive: true,
  },
  {
    title: "7D",
    isActive: false,
  },
  {
    title: "All time",
    isActive: false,
  },
];
const infoTopCollection = [
  {
    id: 1,
    avatar: "./avatar.png",
    clubName: "Bored Ape Yacht Club",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    items: "138",
  },
  {
    id: 2,
    avatar: "./avatar.png",
    clubName: "Mutant Ape Yacht Club",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "",
      valueDown: "-49.20",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    items: "122",
  },
  {
    id: 3,
    avatar: "./avatar.png",
    clubName: "Otherdeed for Otherside",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    items: "138",
  },
  {
    id: 4,
    avatar: "./avatar.png",
    clubName: "Bored Ape Yacht Club",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "",
      valueDown: "-14.22",
    },
    items: "138",
  },
  {
    id: 5,
    avatar: "./avatar.png",
    clubName: "Bored Ape Yacht Club",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    items: "138",
  },
  {
    id: 6,
    avatar: "./avatar.png",
    clubName: "Bored Ape Yacht Club",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "+52.39",
      valueDown: "",
    },
    items: "138",
  },
  {
    id: 6,
    avatar: "./avatar.png",
    clubName: "Bored Ape Yacht Club",
    imgETH: "./eth.png",
    volumne: {
      value: "230.38",
      valueUp: "+50.20",
      valueDown: "",
    },
    floorPrice: {
      value: "76.38",
      valueUp: "",
      valueDown: "-21.10",
    },
    items: "138",
  },
];
const TopCollection = () => {
  return (
    <div className="wrapper">
      <section className="flex items-center justify-center ">
        <div className="border-[3px] divide-solid w-[176px] bg-lineGradient rounded-r-[10px] mr-[35px]  "></div>
        <span className="text-[50px]">Top Collections</span>
        <div className="border-[3px] divide-solid w-[176px]  bg-lineGradient rounded-l-[10px] ml-[35px]  "></div>
      </section>
      <section className="flex mt-[50px]">
        {listTitleButton.map((item, index) => (
          <div
            key={index}
            className={`effect-btn w-[150px] h-[60px] rounded-3xl flex items-center justify-center ml-[52px] text-[30px] ${
              item.isActive ? "bg-[#F52AF5] " : "bg-[#332FD0]"
            } `}
          >
            {item.title}
          </div>
        ))}
      </section>
      <section>
        <table className="w-full mt-[65px]">
          <thead>
            <tr className="border-b text-[30px]">
              <th className="w-[40%] text-left ">Collections</th>
              <th className="w-[5%] text-left "></th>
              <th className="w-[20%] text-right">volume</th>
              <th className="w-[20%] text-right">Floor Price</th>
              <th className="w-[20%] text-center">Items</th>
            </tr>
          </thead>
          <tbody>
            {infoTopCollection.map((item) => (
              <tr key={item.id} className="text-[30px]">
                <td className="flex items-center mt-[30px] mb-[30px] ">
                  <span className="text-[#F52AF5] text-[30px] mr-[31px]">
                    {item.id}
                  </span>
                  <img
                    src={item.avatar}
                    className="w-[50px] h-[50px] mr-[25px]"
                  ></img>
                  <span className="mr-[84px]  font-normal">
                    {item.clubName}
                  </span>
                </td>
                <td className="text-left">
                  <img src={item.imgETH} className="w-[18px] h-[29px]"></img>
                </td>
                <td className="text-right relative">
                  {item.volumne.value} ETH
                  <span
                    className={`text-[20px]  absolute bottom-2 right-0 ${
                      item.volumne.valueDown == ""
                        ? "text-[#00FF57]"
                        : "text-[#FF0000]"
                    }`}
                  >
                    {item.volumne.valueDown == ""
                      ? item.volumne.valueUp
                      : item.volumne.valueDown}
                    %
                  </span>
                </td>
                <td className="text-right relative">
                  {item.floorPrice.value} ETH
                  <span
                    className={`text-[20px]  absolute bottom-2 right-0 ${
                      item.floorPrice.valueDown == ""
                        ? "text-[#00FF57]"
                        : "text-[#FF0000]"
                    }`}
                  >
                    {item.floorPrice.valueDown == ""
                      ? item.floorPrice.valueUp
                      : item.floorPrice.valueDown}
                    %
                  </span>
                </td>
                <td className="text-center">{item.items} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TopCollection;
