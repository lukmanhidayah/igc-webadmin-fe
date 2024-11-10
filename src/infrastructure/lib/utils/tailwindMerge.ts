import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function tailwindMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default tailwindMerge;
