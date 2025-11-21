import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { ChevronRight, Code, Eye } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative w-full h-full flex flex-col justify-center  ">
      <div className="group relative cursor-pointer flex justify-center items-center transition-all duration-[1000ms] ">
        <div className="w-full ">
          <Image
            src={project.imageSrc ?? "/placeholder.png"}
            alt={project.title ?? "project image"}
            width={530}
            height={380}
            className="w-full h-auto block rounded-[15px] object-cover"
          />
        </div>

        <div className="overlay absolute inset-0 bg-[#2b1c52] opacity-0 transition-opacity duration-300 group-hover:opacity-70 rounded-[15px]" />

        <div className="text absolute inset-0 hidden group-hover:flex text-white text-[24px] gap-[30px] items-center justify-center">
          {project.demoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-[15px] border-4 border-white rounded-full w-[90px] h-[90px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Eye className="size-10" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-[15px] border-4 border-white rounded-full w-[90px] h-[90px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Code className="size-10" />
            </a>
          )}
        </div>

        {/* blur image on hover */}
        <style jsx>{`
          .group:hover img {
            filter: blur(5px);
          }
        `}</style>
      </div>

      <div className="flex flex-col flex-grow justify-start text-[20px] mt-[20px] mx-[10px]">
        {/* nameContent flex flex-col items-start justify-evenly  */}
        <h3 className="project-h3">{project.title}</h3>
        <p className="project-p">{project.description}</p>
        <div className="mt-auto pt-4">
          <Link
            href="#projects"
            className="no-underline project-link flex items-center gap-[10px] group"
          >
            <span>Learn More</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
