import { CatIcon } from "./svg/CatIcon";
import { DotIcon } from "./svg/DotIcon";
import { FacebookIcon } from "./svg/FacebookIcon";
import { LocationIcon } from "./svg/LocationIcon";
import { TweerIcon } from "./svg/TweetIcon";
import { TextSection } from "./TextSection";

export const BodyOne = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] bg-[var(--bg-one)] flex justify-center items-center">
      <div className="container md:px-[32px] flex gap-[48px] justify-between">
        <div className="md:w-[50%] flex flex-col gap-[48px]">
          <div className="flex md:hidden justify-center">
            <img src="./mobilepic.png" alt="" />
          </div>
          <a
            className="text-[60px] font-[700] leading-[72px] text-[var(--tom-color)]"
            href=""
          >
            Hi, I’m Tom 👋
          </a>
          <TextSection
            text="I specialize in full stack development, particularly with React.js and Node.js.
            My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs."
          />
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[8px]">
              <LocationIcon />
              <TextSection text="Ulaanbaatar, Mongolia" />
            </div>
            <div className="flex gap-[8px]">
              <DotIcon />
              <TextSection text="Available for new projects" />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <CatIcon />
            <TweerIcon />
            <FacebookIcon />
          </div>
        </div>
        <div className="md:w-[50%] hidden md:flex justify-end">
          <img
            src="./Picfirst.png
            "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
