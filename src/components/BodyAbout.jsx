import { HeadName } from "./HeadName";
import { HeadNameBold } from "./HeadNameBold";
import { TextSection } from "./TextSection";

export const BodyAbout = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px]  flex justify-center items-center relative z-10">
      <div className="md:container md:px-[32px] flex flex-col gap-[24px] md:gap-[48px]">
        <div className="flex justify-center items-center">
          <HeadName text="About me" />
        </div>
        <div className="flex justify-center md:hidden">
          <img src="./mobilesecond.png" alt="" />
        </div>
        <div className=" flex gap-[48px] justify-center md:justify-between">
          <div className="md:w-[50%] hidden md:flex p-5 ">
            <img
              src="./working.avif"
              alt=""
              className="rounded-lg w-[600px] h-[500px]"
            />
          </div>
          <div className="md:w-[50%] flex flex-col gap-[24px]">
            <HeadNameBold text="Curious about me? Here you have it:" />
            <TextSection text="I’m a former mathematician and economic modeler with an MBA in project management, now embarking on a journey as a software developer. Passionate about React.js and Node.js, I’m blending my analytical skills and project management expertise with my growing technical knowledge to craft efficient, user-centered digital solutions." />
            <TextSection text="My background in problem-solving and strategic planning shapes my approach to development, allowing me to think critically about both the technical and business aspects of a product. I’m currently building skills with Next.js, TypeScript, and Supabase while embracing the challenges of my career shift." />
            <TextSection text="In my downtime, I enjoy exploring tech trends, learning from the startup ecosystem, and sharing insights on GitHub and Twitter. Follow my journey as I combine my past experiences with a fresh focus on software development." />
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
