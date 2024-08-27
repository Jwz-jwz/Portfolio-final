import { HeadName } from "./HeadName";
import { HeadText } from "./HeadText";
import { CatIcon } from "./svg/CatIcon";
import { FacebookIcon } from "./svg/FacebookIcon";
import { MessageICon } from "./svg/MessageIcon";
import { PhoneIcon } from "./svg/PhoneIcon";
import { TweerIcon } from "./svg/TweetIcon";
import { WindowIcon } from "./svg/WindowIcon";
import { TextSection } from "./TextSection";

export const BodyGetTouch = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] bg-[var(--bg-one)] flex  justify-center items-center">
      <div className="container md:px-[32px] flex flex-col gap-[48px] items-center">
        <HeadName text="Get in touch" />
        <HeadText text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
        <div className="flex flex-col items-center gap-[16px]">
          <div className="flex gap-[20px]">
            <MessageICon />
            <p className="text-[18px] font-[600] leading-[28px] md:text-[36px] md:font-[600] md:leading-[40px] text-[var(--tom-color)]">
              tom@pinecone.mn
            </p>
            <WindowIcon />
          </div>
          <div className="flex gap-[20px]">
            <PhoneIcon />
            <p className="text-[18px] font-[600] leading-[28px] md:text-[36px] md:font-[600] md:leading-[40px] text-[var(--tom-color)]">
              +976 88112233
            </p>
            <WindowIcon />
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <TextSection text="You may also find me on these platforms!" />
          <div className="flex gap-[16px] justify-center">
            <CatIcon />
            <TweerIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
