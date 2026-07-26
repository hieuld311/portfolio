export type CareerProject = {
  id: string;
  title: string;
  highlights: string[];
};

export type CareerTimelineRecord = {
  id: string;
  period: string;
  label: string;
  projects: CareerProject[];
};

export const careerOffices = [
  {
    id: "fpt-software",
    name: "FPT Software",
    location: "Hanoi, Vietnam · On-site",
    period: "Mar 2026 – Present",
    role: "Android Developer · Full-time",
    timeline: [
      {
        id: "current-ivi-workstreams",
        period: "Jun 2026 – Present",
        label: "Android Automotive IVI Applications (Kotlin/Java,Jetpack Compose, Android 12)",
        projects: [
          {
            id: "navigation-plugin",
            title: "Navigation Plugin",
            highlights: [
              "Developed a navigation plugin that lets third-party AI assistants work with a Mapbox-powered and TripAdvisor navigation application.",
            ],
          },
          {
            id: "ivi-video-sharing",
            title: "IVI Video Sharing",
            highlights: [
              "Implemented video player for 4 screens with different UI.",
              "Developed multi-display video sharing from Passenger Seat Screen to Rear Seat Screen.",
            ],
          },
          {
            id: "widget-p2p-data-display",
            title: "Widget P2P Data Display",
            highlights: [
              "Developed a peer-to-peer widget that presents shared data clearly to users.",
            ],
          },
        ],
      },
      {
        id: "car-settings",
        period: "Mar – Apr 2026",
        label: "Android Automotive Platform (Java + XML, Android 15)",
        projects: [
          {
            id: "car-settings-maintenance",
            title: "Car Settings",
            highlights: [
              "Fixed UI, business logic, framework, and VHAL communication issues in Android Automotive Car Settings using Java and XML.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fpt-software-academy",
    name: "FPT Software Academy",
    location: "Hanoi Capital Region, Vietnam · On-site",
    period: "May 2024 – Mar 2026",
    role: "Internship",
    timeline: [
      {
        id: "fresher-android-developer",
        period: "Nov 2025 – Mar 2026",
        label: "Android Automotive Foundation",
        projects: [
          {
            id: "android-developer-foundation",
            title: "Fresher Android Developer",
            highlights: [
              "Studied Java, Kotlin, and Android fundamentals.",
              "Researched AOSP architecture, including HAL, Framework, and System Services.",
              "Explored Android Automotive OS, the in-vehicle app model, and Car App Library.",
            ],
          },
        ],
      },
      {
        id: "web-development-intern",
        period: "May 2024 – Aug 2024",
        label: "Full-stack Web Development",
        projects: [
          {
            id: "web-application-development",
            title: "Web Development Intern",
            highlights: [
              "Developed a web application in a five-person team using Spring Boot and RESTful APIs for the backend, with React for the frontend.",
            ],
          },
        ],
      },
    ],
  },
];
