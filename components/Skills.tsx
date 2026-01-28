"use client";

import React, { use, useEffect, useRef, useState } from "react";
import { Title } from "./Title";
import { motion, useInView } from "framer-motion";
import { Skill } from "@/types";
import SkillItem from "./SkillItem";

const skills: Skill[] = [
  {
    title: "Java",
    level: "Advanced",
    imageSrc: "java.svg",
  },
  {
    title: "Javascript",
    level: "Intermediate",
    imageSrc: "javascript.svg",
  },
  {
    title: "Python",
    level: "Beginner",
    imageSrc: "python.svg",
  },
  {
    title: "HTML",
    level: "Intermediate",
    imageSrc: "html.svg",
  },
  {
    title: "CSS",
    level: "Intermediate",
    imageSrc: "css.svg",
  },
  {
    title: "SQL",
    level: "Intermediate",
    imageSrc: "sql.svg",
  },
  {
    title: "Spring Boot",
    level: "Advanced",
    imageSrc: "springboot.svg",
  },
  {
    title: "React",
    level: "Intermediate",
    imageSrc: "react.svg",
  },
  {
    title: "PostgreSQL",
    level: "Intermediate",
    imageSrc: "postgresql.svg",
  },
  {
    title: "MySQL",
    level: "Intermediate",
    imageSrc: "mysql.svg",
  },
  {
    title: "SQLite",
    level: "Beginner",
    imageSrc: "sqlite.svg",
  },
  {
    title: "Git",
    level: "Advanced",
    imageSrc: "git.svg",
  },
  {
    title: "GitHub",
    level: "Advanced",
    imageSrc: "github.svg",
  },
];

export const convertObjectToArrayOfObjects = (obj: Skill[], index: number) => {
  const entries = Object.entries(obj).map(([key, value]) => [
    Number(key),
    value,
  ]) as [number, Skill][];
  const result = [];

  for (let i = 0; i < entries.length; i += index) {
    const group = entries.slice(i, i + index);

    // const groupObj = Object.fromEntries(group);
    result.push(group);
  }

  return result;
};

export interface SkillsProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}
export default function Skills() {
  const [elementsPerGroup, setElementsPerGroup] = useState(4);
  // Determine the number of elements per group based on device width

  useEffect(() => {
    const updateElementsPerGroup = () => {
      if (window.innerWidth <= 640) {
        setElementsPerGroup(1); // For devices with max width of 660px
      } else if (window.innerWidth <= 800) {
        setElementsPerGroup(2); // For devices with max width of 1023px
      } else if (window.innerWidth <= 1023) {
        setElementsPerGroup(3); // For devices with max width of 1279px
      } else if (window.innerWidth <= 1279) {
        setElementsPerGroup(4); // Default to 3 elements per group
      } else {
        setElementsPerGroup(5);
      }
    };

    // Update the elementsPerGroup on load and resize
    updateElementsPerGroup();
    window.addEventListener("resize", updateElementsPerGroup);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateElementsPerGroup);
    };
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section
      className={
        "section relative w-full my-10 flex flex-col items-center justify-center z-[1] lg:px-[5%]"
      }
      id="skills"
    >
      <Title toType={"Skills"} />
      {/* <ToggleTabs tabs={tabs} setTab={setTab} /> */}
      <div className="w-full flex flex-row justify-evenly my-20 lg:gap-8 gap-6 md:flex-row flex-col items-center ">
        <div ref={ref} className=" block w-full">
          {convertObjectToArrayOfObjects(skills, elementsPerGroup).map(
            (arr: [number, Skill][], i: number) => {
              return (
                <div
                  key={i}
                  className="grid gap-[20px] mb-[30px]"
                  style={{
                    gridTemplateColumns: `repeat(${elementsPerGroup}, 1fr)`,
                  }}
                >
                  {arr.map((skill: [number, Skill]) => {
                    return (
                      <motion.div
                        key={skill[0]}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.2, delay: skill[0] * 0.2 }}
                      >
                        <SkillItem skill={skill} key={skill[0]} />{" "}
                      </motion.div>
                    );
                  })}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
