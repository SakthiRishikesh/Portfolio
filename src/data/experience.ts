export type Experience = {
  role: string;
  organization: string;
  type: string;
  duration: string;
  description: string;
  contributions: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: "Project Technical Member — Web Scraper",
    organization: "Dev/Track Technical Club",
    type: "Project Cycle 1",
    duration: "2024",
    description:
      "Contributed to building automated web scraping solutions for data collection and analysis as part of the Dev/Track technical club's first project cycle.",
    contributions: [
      "Designed and implemented web scraping scripts to extract structured data from target websites",
      "Handled data parsing, cleaning, and transformation pipelines for downstream analysis",
      "Collaborated with team members on architecture decisions and code reviews",
      "Documented scraping methodologies and ensured compliance with ethical guidelines",
    ],
    technologies: ["Python", "BeautifulSoup", "Pandas", "Git"],
  },
  {
    role: "Project Technical Member — UI/UX Designer",
    organization: "Dev/Track Technical Club",
    type: "Project Cycle 2",
    duration: "2025",
    description:
      "Led the UI/UX design effort for the club's second project cycle, creating intuitive interfaces and cohesive visual experiences.",
    contributions: [
      "Created wireframes, mockups, and interactive prototypes for the project interface",
      "Conducted user research and usability testing to validate design decisions",
      "Developed a consistent design system with reusable components and style guidelines",
      "Collaborated closely with developers to ensure accurate design implementation",
    ],
    technologies: ["Figma", "Adobe XD", "CSS", "React", "Design Systems"],
  },
];
