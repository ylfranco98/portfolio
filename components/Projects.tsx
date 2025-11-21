"use client";

import React, { use, useRef } from "react";
import Link from "next/link";
import { Title } from "./Title";
import { motion, useInView } from "framer-motion";
import { Project } from "@/types/index";
import ProjectCard from "./ProjectCard";

export interface ProjectsProps {
  projects?: Project[];
}

/**
 * Projects section component.
 * Replace defaultProjects with your real data or pass `projects` prop.
 */
const defaultProjects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    description:
      "A fast, accessible portfolio built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "/",
    repoUrl: "https://github.com/yourname/portfolio",
  },
  {
    id: "p2",
    title: "Task Manager",
    description:
      "A simple task management app with local persistence and filters.",
    tech: ["React", "Context API", "LocalStorage"],
    repoUrl: "https://github.com/yourname/task-manager",
  },
  {
    id: "p3",
    title: "Portfolio Website",
    description:
      "A fast, accessible portfolio built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "/",
    repoUrl: "https://github.com/yourname/portfolio",
  },
  {
    id: "p4",
    title: "Portfolio Website",
    description:
      "A fast, accessible portfolio built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "/",
    repoUrl: "https://github.com/yourname/portfolio",
  },
  {
    id: "p5",
    title: "Task Manager",
    description:
      "A simple task management app with local persistence and filters.",
    tech: ["React", "Context API", "LocalStorage"],
    repoUrl: "https://github.com/yourname/task-manager",
  },
  {
    id: "p6",
    title: "Portfolio Website",
    description:
      "A fast, accessible portfolio built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "/",
    repoUrl: "https://github.com/yourname/portfolio",
  },
];

const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="section relative w-full my-30 flex flex-col items-center justify-center z-[1] lg:px-[5%]"
    >
      <Title toType={"Projects"} />
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[2vw] gap-y-20 w-full my-10"
      >
        {/**/}
        {projects.map((p, id) => {
          return (
            <motion.div
              key={id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="w-full"
            >
              <ProjectCard key={id} project={p} />
            </motion.div>
          );
        })}
      </div>
      {/* <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.description}</p>

              {p.tech && p.tech.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs bg-gray-100 rounded-full px-2 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex gap-3">
                {p.demoUrl && (
                  <Link href={p.demoUrl}>
                    <a className="text-sm text-white bg-blue-600 px-3 py-1 rounded">
                      Live
                    </a>
                  </Link>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 border px-3 py-1 rounded"
                  >
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
