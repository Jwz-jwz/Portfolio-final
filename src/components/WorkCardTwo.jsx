import { HeadName } from "./HeadName";
import { DirectionButton } from "./svg/DirectionButton";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const WorkCardTwo = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:flex rounded-xl shadow-md">
      <div className="md:w-[50%] p-[48px] flex flex-col gap-[24px] ">
        <UpworkHead text="Expense tracker" />
        <TextSection text="This project is designed for financial record-keeping, allowing users to track and manage their income and expenses. The project is built using Next.js and Express.js, with PostgreSQL and Neon technologies for the database. The user interface is designed to be intuitive and easy to use." />
        <div className="flex gap-[8px] flex-wrap">
          <HeadName text="React" />
          <HeadName text="Next.js" />
          <HeadName text="Express.js" />
          {/* <HeadName text="Nest.js" /> */}
          <HeadName text="PostgreSQL" />
          <HeadName text="Tailwindcss" />
          <HeadName text="Vercel" />
          <HeadName text="Cypress" />
          <HeadName text="Github" />
          <HeadName text="Git" />
        </div>
        <DirectionButton />
      </div>
      <div className="md:w-[50%] flex justify-center items-center bg-[var(--bg-two)] p-[48px]">
        <img src="./expense.png" alt="" />
      </div>
    </div>
  );
};
