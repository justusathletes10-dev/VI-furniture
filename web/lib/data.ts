export type Product = {
  id: string;
  name: string;
  vietnameseName?: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
};

export type Category = {
  id: string;
  name: string;
  vietnameseName: string;
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
    vietnameseName: "Ghế Sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    count: 48,
  },
  {
    id: "dining",
    name: "Dining",
    vietnameseName: "Bàn Ăn",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    count: 32,
  },
  {
    id: "beds",
    name: "Beds",
    vietnameseName: "Giường Ngủ",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    count: 27,
  },
  {
    id: "lighting",
    name: "Lighting",
    vietnameseName: "Đèn Trang Trí",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    count: 56,
  },
  {
    id: "decor",
    name: "Decor",
    vietnameseName: "Trang Trí",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    count: 84,
  },
  {
    id: "office",
    name: "Office",
    vietnameseName: "Văn Phòng",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    count: 21,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "p1",
    name: "Hanoi Velvet Sofa",
    vietnameseName: "Sofa Nhung Hà Nội",
    category: "Sofas",
    price: 28500000,
    originalPrice: 32000000,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
    badge: "Best Seller",
  },
  {
    id: "p2",
    name: "Saigon Oak Dining Table",
    vietnameseName: "Bàn Ăn Gỗ Sồi Sài Gòn",
    category: "Dining",
    price: 18900000,
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p3",
    name: "Hue Imperial Bed",
    vietnameseName: "Giường Hoàng Gia Huế",
    category: "Beds",
    price: 42000000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    badge: "New",
  },
  {
    id: "p4",
    name: "Lotus Pendant Lamp",
    vietnameseName: "Đèn Thả Hoa Sen",
    category: "Lighting",
    price: 4250000,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p5",
    name: "Mekong Lounge Chair",
    vietnameseName: "Ghế Thư Giãn Mekong",
    category: "Chairs",
    price: 12500000,
    originalPrice: 14800000,
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p6",
    name: "Hanoi Marble Coffee Table",
    vietnameseName: "Bàn Trà Đá Cẩm Thạch",
    category: "Tables",
    price: 9800000,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p7",
    name: "Bamboo Weave Armchair",
    vietnameseName: "Ghế Đan Tre",
    category: "Chairs",
    price: 6750000,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80",
    badge: "Artisan",
  },
  {
    id: "p8",
    name: "Indochine Sideboard",
    vietnameseName: "Tủ Trang Trí Đông Dương",
    category: "Storage",
    price: 22400000,
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Nguyễn Mai Linh",
    role: "Interior Designer, Hanoi",
    quote:
      "VI Furniture brings craftsmanship and modern elegance together. Every piece feels intentional and built to last a lifetime.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "t2",
    name: "Trần Quốc Anh",
    role: "Architect, Ho Chi Minh City",
    quote:
      "Tôi rất hài lòng — the wood, the finish, the delivery experience. A true luxury brand standard, made in Vietnam.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "t3",
    name: "Phạm Thu Hương",
    role: "Hotel Owner, Da Nang",
    quote:
      "We furnished our entire boutique hotel with VI. Guests constantly ask where we sourced the pieces. Worth every đồng.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
];
