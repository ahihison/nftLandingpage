import React from "react";
import Button from "../components/Button";

const Story = () => {
  return (
    <div className="wrapper flex justify-center align-center mt-[150px]">
      <div className="w-[480px] h-[640px] mr-[167px]">
        <img src="./story-img.png" alt="image story" className="" />
      </div>
      <div className="w-[713px] relative">
        <img srcSet="./Star.png 5x" alt="" className="absolute left-[360px]" />
        <div className="absolute w-[407px] h-[612px] rounded-full bg-[#2A3E84] top-0 left-[300px] blur-[200px]"></div>
        <img
          srcSet="./Star.png 2x"
          alt=""
          className="absolute right-[-50px] bottom-[370px]"
        />

        <h3 className="font-bold text-[50px]">NFT’s Story</h3>
        <p className=" text-3xl font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <p className="text-3xl font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button className="bg-primaryGadient text-3xl h-[60px] min-w-[250px] mt-[50px]">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Story;
