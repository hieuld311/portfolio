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

export type CareerOffice = {
  id: string;
  name: string;
  location: string;
  period: string;
  role: string;
  timeline: CareerTimelineRecord[];
};

export const careerOffices: CareerOffice[] = [
  {
    id: "fpt-software",
    name: "FPT Software",
    location: "Hanoi, Vietnam",
    period: "Mar 2026 – Present",
    role: "Developer",
    timeline: [
      {
        id: "automotive-towing-app",
        period: "Sep 2026 – Present",
        label: "Android Automotive (Kotlin/Java, Jetpack Compose, Android 15)",
        projects: [
          {
            id: "towing-app",
            title: "Automotive Towing App",
            highlights: [
              "I coded, tested, and wrote the documentation for each feature, following the team's development strategy.",
            ],
          },
        ],
      },
      {
        id: "current-ivi-workstreams",
        period: "Jun – Sep 2026",
        label: "Android Automotive (Kotlin/Java, Jetpack Compose, Android 12)",
        projects: [
          {
            id: "navigation-plugin",
            title: "Navigation Plugin",
            highlights: [
              "I designed and built a navigation plugin with a documented API, letting third-party AI assistants search, set routes, and get turn-by-turn updates from a Mapbox-powered and TripAdvisor navigation app.",
              "I covered the full flow end to end: place search, picking a suggestion, setting a route, driving home, and a demo/simulation mode, each with clear success or error results sent back to the assistant.",
            ],
          },
          {
            id: "video-app",
            title: "Video App",
            highlights: [
              "I built a video app for the car's four screens (driver console, front passenger, two rear seats), each installable on its own.",
              "I built the watch-together flow: the front passenger shares a video to the back seats, riders accept or decline, and play, pause, and seek stay in sync across every connected screen.",
            ],
          },
          {
            id: "audiobook-player",
            title: "AudioBook Player",
            highlights: [
              "I built a single-screen music/audiobook player for the car's dashboard strip display, showing cover art, title, and time-synced lyrics.",
              "I kept playback running in the background and resuming correctly when the screen is reopened.",
            ],
          },
          {
            id: "home-screen-widgets",
            title: "Home Screen Widgets",
            highlights: [
              "I built a 3-slot home-screen widget app over a looping background video, showing date/time, driver health, weather, and navigation info.",
              "I connected the widgets to the car's live vehicle data system through system state.",
            ],
          },
        ],
      },
      {
        id: "car-settings",
        period: "Mar – May 2026",
        label: "Android Automotive (Java + XML, Android 15)",
        projects: [
          {
            id: "car-settings-maintenance",
            title: "Car Settings",
            highlights: [
              "I fixed UI, business logic, framework, and VHAL communication issues in Android Automotive Car Settings using Java and XML.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fpt-software-academy",
    name: "FPT Software Academy",
    location: "Hanoi, Vietnam",
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
              "I studied Java, Kotlin, and Android fundamentals.",
              "I researched AOSP architecture, including HAL, Framework, and System Services.",
              "I explored Android Automotive OS, the in-vehicle app model, and Car App Library.",
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
              "I developed a web application in a five-person team using Spring Boot and RESTful APIs for the backend, with React for the frontend.",
            ],
          },
        ],
      },
    ],
  },
];
