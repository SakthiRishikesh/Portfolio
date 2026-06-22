export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  highlights: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    institution: "Reva University",
    location: "Bengaluru, India",
    duration: "2023 – 2027",
    highlights: [
      "Specialized in cybersecurity and network security concepts",
      "Active member of Dev/Track technical club",
      "Completed hands-on projects in secure system design and threat analysis",
      "Participated in hackathons and cybersecurity CTF challenges",
    ],
  },
];
