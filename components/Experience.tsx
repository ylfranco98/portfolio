import React from "react";

import { Timeline } from "@/components/ui/timeline";
import { Code } from "lucide-react";
import { Title } from "./Title";

const history = [
  // {
  //   role: "Software Engineer",
  //   organisation: "Google",
  //   startDate: "Sept, 2022",
  //   endDate: "Present",
  //   experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
  //   imageSrc: "history/google.png",
  // },
  // {
  //   role: "UI Designer",
  //   organisation: "Mirosoft",
  //   startDate: "Aug, 2021",
  //   endDate: "Aug, 2022",
  //   experiences: ["Worked on Windows 11", "Designed the control panel"],
  //   imageSrc: "history/microsoft.png",
  // },
  // {
  //   role: "SWE Intern",
  //   organisation: "Netflix",
  //   startDate: "Apr, 2020",
  //   endDate: "Jun, 2020",
  //   experiences: ["Worked on component library", "Helped create UI components"],
  //   imageSrc: "history/netflix.png",
  // },
  {
    role: "Quality Assurance Intern",
    organisation: "CYBERTOUCH LCC",
    startDate: "Sep, 2022",
    endDate: "Dec, 2023",
    experiences: [
      "Executed comprehensive test for web and mobile applications, identifying bugs and ensuring functionality across various devices and browsers.",
      "Collaborated with developers and product managers to understand requirements and provide feedback on usability and design improvements.",
      "Participated in regression testing to verify that new code changes did not adversely affect existing functionalities.",
      "Reviewd and updated documentation and test reports to reflect changes in application features and functionalities.",
    ],
    category: "work",
  },
  {
    role: "Computer Science Specialist",
    organisation: "Desoft",
    startDate: "Jan, 2022",
    endDate: "Feb, 2024",
    experiences: [
      "Developed backend microservices using Spring Boot framework to handle business logic and data processing.",
      "Interacted with PostgreSQL databases to manage and retrieve data efficiently.",
      "Implemented RESTful APIs to facilitate seamless communication between frontend and backend systems",
      "Created user-friendly web interfaces using React.js, enhancing user experience",
      "Troubleshot and debugged issues across the full stack to ensure optimal performance and reliability.",
    ],
    category: "work",
  },
  {
    role: "Bachelor of Science in Computer Science",
    organisation: "Marta Abreu, Las Villas Central University",
    startDate: "Sep, 2016",
    endDate: "Dec, 2021",
    experiences: [
      "Gained a solid foundation in algorithms, data structures, and object-oriented programming.",
      "Completed academic projects involving database design, optimization, and query performance using SQL.",
      "Engaged in the design and analysis of algorithms, focusing on efficiency, correctness, and computational limits.",
      "Explored mathematical logic and formal reasoning to strengthen analytical and deductive skills.",
      "Investigated optimization models for decision-making and resource allocation problems.",
      "Applied probability theory and statistical methods to model uncertainty and analyze data.",
      "Introduced to artificial intelligence concepts, including search strategies, knowledge representation, and machine learning foundations.",
      "Collaborated on team projects to develop software applications, enhancing teamwork and communication skills.",
    ],
    category: "education",
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
        "section relative w-full my-10 flex flex-col items-center justify-center z-[1] lg:px-[5%]"
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
