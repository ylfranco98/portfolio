export type Project = {
  id: string;
  title: string;
  description: string;
  tech?: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageSrc?: string;
};

export type Skill = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  imageSrc: string;
};
