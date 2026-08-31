import { Moon, Layers, Sun, Leaf, Sparkles, ShieldCheck, Home, Palette } from "lucide-react";

export const ICONS = {
  Moon,
  Layers,
  Sun,
  Leaf,
  Sparkles,
  ShieldCheck,
  Home,
  Palette,
} as const;

export type IconKey = keyof typeof ICONS;

export type Producto = {
  id: string;
  nombre: string;
  resumen: string;
  img: string;
  icon: IconKey;
};

export const defaultProductos: Producto[] = [
  {
    id: "blackout",
    nombre: "Roller Blackout",
    icon: "Moon",
    img: "/images/hero-2-clean.jpeg",
    resumen: "Oscurecimiento total a través de la tela.",
  },
  {
    id: "duo",
    nombre: "Roller Duo",
    icon: "Layers",
    img: "/images/hero-4-clean.jpeg",
    resumen: "Franjas alternadas de luz y privacidad.",
  },
  {
    id: "screen",
    nombre: "Roller Screen",
    icon: "Sun",
    img: "/images/hero-office-clean.jpeg",
    resumen: "Hasta 96% de filtro solar UV.",
  },
  {
    id: "natura",
    nombre: "Roller Natura",
    icon: "Leaf",
    img: "/images/hero-3-clean.jpeg",
    resumen: "Luz natural sin perder privacidad.",
  },
];

export const AVAILABLE_IMAGES = [
  "/images/hero-2-clean.jpeg",
  "/images/hero-3-clean.jpeg",
  "/images/hero-4-clean.jpeg",
  "/images/hero-office-clean.jpeg",
  "/images/about-roller.webp",
  "/images/project-1.webp",
  "/images/project-2.webp",
  "/images/project-3.webp",
];
