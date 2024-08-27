import { BodyAbout } from "@/components/BodyAbout";
import { BodyExperience } from "@/components/BodyExperience";
import { BodyGetTouch } from "@/components/BodyGetTouch";
import { BodyOne } from "@/components/BodyOne";
import { BodySkills } from "@/components/BodySkills";
import { BodyWork } from "@/components/BodyWork";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { MenuToggle } from "@/components/MenuToggle";
import { Toggle } from "@/components/Toggle";
import { MobileButton } from "@/components/svg/MobileButton";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const changecolor = () => {
    setIsDark(!isDark);
  };

  const showNavbar = () => {
    setIsShow(!isShow);
  };
  const aboutBut = () => {
    window.scroll({
      top: 640,
      behavior: "smooth",
    });
  };
  const workBut = () => {
    window.scroll({
      top: 3000,
      behavior: "smooth",
    });
  };
  const testBut = () => {
    window.scroll({
      top: 1300,
      behavior: "smooth",
    });
  };
  const contactBut = () => {
    window.scroll({
      top: 5000,
      behavior: "smooth",
    });
  };
  const aboutButMen = () => {
    window.scroll({
      top: 1000,
      behavior: "smooth",
    });
  };
  const workButMen = () => {
    window.scroll({
      top: 4800,
      behavior: "smooth",
    });
  };
  const testButMen = () => {
    window.scroll({
      top: 2200,
      behavior: "smooth",
    });
  };
  const contactButMen = () => {
    window.scroll({
      top: 8000,
      behavior: "smooth",
    });
  };

  return (
    <div className="" data-theme={isDark ? "dark" : "light"}>
      <Toggle isCheck={isDark} handleCheck={changecolor} />

      <div className="">
        <Menu
          isDark={isDark}
          visible={showNavbar}
          isShow={isShow}
          aboutButMen={aboutButMen}
          workButMen={workButMen}
          testButMen={testButMen}
          contactButMen={contactButMen}
        />
        <Header
          isDark={isDark}
          showing={showNavbar}
          aboutBut={aboutBut}
          workBut={workBut}
          testBut={testBut}
          contactBut={contactBut}
        />
        <BodyOne />
        <BodyAbout />
        <BodySkills />
        <BodyExperience />
        <BodyWork />
        <BodyGetTouch />
        <Footer />
      </div>
    </div>
    // <div className="" data-theme={isDark ? "dark" : "light"}>
    //   <Toggle isCheck={isDark} handleCheck={changecolor} />
    //   {isShow ? (
    //     <div>
    //       <Header isDark={isDark} showing={showNavbar} />
    //       <BodyOne />
    //       <BodyAbout />
    //       <BodySkills />
    //       <BodyExperience />
    //       <BodyWork />
    //       <BodyGetTouch />
    //       <Footer />
    //     </div>
    //   ) : (
    //     <Menu isDark={isDark} visible={showNavbar} />
    //   )}
    // </div>
    // <div className="" data-theme={isDark ? "dark" : "light"}>
    //   <Toggle isCheck={isDark} handleCheck={changecolor} />
    //   {isShow ? (
    //     <div>
    //       <div className="flex justify-between">
    //         <Header isDark={isDark} />
    //         <button onClick={showNavbar}>
    //           <MobileButton />
    //         </button>
    //       </div>
    //       <BodyOne />
    //       <BodyAbout />
    //       <BodySkills />
    //       <BodyExperience />
    //       <BodyWork />
    //       <BodyGetTouch />
    //       <Footer />
    //     </div>
    //   ) : (
    //     <Menu visible={showNavbar} />
    //   )}
    // </div>
  );
}

////data-theme="dark"
