import { ExplainCardOne } from "./ExplainCardOne";
import { ExplainCardThree } from "./ExplainCardThree";
import { ExplainCardTwo } from "./ExplainCardTwo";
import { ExplainOneSecond } from "./ExplainOneSecond";
import { ExplainSecondSecond } from "./ExplainSecondSecond";
import { ExplainThreeSecond } from "./ExplainThreeSecond";
import { HeadName } from "./HeadName";
import { HeadText } from "./HeadText";

export const BodyExperience = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] bg-[var(--bg-two)] flex flex-col items-center gap-[24px] md:gap-[48px]">
      <div className="container md:px-[32px] flex flex-col gap-[48px] justify-center">
        <div className="flex flex-col items-center gap-[16px] ">
          <HeadName text="Experience" />
          <div className="flex justify-center items-center ">
            <HeadText text="Here is a quick summary of my most recent experiences:" />
          </div>
        </div>
      </div>

      <ExplainCardOne />
      <ExplainCardTwo />
      <ExplainCardThree />

      <ExplainOneSecond />
      <ExplainSecondSecond />
      <ExplainThreeSecond />
    </div>
  );
};
