import { HeadName } from "./HeadName";
import { HeadNameBold } from "./HeadNameBold";
import { TextSection } from "./TextSection";

export const BodyAbout = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] bg-[var(--bg-two)] flex justify-center items-center">
      <div className="md:container md:px-[32px] flex flex-col gap-[24px] md:gap-[48px]">
        <div className="flex justify-center items-center">
          <HeadName text="About me" />
        </div>
        <div className="flex justify-center md:hidden">
          <img src="./mobilesecond.png" alt="" />
        </div>
        <div className=" flex gap-[48px] justify-center md:justify-between">
          <div className="md:w-[50%] hidden md:flex">
            <img src="./Picsecond.png" alt="" />
          </div>
          <div className="md:w-[50%] flex flex-col gap-[24px]">
            <HeadNameBold text="Curious about me? Here you have it:" />
            <TextSection text="I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code." />
            <TextSection text="Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more." />
            <TextSection text="With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub." />
            <TextSection text="Finally, some quick bits about me." />
            <div className="flex gap-[10px] ">
              <ul className="flex flex-col gap-[10px] list-disc ml-[25px]">
                <li>
                  <TextSection text="B.E. in Computer Engineering" />
                </li>
                <li>
                  <TextSection text="Full time freelancer" />
                </li>
              </ul>
              <ul className="list-disc ml-[25px] md:ml-[105px]">
                <li>
                  <TextSection text="Avid learner" />
                </li>
              </ul>
            </div>
            <TextSection text="One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉" />
          </div>
        </div>
      </div>
    </div>
  );
};
