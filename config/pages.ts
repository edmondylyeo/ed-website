import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Edmond Yeo's portfolio website.",
    },
  },
  skills: {
    title: "Services",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Edmond Yeo's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Edmond Yeo's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Edmond Yeo.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Edmond Yeo's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Edmond Yeo's resume.",
    metadata: {
      title: "Resume",
      description: "Edmond Yeo's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Edmond Yeo's professional journey and experience timeline.",
    },
  },
};
