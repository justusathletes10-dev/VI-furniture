export type CategoryRow = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const categoryRows: CategoryRow[] = [
  {
    id: "seating",
    name: "Seating",
    description:
      "Low lounge chairs, bouclé banquettes and slumped armchairs for the rooms you live in.",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "tables",
    name: "Tables",
    description:
      "Burl veneer, travertine, hand-turned oak — surfaces that hold a room together.",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "lighting",
    name: "Lighting",
    description:
      "Paper shades, slumped glass, warm brass. Light as a quiet material.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "storage",
    name: "Storage",
    description:
      "Cabinets and sideboards — softened geometry in oak, lacquered ash, woven cane.",
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "objects",
    name: "Objects",
    description:
      "Ceramic vessels, rough-hewn stone and small things made slowly.",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85",
  },
];
