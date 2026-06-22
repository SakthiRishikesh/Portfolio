export type Certification = {
  title: string;
  issuer: string;
  date: string;
  driveUrl: string;
  category: string;
};

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    date: "2025",
    driveUrl: "https://drive.google.com/file/d/1vPT22sr2f0B4HapW95YQ6HMBFg4oS4Oe/view?usp=drive_link",
    category: "security",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026",
    driveUrl: "https://drive.google.com/file/d/1_8fyWSZjVs7Lut4wpcfMG3PerYQoKWBC/view?usp=drive_link",
    category: "security",
  },
  {
    title: "Agile Software Development",
    issuer: "IBM SkillsBuild",
    date: "2026",
    driveUrl: "https://drive.google.com/file/d/1SXJjWz0OWh0fbSmT674sqO4_aW7zRBe2/view?usp=drive_link",
    category: "development",
  },
  {
    title: "Cloud Computing",
    issuer: "Simplilearn",
    date: "2026",
    driveUrl: "https://drive.google.com/file/d/1ewSFyFaNx5iDNXKEVlJSKtUU-A0dhuLg/view?usp=drive_link",
    category: "cloud",
  },
  {
    title: "Introduction to Network Security",
    issuer: "Simplilearn",
    date: "2026",
    driveUrl: "https://drive.google.com/file/d/1-S7Js2sB56zb55nNoDwcgx_f32vfSdtl/view?usp=drive_link",
    category: "security",
  },
  {
    title: "Prompt Engineering",
    issuer: "IBM",
    date: "2025",
    driveUrl: "https://drive.google.com/file/d/1F2vR-6pxoM7huUU-zxezG5peLv-e9vHP/view?usp=drive_link",
    category: "AI",
  },
];
