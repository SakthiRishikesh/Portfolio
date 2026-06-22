export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Security Operations",
    skills: [
      "Log analysis",
      "Incident triage",
      "Alert investigation",
      "Threat intelligence",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Linux", "Nmap", "Wireshark", "Git", "Splunk"],
  },
  {
    category: "Professional Strengths",
    skills: [
     "Threat Investigation",
    "Security-First Mindset",
    "Analytical Thinking",
    "Continuous Learning",
    "Problem Solving",
    "Attention to Detail",
    "Clear Documentation",
    "Effective Communication",
    ],
  },
];
