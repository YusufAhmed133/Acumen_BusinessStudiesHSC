export type TutorProfile = {
  name: string;
  course: string;
  bio: string;
  headshot: string | null;
  tint: string;
  accent: string;
};

export const TUTOR_PROFILES: TutorProfile[] = [
  {
    name: "Yusuf A",
    course: "UNSW Law / Commerce",
    bio: "",
    headshot: null,
    tint: "#CFEAD9",
    accent: "#1F6B40",
  },
  {
    name: "Finn F",
    course: "Macq Commerce / Engineering",
    bio: "",
    headshot: null,
    tint: "#FBE6BD",
    accent: "#A66E12",
  },
  {
    name: "Joshua T",
    course: "USYD Commerce",
    bio: "",
    headshot: null,
    tint: "#CFDFF4",
    accent: "#2A4F94",
  },
  {
    name: "Marisa M",
    course: "UTS Business",
    bio: "",
    headshot: null,
    tint: "#F4CFCF",
    accent: "#923333",
  },
  {
    name: "Cienna P",
    course: "UNSW Commerce",
    bio: "",
    headshot: null,
    tint: "#E7E2F8",
    accent: "#51408F",
  },
];
