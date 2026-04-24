import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVND(amount: number): string {
  // Vietnamese format: ₫12.500.000
  return "₫" + amount.toLocaleString("vi-VN");
}
