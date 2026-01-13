import type { ProfileData } from "../types/profile";

export const androidProfile: ProfileData = {
  key: "android",
  displayTitle: "Android Developer",
  role: "Fresher Android Developer",

  contact: {
    email: "hieuld311@gmail.com",
    phone: "0947495583",
    address: "Mỹ Đình, Nam Từ Liêm, Hà Nội",
    github: "https://github.com/hieuld311",
  },

  summary:
    "Seeking an Android Developer role to apply and deepen my understanding of clean architecture and best practices while building scalable, maintainable, and user-focused mobile applications. I aim to grow into a specialized Mobile Developer within the next 2–3 years.",

  skills: [
    {
      title: "Programming Languages",
      items: ["Java", "Kotlin", "C#", "C/C++", "JavaScript"],
    },
    {
      title: "Android",
      items: ["MVVM", "Dagger Hilt", "Room", "Retrofit"],
    },
    {
      title: "Databases & Backend Services",
      items: ["Firebase Auth", "Firestore", "FCM", "SQLite"],
    },
    {
      title: "Tools",
      items: ["Git/GitHub", "Android Studio", "Visual Studio Code", "Postman"],
    },
  ],

  projects: [
    {
      name: "Sparkler – Android Chat Application",
      github: "https://github.com/hieuld311/sparkler",
      techStack: [
        "Java",
        "Firebase Auth",
        "Firestore",
        "Cloud Storage",
        "FCM",
        "Dagger Hilt",
        "Room",
        "Retrofit",
        "MVVM",
      ],
      highlights: [
        "Built a full-featured real-time chat application with user authentication and multimedia messaging",
        "Implemented friend management system with profile customization and camera/gallery integration",
        "Developed clean MVVM architecture with dependency injection, local caching, and dark mode UI",
      ],
    },
    {
      name: "Solitaire Collection – Android Game",
      github: "https://github.com/hieuld311/solitaire_clone",
      techStack: ["Java", "Material Design", "ViewBinding"],
      highlights: [
        "Created a solitaire game collection with 15+ variants including Klondike, Spider, and Freecell",
        "Implemented advanced card mechanics such as drag-and-drop, auto-complete, hint system, and undo/redo",
        "Built a custom game engine using OOP principles with state persistence and statistics tracking",
      ],
    },
    {
      name: "MyReader – Android EPUB Reader",
      github: "https://github.com/hieuld311/myreader",
      techStack: ["Java", "WebView", "Picasso", "AndroidX"],
      highlights: [
        "Developed a native EPUB reader with WebView-based rendering",
        "Implemented text selection and persistent quote highlighting",
        "Handled Android storage permissions across API levels 21–36",
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
    {
      name: "Software Development Lifecycle",
      issuer: "University of Minnesota (Coursera)",
      date: "Dec 2023",
      link: "https://coursera.org/share/80e3ceda83356a35871f34f986acbe14",
    },
    {
      name: "Web Design for Everybody: Basics of Web Development & Coding",
      issuer: "University of Michigan (Coursera)",
      date: "Aug 2023",
      link: "https://coursera.org/share/4ba451e7e3adc4eb651648ae2c3faca8",
    },
  ],
};
