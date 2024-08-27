import { HeadName } from "./HeadName";
import { HeadText } from "./HeadText";
import { WorkCardOne } from "./WorkCardOne";
import { WorkCardThree } from "./WorkCardThree";
import { WorkCardTwo } from "./WorkCardTwo";

export const BodyWork = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] bg-[var(--bg-one)] flex justify-center items-center">
      <div className="container md:px-[32px] flex flex-col gap-[24px] md:gap-[48px]">
        <div className="flex flex-col items-center gap-[16px] ">
          <HeadName text="Work" />
          <HeadText text="Some of the noteworthy projects I have built:" />
        </div>
        <WorkCardOne />
        <WorkCardTwo />
        <WorkCardThree />
      </div>
    </div>
  );
};
