import { CodeXml, Database, Palette } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Title } from "./Title";

const About: React.FC = () => {
  return (
    // <section className="relative flex items-center justify-between mt-[50px] z-[1] pl-[5%] pr-[5%]">
    //   {/* Add your content here */}
    //   Test
    // </section>
    <section
      id="about"
      className="relative bg-[rgba(35,35,35,0.6)] rounded-[15px] ms:p-[73px] py-[73px] mt-[129px] z-[1] lg:mx-[10%] shadow-[1.95px_10.95px_2.6px_rgba(0,0,0,0.15)]"
    >
      <Title toType="What do I do?" />
      {/* <h2 className="w-full text-white text-5xl uppercase text-center font-extrabold mb-5">
        What do I do?
      </h2> */}
      <div className="flex xl:flex-row flex-col items-center">
        <Image
          className="w-[35%] rounded-[50px] mr-[50px] xl:flex hidden"
          src="/aboutImage.png"
          alt="About Image"
          width={500}
          height={500}
        />

        <ul className="text-[color:var(--color-text)] flex flex-col gap-5 w-full">
          <li className="about-li">
            {/* <Image
              className="w-[35%] rounded-[50px] mr-[50px]"
              src="/aboutImage.png"
              alt="About Image"
              width={100}
              height={100}
            /> */}

            <CodeXml className="md:size-25 size-15" />
            <div className="about-text-div">
              <h3 className="about-h3">Frontend Developer</h3>
              <p className="about-p">
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          <li className="about-li">
            {/* <img
              src={getImageUrl("about/backend.svg")}
              alt="Server icon"
              className="mr-[50px]"
            /> */}
            <Database className="md:size-25 size-15" />
            <div className="about-text-div">
              <h3 className="about-h3">Backend Developer</h3>
              <p className="about-p">
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>

          <li className="about-li">
            {/* <img
              src={getImageUrl("about/database.svg")}
              alt="UI icon"
              className="mr-[50px]"
            /> */}
            <Palette className="md:size-25 size-15" />
            <div className="about-text-div">
              <h3 className="about-h3">UI Designer</h3>
              <p className="about-p">
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
