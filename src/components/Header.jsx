import { Menu } from "./Menu";
import { NavBarName } from "./NavBarname";
import { LightButton } from "./svg/LightButtton";
import { MobileButton } from "./svg/MobileButton";
import { MoonButton } from "./svg/MoonButton";

export const Header = ({
  isDark,
  showing,
  aboutBut,
  workBut,
  testBut,
  contactBut,
}) => {
  return (
    <div className="w-full p-4 md:px-[80px] md:py-[16px] flex justify-center items-center bg-[var(--bg-one)]">
      <div className="container md:px-[32px] flex justify-between text-[var(--tom-color)]">
        <a
          className="text-[40px] font-[700] leading-[36px] text-center"
          href=""
        >
          Tom
        </a>
        <div className="hidden md:flex gap-[24px]">
          <div className="flex gap-[24px]">
            <button onClick={aboutBut}>
              <NavBarName name={"About"} />
            </button>
            <button onClick={workBut}>
              <NavBarName name={"Work"} />
            </button>
            <button onClick={testBut}>
              <NavBarName name={"Testimonials"} />
            </button>
            <button onClick={contactBut}>
              <NavBarName name={"Contact"} />
            </button>
            <p className="h-[24px] border-l-[1px] text-[var(--line-color)] mt-[7px]"></p>
          </div>
          <div className="flex gap-[16px]">
            <label for="check">
              {isDark ? <MoonButton /> : <LightButton />}
            </label>
            <p className="px-[16px] py-[6px] bg-[var(--bg-black)] rounded-[12px] text-[16px] font-[500] leading-[24px] text-[var(--download-color)] ">
              Download CV
            </p>
          </div>
        </div>
        <button className="flex md:hidden" onClick={showing}>
          <MobileButton />
        </button>
      </div>
    </div>
    // <div className="w-full p-4 md:px-[80px] md:py-[16px] flex justify-center items-center bg-[var(--bg-one)]">
    //   <div className="container md:px-[32px] flex justify-between text-[var(--tom-color)]">
    //     <a
    //       className="text-[40px] font-[700] leading-[36px] text-center"
    //       href=""
    //     >
    //       Tom
    //     </a>
    //     <div className="hidden md:flex gap-[24px]">
    //       <div className="flex gap-[24px]">
    //         <NavBarName name={"About"} />
    //         <NavBarName name={"Work"} />
    //         <NavBarName name={"Testimonials"} />
    //         <NavBarName name={"Contact"} />
    //         <p className="h-[24px] border-l-[1px] text-[var(--line-color)] mt-[7px]"></p>
    //       </div>
    //       <div className="flex gap-[16px]">
    //         <label for="check">
    //           {isDark ? <MoonButton /> : <LightButton />}
    //         </label>
    //         <p className="px-[16px] py-[6px] bg-[var(--bg-black)] rounded-[12px] text-[16px] font-[500] leading-[24px] text-[var(--download-color)] ">
    //           Download CV
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
