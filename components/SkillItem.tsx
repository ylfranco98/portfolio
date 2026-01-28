import { Skill } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SkillItem({ skill }: { skill: [number, Skill] }) {
  //   return (
  //     <div className="flex flex-col items-center justify-center">
  //       <div className="w-[70px] h-[70px] bg-gray-200 rounded-full flex items-center justify-center mb-2">
  //         <img
  //           src={skill[1].imageSrc}
  //           alt={skill[1].title}
  //           className="w-1/2 h-1/2"
  //         />
  //       </div>
  //       <h3 className="text-lg font-semibold">{skill[1].title}</h3>
  //       <p className="text-sm text-gray-500">{skill[1].level}</p>
  //     </div>
  //   );
  const [showSkillContent, setShowSkillContent] = useState(false);
  const [skillId, setSkillId] = useState("");
  const handleMouseEnter = (id: string) => {
    setTimeout(() => {
      setSkillId(id);
      setShowSkillContent(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setSkillId("");
      setShowSkillContent(false);
    }, 500);
  };

  const containerClasses = `bg-[rgba(35,35,35,0.6)] rounded-[100px] flex items-center justify-start transition-all duration-500 p-[32px] shadow-[1.95px_10.95px_2.6px_rgba(0,0,0,0.15)] xl:h-[150px] ml:h-[130px] sm:h-[120px] xs:h-[150px] h-[120px] ${
    showSkillContent
      ? "w-[300px] xl:w-[350px] ml:w-[330px] sm:w-[300px] xs:w-[350px]"
      : "w-[120px] xl:w-[150px] ml:w-[130px] sm:w-[120px] xs:w-[150px]"
  }`;

  return (
    <div key={skill[0]} className="flex flex-col items-center gap-[11px]">
      <div
        className={containerClasses}
        //     `${styles.skillImageContainer} ${
        //   showSkillContent && skillId === skill[0]
        //     ? styles.skillImageContainerOn
        //     : ""
        // }`

        onMouseEnter={() => handleMouseEnter(skill[0].toString())}
        onMouseLeave={handleMouseLeave}
      >
        {/* <img
          //   src={getImageUrl(skill[1].imageSrc)}
          alt={skill[1].title}
          className="rounded-[15px] w-[90px] min-w-[90px] object-contain"
        /> */}
        <Image
          className="rounded-[15px] xl:w-[90px] xl:min-w-[90px] ml:w-[70px] ml:min-w-[70px] sm:w-[60px] sm:min-w-[60px] xs:w-[90px] xs:min-w-[90px] w-[60px] min-w-[60px] object-contain"
          // shadow-[0_3px_8px_rgba(0,0,0,0.24)]
          src={`/skills/${skill[1].imageSrc}`}
          alt={"Skill"}
          width="100"
          height="0"
          // shadow-xl
          // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        />
        <div
          className={`skillContent xl:gap-4 sm:gap-2 gap-4 ${
            // transition-opacity duration-500
            showSkillContent ? "skillContentOn " : ""
          }`}
          //   {`${styles.skillContent} ${
          //     showSkillContent && skillId === skill[0]
          //       ? styles.skillContentOn
          //       : ""
          //   }`}
        >
          {/* <div className="flex flex-col items-start justify-evenly "> */}
          <div className="gap">
            <h3 className="text-violet-900 font-font 2xl:text-2xl ml:text-xl sm:text-lg xs:text-2xl text-lg">
              {skill[1].title}
            </h3>
            <h4 className="text-white/60 font-font 2xl:text-xl ml:text-lg sm:text-base xs:text-xl text-base">
              {skill[1].level}
            </h4>
          </div>
          <a
            href="#projects"
            className="text-white font-bold 2xl:text-xl ml:text-lg sm:text-base xs:text-xl text-base flex items-center group"
          >
            View projects
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ChevronRight className="ml-1 size-7" />
            </span>
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
