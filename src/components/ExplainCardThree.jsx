import { UpworkSvg } from "./svg/UpworkSvg";
import { TextSection } from "./TextSection";
import { UpworkHead } from "./UpworkHead";

export const ExplainCardThree = () => {
  return (
    <div className="hidden md:flex md:justify-between gap-[48px] bg-[var(--bg-one)] p-[32px] rounded-[12px] drop-shadow-md">
      <UpworkSvg />
      <div className="flex flex-col gap-[16px] ">
        <UpworkHead text="Full Stack Developer  " />
        <ul className="flex flex-col gap-[4px] list-disc ml-[30px] ">
          <li>
            <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          </li>
        </ul>
      </div>

      <TextSection text="Dec 2015 - May 2017" />
    </div>
  );
};
