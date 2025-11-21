import React from "react";

import { Timeline } from "@/components/ui/timeline";
import { Code } from "lucide-react";
import { Title } from "./Title";

const history = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: "history/google.png",
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 11", "Designed the control panel"],
    imageSrc: "history/microsoft.png",
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: "history/netflix.png",
  },
  {
    role: "Bachelor of Science in Computer Science",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: "history/netflix.png",
  },
  {
    role: "Computer Science Specialist",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: "history/netflix.png",
  },
];

export interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}
export default function Experience() {
  return (
    <section
      className={
        "section relative w-full my-30 flex flex-col items-center justify-center z-[1] lg:px-[5%]"
      }
      id="experience"
    >
      <Title toType={"Experience"} />
      {/* <ToggleTabs tabs={tabs} setTab={setTab} /> */}
      <div className={"flex flex-row justify-evenly mt-[30px]"}>
        <Timeline history={history} />
      </div>
    </section>
  );
}
