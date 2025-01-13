import { HeadName } from "./HeadName";
import { HeadText } from "./HeadText";
import { WorkCardFive } from "./WorkCardFive";
import { WorkCardFour } from "./WorkCardFour";
import { WorkCardOne } from "./WorkCardOne";
import { WorkCardThree } from "./WorkCardThree";
import { WorkCardTwo } from "./WorkCardTwo";

export const BodyWork = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] flex justify-center items-center relative z-10">
      <div className="container md:px-[32px] flex flex-col gap-[24px] md:gap-[48px]">
        <div className="flex flex-col items-center gap-[16px] ">
          <HeadName text="Projects" />
          <HeadText text="Some of the noteworthy projects I have built:" />
        </div>
        <WorkCardOne />
        <WorkCardTwo />
        <WorkCardThree />
        <WorkCardFour />
        <WorkCardFive />
      </div>
    </div>
  );
};
