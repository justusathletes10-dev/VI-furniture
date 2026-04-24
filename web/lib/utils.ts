import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUSD(amount: number): string {
  // Lebanese luxury pricing uses USD: e.g. $1,200
  return "$" + amount.toLocaleString("en-US");
}
