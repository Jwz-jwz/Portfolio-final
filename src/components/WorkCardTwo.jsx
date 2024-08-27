import { HeadName } from "./HeadName";
import { DirectionButton } from "./svg/DirectionButton";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const WorkCardTwo = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:flex rounded-xl shadow-md">
      <div className="md:w-[50%] p-[48px] flex flex-col gap-[24px] ">
        <UpworkHead text="Mentorhub" />
        <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
        <div className="flex gap-[8px] flex-wrap">
          <HeadName text="React" />
          <HeadName text="Next.js" />
          <HeadName text="Typescript" />
          <HeadName text="Nest.js" />
          <HeadName text="PostgreSQL" />
          <HeadName text="Tailwindcss" />
          <HeadName text="Figma" />
          <HeadName text="Cypress" />
          <HeadName text="Storybook" />
          <HeadName text="Git" />
        </div>
        <DirectionButton />
      </div>
      <div className="md:w-[50%] flex justify-center items-center bg-[var(--bg-two)] p-[48px]">
        <img src="./Cardtwo.png" alt="" />
      </div>
    </div>
  );
};
