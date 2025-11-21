export type Project = {
  id: string;
  title: string;
  description: string;
  tech?: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageSrc?: string;
};

export type TimelineElement = {
  startDate: string;
  endDate: string;
  experiences: string[];
  role: string;
  organisation: string;
  imageSrc?: string;
};
