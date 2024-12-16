import { HeadName } from "./HeadName";
import { DirectionButton } from "./svg/DirectionButton";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const WorkCardThree = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:flex rounded-xl shadow-md">
      <div className="md:w-[50%] flex justify-center items-center bg-[var(--bg-two)] p-[48px]">
        <img src="./blogweb.png" alt="" />
      </div>
      <div className="md:w-[50%] p-[48px] flex flex-col gap-[24px] ">
        <UpworkHead text="Blog web" />
        <TextSection text="This project is a blog-type website built using Next.js and DaisyUI. It dynamically displays articles by fetching data from a ready-made API. The web interface features a user-friendly design, allowing users to view articles related to DevOps and the technology sector." />
        <div className="flex gap-[8px] flex-wrap">
          <HeadName text="React" />
          <HeadName text="Next.js" />
          {/* <HeadName text="Typescript" /> */}
          {/* <HeadName text="Nest.js" /> */}
          <HeadName text="API" />
          <HeadName text="Tailwindcss" />
          <HeadName text="Figma" />
          {/* <HeadName text="Cypress" /> */}
          <HeadName text="Github" />
          <HeadName text="Git" />
        </div>
        <DirectionButton />
      </div>
    </div>
  );
};
