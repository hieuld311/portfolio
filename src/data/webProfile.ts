import type { ProfileData } from "../types/profile";

export const webProfile: ProfileData = {
  key: "web",
  displayTitle: "Fullstack Developer",
  role: "Fresher Fullstack Developer",

  contact: {
    email: "hieuld311@gmail.com",
    phone: "0947495583",
    address: "Mỹ Đình, Nam Từ Liêm, Hà Nội",
    github: "https://github.com/hieuld311",
  },

  summary:
    "Seeking a Fullstack Developer position to contribute to innovative projects while learning from experienced engineers. I aim to grow into a proficient fullstack engineer specializing in scalable web applications within 2–3 years.",

  skills: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      items: ["Java (Spring Boot)", "C# (.NET)", "ASP.NET Core"],
    },
    {
      title: "Databases",
      items: ["MySQL", "SQL Server"],
    },
    {
      title: "Tools & Technologies",
      items: [
        "Git",
        "Spring Security",
        "JWT",
        "RESTful API",
        "SignalR",
        "WebSocket",
      ],
    },
  ],

  experience: [
    {
      title: "Software Engineering Intern",
      company: "FPT Software",
      period: "Apr 2024 – Sep 2024",
      location: "Hanoi, Vietnam",
      description: [
        "Worked on Interview Management System (IMS) using Java Spring Boot and React",
        "Implemented complete CRUD functionality for interview scheduling with form validation",
        "Developed RESTful APIs with proper error handling and Google Drive integration for CV uploads",
        "Built automated email notification system for interview reminders",
        "Implemented JWT authentication and role-based authorization",
      ],
    },
  ],

  projects: [
    {
      name: "RFT – Vehicle Rental Platform",
      github: "https://github.com/Ha-Xuan-Hau/SU25-SE490_G78-RFT",
      techStack: [
        "Next.js 15",
        "TypeScript",
        "Spring Boot 3",
        "MySQL",
        "Ant Design",
        "VNPay",
        "WebSocket",
      ],
      highlights: [
        "Developed the entire frontend with 40+ reusable React components",
        "Implemented booking management with race condition handling and VNPay integration",
        "Built admin dashboard with real-time statistics, reporting, and user management",
      ],
    },
    {
      name: "FAP Clone – Academic Management System",
      github: "https://github.com/Ha-Xuan-Hau/FAPCL",
      techStack: [
        "C# (.NET 8)",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
      ],
      highlights: [
        "Implemented automated exam scheduling algorithm with conflict detection",
        "Developed timetable generation engine with automatic conflict resolution",
        "Built real-time schedule synchronization using SignalR",
      ],
    },
    {
      name: "MenuQ – Restaurant Management System",
      github: "https://github.com/kle12345A/MenuQV2",
      techStack: [
        "C# (.NET 8)",
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "SignalR",
        "VNPay",
      ],
      highlights: [
        "Developed QR code-based menu ordering system",
        "Integrated VNPay payment gateway with transaction verification",
        "Built employee workflow management with real-time order status tracking",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Information Technology",
    school: "FPT University",
    period: "2021 – 2025",
    location: "Hanoi, Vietnam",
    details: "Major: Software Engineering | GPA: 2.84 / 4",
  },

  certifications: [
    {
      name: "User Experience Research and Design",
      issuer: "University of Michigan (Coursera)",
      date: "Apr 2025",
      link: "https://coursera.org/share/adc52ebf1f2f71c092e74eb2e7424776",
    },
    {
      name: "Project Management Principles and Practices",
      issuer: "University of California, Irvine (Coursera)",
      date: "Nov 2024",
      link: "https://coursera.org/share/7a00ea3b941fefb0cef3fd1ec3d66afa",
    },
    {
      name: "Academic English: Writing",
      issuer: "University of California, Irvine (Coursera)",
      date: "Aug 2024",
      link: "https://coursera.org/share/7386e45acec52abd488b6cc9b8307e78",
    },
    {
      name: "CertNexus Certified Ethical Emerging Technologist",
      issuer: "CertNexus (Coursera)",
      date: "Apr 2024",
      link: "https://coursera.org/share/e14b793e6cdd4e085f37ae53ec153733",
    },
  ],
};
