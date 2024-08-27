import { FinalIcon } from "./svg/FinalIcon";
import { TextSection } from "./TextSection";

export const Footer = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[24px] flex justify-center items-center bg-[var(--bg-two)]">
      <div className="container md:px-[32px] flex justify-center">
        <div className="flex gap-[16px] justify-center">
          <FinalIcon />
          {/* <p className="flex md:hidden text-[14px] font-[400] leading-[20px] text-[var(--text-color)]]">
            2024 | Greetings with ❤️️ from Ulaanbaatar
          </p> */}
          <div className="flex md:hidden ">
            <TextSection text="2024 | Greetings with ❤️️ from Ulaanbaatar" />
          </div>
          <div className="hidden md:flex ">
            <TextSection text="2024 | Greetings with ❤️️ from Ulaanbaatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
