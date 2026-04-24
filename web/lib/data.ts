export type Product = {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
};

export type Category = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  count: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
};

export const categories: Category[] = [
  {
    id: "sofas",
    name: "Sofas",
    subtitle: "Canapés",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    count: 48,
  },
  {
    id: "dining",
    name: "Dining",
    subtitle: "Salle à Manger",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    count: 32,
  },
  {
    id: "beds",
    name: "Beds",
    subtitle: "Lits",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    count: 27,
  },
  {
    id: "lighting",
    name: "Lighting",
    subtitle: "Luminaires",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    count: 56,
  },
  {
    id: "decor",
    name: "Decor",
    subtitle: "Objets",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    count: 84,
  },
  {
    id: "office",
    name: "Office",
    subtitle: "Bureau",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    count: 21,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "p1",
    name: "Beirut Velvet Sofa",
    subtitle: "Canapé Beyrouth",
    category: "Sofas",
    price: 1200,
    originalPrice: 1350,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
    badge: "Best Seller",
  },
  {
    id: "p2",
    name: "Byblos Oak Dining Table",
    subtitle: "Table de Byblos",
    category: "Dining",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p3",
    name: "Baalbek Imperial Bed",
    subtitle: "Lit Baalbek",
    category: "Beds",
    price: 1750,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    badge: "New",
  },
  {
    id: "p4",
    name: "Cedrus Pendant Lamp",
    subtitle: "Suspension Cèdre",
    category: "Lighting",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p5",
    name: "Chouf Lounge Chair",
    subtitle: "Fauteuil Chouf",
    category: "Chairs",
    price: 520,
    originalPrice: 620,
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p6",
    name: "Beirut Marble Coffee Table",
    subtitle: "Table basse en marbre",
    category: "Tables",
    price: 410,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p7",
    name: "Rattan Weave Armchair",
    subtitle: "Fauteuil tressé",
    category: "Chairs",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80",
    badge: "Artisan",
  },
  {
    id: "p8",
    name: "Levant Sideboard",
    subtitle: "Buffet du Levant",
    category: "Storage",
    price: 935,
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rania Khoury",
    role: "Interior Designer, Beirut",
    quote:
      "VI Furniture brings craftsmanship and modern elegance together. Every piece feels intentional and built to last a lifetime.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "t2",
    name: "Karim Saad",
    role: "Architect, Byblos",
    quote:
      "The wood, the finish, the delivery experience — a true luxury brand standard, and proudly made in Lebanon.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "t3",
    name: "Yasmine Haddad",
    role: "Hotel Owner, Tripoli",
    quote:
      "We furnished our entire boutique hotel with VI. Guests constantly ask where we sourced the pieces. Worth every dollar.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
];
