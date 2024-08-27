import { HeadName } from "./HeadName";
import { HeadText } from "./HeadText";
import { Cypress } from "./svg/Cypress";
import { ExpressJs } from "./svg/ExpressJs";
import { Figma } from "./svg/Figma";
import { Git } from "./svg/Git";
import { IconSvg } from "./svg/IconSvg";
import { Mongo } from "./svg/Mongo";
import { NestJs } from "./svg/NestJs";
import { NextJs } from "./svg/NextJs";
import { Nodejs } from "./svg/Nodejs";
import { React } from "./svg/React";
import { Sass } from "./svg/Sass";
import { Socket } from "./svg/Socket";
import { Storybook } from "./svg/Storybook";
import { Tailwind } from "./svg/Tailwind";
import { Typescript } from "./svg/Typescript";

export const BodySkills = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] bg-[var(--bg-one)] flex justify-center items-center">
      <div className="container md:px-[32px] flex flex-col gap-[24px] md:gap-[48px]">
        <div className="flex flex-col items-center gap-[16px] ">
          <HeadName text="Skills" />
          <HeadText text="The skills, tools and technologies I am really good at:" />
        </div>
        <div className="grid grid-cols-3 grid-rows-6 md:grid  md:grid-cols-8 md:grid-rows-2 gap-[48px] md:justify-between">
          <IconSvg text="Javascript" />
          <Typescript text="Typescript" />
          <React text="React" />
          <NextJs text="Next.js" />
          <Nodejs text="Node.js" />
          <ExpressJs text="Expres.js" />
          <NestJs text="Nest.js" />
          <Socket text="Socket.io" />
          <div className="flex flex-col gap-[8px] items-center">
            <img src="./zaan.svg" alt="" />
            <p className="text-[18px] font-[400] leading-[28px] text-[var(--tom-color)]">
              PostgreSQl
            </p>
          </div>
          <Mongo text="MongoDb" />
          <Sass text="Sass/Scss" />
          <Tailwind text="Tailwindcss" />
          <Figma text="Figma" />
          <Cypress text="Cypress" />
          <Storybook text="Storybook" />
          <Git text="Git" />
        </div>
      </div>
    </div>
  );
};
