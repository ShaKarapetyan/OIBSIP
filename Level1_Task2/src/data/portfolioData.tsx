import type { PortfolioDataType } from "../types/index.tsx";

export const portfolioData: PortfolioDataType = {
  hero: {
    greeting: "Hello, It's Me",
    name: "John Doe",
    role: "Frontend Developer Intern",
    bio: "I build responsive, modern web applications with a focus on clean code and exceptional user experiences.",
    avatarUrl: "https://via.placeholder.com/150",
    ctaLeft: "View Work",
    ctaRight: "Contact Me"
  },
  about: {
    bio: "I am a passionate developer dedicated to creating intuitive digital solutions.",
    education: [
      { degree: "Web Development Internship", institution: "Oasis Infobyte", year: "2026" }
    ],
    skills: [
      { name: "HTML5", level: 95 },
      { name: "React.js", level: 80 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Sample Project",
      description: "A production-ready project.",
      category: "React",
      tags: ["React", "Chakra UI"],
      image: "https://via.placeholder.com/300x200",
      codeLink: "#",
      liveLink: "#"
    }
  ],
  contact: {
    phone: "+374 xx xxxxxx",
    email: "developer@email.com",
    location: "Yerevan, Armenia",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};