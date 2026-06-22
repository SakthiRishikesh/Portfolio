export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "CyberSecurity Projects",
    description:
      "A curated collection of my cybersecurity projects, covering real-world security concepts, tools, and implementations. This repo showcases hands-on work in threat analysis, secure coding, vulnerability detection, and defensive security practices.",
    stack: ["Python","Machine Learning Models", "Streamlit"],
    repoUrl: "https://github.com/SakthiRishikesh/Cybersec_prjcts",
  },
  {
    title: "InternShield",
    description:
      "AI-Powered Internship Verification & Career Accelerator. Detect scams in offer letters using Gemini optimize resumes for ATS compatibility, and analyze real-time community signals from Reddit & Glassdoor.",
    stack: ["Next.js 15","Tailwind CSS & Framer MOtion", "MongoDB" ,"Gemini", "Reddit API", "Glassdoor API"],
    repoUrl:
      "https://github.com/SakthiRishikesh/InternShield",
  },
  {
    title: "DocVerify",
    description:
      "A decentralized app where users connect a crypto wallet (MetaMask) to register and verify documents on the blockchain. Files are hashed client-side (SHA-256), and only the hash is stored on-chain via a smart contract — ensuring tamper-proof authenticity, issuer identity, and timestamp without exposing the actual document.",
    stack: ["Scaffold-Eth", "NextJS", "SHA-256 Hash", "MetaMask", "Solidity Smart Contract", "Yarn"],
    repoUrl: "https://github.com/SakthiRishikesh/DocVerify",
  },
  {
    title: "Text Encryption System",
    description:
      "This project is a web-based application that performs secure text encryption and decryption using three widely used cryptographic algorithms: AES, DES, and RSA.",
    stack: ["HTML", "CSS", "Javascript", "Node.js", "REST APIs"],
    repoUrl:
      "https://github.com/SakthiRishikesh/text-encryption-system",
  }
  
];
