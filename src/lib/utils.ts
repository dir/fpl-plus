import { isServer } from "@tanstack/react-query";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { env } from "~/env";

import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProxiedUrl = (requestUrl: string) =>
  isServer ? requestUrl : `${env.NEXT_PUBLIC_CORS_PROXY}${requestUrl}`;
