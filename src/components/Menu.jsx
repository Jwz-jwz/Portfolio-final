import { NavBarName } from "./NavBarname";
import { Close } from "./svg/Close";
import { LightButton } from "./svg/LightButtton";
import { MoonButton } from "./svg/MoonButton";

export const Menu = ({
  isDark,
  visible,
  isShow,
  aboutButMen,
  workButMen,
  testButMen,
  contactButMen,
}) => {
  return (
    <div
      className={`absolute transition-all ease-in duration-200 ${
        isShow ? "right-0" : "right-[100%]"
      }  w-full h-[1000px] flex justify-center bg-[var(--bg-one)]`}
    >
      <div className="container flex flex-col items-start text-[var(--tom-color)] gap-[24px] p-[16px]">
        <div className="container flex justify-between">
          <a
            className="text-[40px] font-[700] leading-[36px] text-center"
            href=""
          >
            Tom
          </a>
          <button onClick={visible}>
            <Close />
          </button>
        </div>
        <p className="container border-b-[2px] text-[var(--line-color)] "></p>

        <button onClick={aboutButMen}>
          <NavBarName name={"About"} />
        </button>
        <button onClick={workButMen}>
          <NavBarName name={"Work"} />
        </button>
        <button onClick={testButMen}>
          <NavBarName name={"Testimonials"} />
        </button>
        <button onClick={contactButMen}>
          <NavBarName name={"Contact"} />
        </button>
        <p className="container border-b-[2px] text-[var(--line-color)] "></p>
        <div className="container flex justify-between">
          <NavBarName name={"Switch theme"} />
          <label for="check">{isDark ? <MoonButton /> : <LightButton />}</label>
        </div>
        <p className="container px-[16px] py-[6px] bg-[var(--bg-black)] rounded-[12px] text-[16px] font-[500] leading-[24px] text-[var(--download-color)] text-center">
          Download CV
        </p>
      </div>
    </div>
  );
};
