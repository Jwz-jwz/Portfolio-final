import { UpworkSvg } from "./svg/UpworkSvg";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const ExplainCardTwo = () => {
  return (
    <div className="hidden md:flex md:justify-between gap-[48px] bg-[var(--bg-one)] p-[32px] rounded-[12px] drop-shadow-md">
      <UpworkSvg />
      <div className="flex flex-col gap-[16px] ">
        <UpworkHead text="Team Lead" />
        <ul className="flex flex-col gap-[4px] list-disc ml-[30px]">
          <li>
            <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </li>
          <li>
            <TextSection text="Ut pretium arcu et massa semper, id fringilla leo semper." />
          </li>
          <li>
            <TextSection text="Sed quis justo ac magna." />
          </li>
          <li>
            <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </li>
        </ul>
      </div>

      <TextSection text="Jul 2017 - Oct 2021" />
    </div>
  );
};
