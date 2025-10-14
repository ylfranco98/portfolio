// import React, { useState, useEffect } from "react";
// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";
// import rightArrow from "../../img/rightArrow.svg";
// import generatePDF from "../utils/ResumeGenerator";

import Description from "./Description";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";

export const Main: React.FC = () => {
  //   const [text, setText] = useState<string>("");
  //   const [index, setIndex] = useState<number>(0);
  //   const toType =
  //     "I'm a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you'd like to learn more! I'm a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you'd like to learn more!";
  //   const typingSpeed = 10;

  //   useEffect(() => {
  //     if (index < toType.length) {
  //       const timeout = setTimeout(() => {
  //         setText((prev) => prev + toType.charAt(index));
  //         setIndex((prev) => prev + 1);
  //       }, typingSpeed);

  //       return () => clearTimeout(timeout);
  //     }
  //   }, [index, toType]);

  //   const scrollToSection = (sectionId: string) => {
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex xl:flex-row flex-col items-center justify-between mt-[50px] z-[1] pl-[5%] pr-[5%]">
      <Image
        className="zoom-in z-[1] xl:w-2/5 w-2/3 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.24)] cursor-pointer animate-zoomIn "
        src={"/hero.jpg"}
        alt={"Main photo"}
        width="3500"
        height="0"
        // shadow-xl
        // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      />
      <div className="xl:w-1/2 xl:mt-0 lg:mt-30 mt-20 flex flex-col items-center text-[color:var(--color-text)] z-[1]">
        <h1 className="2xl:text-6xl xl:text-4xl lg:text-6xl sm:text-4xl text-3xl font-extrabold mb-[33px] xl:w-auto w-full xl:text-left text-center">
          {/* font-commandp */}
          <span className="text-violet-900">Hi, I'm</span> Yoana
        </h1>
        <Description />
        <div className=" flex xl:justify-between justify-center 2xl:gap-15 ms:gap-5 gap-5 2xl:mt-5 w-full lg:px-15 xl:px-10 3xl:px-25 px-0">
          {/* xl:px-5 */}
          <a
            href="#"
            className="font-font flex gap-[20px] no-underline hover:text-violet-900 text-[color:var(--color-text)] rounded-[10px] 2xl:text-4xl xl:text-3xl lg:text-4xl sm:text-3xl text-2xl font-light  border-2 border-transparent bg-[length:0%] font-semibold transition-colors"
            // px-[26px] py-[17px]
            // onClick={generatePDF}
            role="button"
            tabIndex={0}
            // onKeyPress={(e) => {
            //   //   if (e.key === 'Enter' || e.key === ' ') generatePDF();
            // }}
          >
            My Resume
          </a>
          <a
            href="#contact"
            className=" font-font flex gap-[20px] no-underline text-violet-900 hover:text-white rounded-[10px] 2xl:text-4xl xl:text-3xl lg:text-4xl sm:text-3xl text-2xl font-light border-2 border-transparent bg-[length:0%] font-semibold transition-colors"
          >
            Let's Conect
            <CircleChevronRight className="size-9 floatingLeftRight" />
          </a>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-xl mask-radial bg-red-500 rounded-full" /> */}
      {/* <img
        src={"/mainphoto.jpg"}
        alt="Hero"
        className="z-[1] w-2/5 rounded-full shadow-[0_10.95px_2.6px_1.95px_rgba(0,0,0,0.15)] cursor-pointer animate-zoomIn animate-floatingUpDown"
        // onClick={() => scrollToSection("contact")}
      /> */}
      {/* <div className="absolute w-[50vw] h-[50vw] min-w-[350px] top-[-128px] left-[-10vw] rounded-[764px] bg-gradient-to-r from-[#1e0425] to-[#180425] blur-[100px] z-0" />
      <div className="absolute w-[70vw] h-[50vw] min-w-[250px] top-[246px] right-[-25vw] rounded-[764px] bg-[#290633] opacity-70 blur-[100px] z-0" /> */}
    </section>
  );
};
