import { HeadName } from "./HeadName";
import { DirectionButton } from "./svg/DirectionButton";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const WorkCardOne = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:flex rounded-xl shadow-md">
      <div className="md:w-[50%] flex justify-center items-center bg-[var(--bg-two)] p-[48px]">
        <img src="./fooddelivery.png" alt="" />
      </div>
      <div className="md:w-[50%] p-[48px] flex flex-col gap-[24px] ">
        <UpworkHead text="Food delivery" />
        <TextSection text="This project is a food menu website based on Express.js, Next.js, and MongoDB (using Mongoose) technologies. Users can view the food categorized by menu, search, increase quantity, and even enter an address to place an order." />
        <div className="flex gap-[8px] flex-wrap">
          <HeadName text="React" />
          <HeadName text="Next.js" />
          <HeadName text="Typescript" />
          {/* <HeadName text="Nest.js" /> */}
          <HeadName text="MongoDb" />
          <HeadName text="Tailwindcss" />
          <HeadName text="Figma" />
          <HeadName text="MUI" />
          <HeadName text="Github" />
          <HeadName text="Git" />
        </div>
        <DirectionButton />
      </div>
    </div>
  );
};
