import { HeadName } from "./HeadName";
import { DirectionButton } from "./svg/DirectionButton";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const WorkCardFive = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:flex rounded-xl shadow-md">
      <div className="md:w-[50%] flex justify-center items-center bg-[var(--bg-two)]">
        <img src="./adminpharmacy.png" alt="" className="rounded-l-md" />
      </div>
      <div className="md:w-[50%] p-[48px] flex flex-col gap-[24px] ">
        <UpworkHead text="Pharmacy admin" />
        <TextSection text="In this project, we aimed to find pharmacy locations by searching medication names. The project is built using Next.js and Express.js, with MongoDb and Mongoose technologies for the database. The user interface is designed to be intuitive and easy to use." />
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
        <a href="https://pharmacyadmin-alpha.vercel.app/orders">
          <DirectionButton />
        </a>
      </div>
    </div>
  );
};
