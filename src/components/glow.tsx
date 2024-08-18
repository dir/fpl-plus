import { cva } from "class-variance-authority";
import React from "react";

import type { VariantProps } from "class-variance-authority";

export const glowVariants = cva(
  "bg-clip-text font-extrabold text-transparent",
  {
    variants: {
      color: {
        rainbow: "bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500",
        gold: [
          "bg-gradient-to-r",
          "from-yellow-400 via-yellow-500 to-yellow-600",
          "dark:from-yellow-200 dark:via-yellow-400 dark:to-yellow-700",
        ],
        silver: [
          "bg-gradient-to-r",
          "from-gray-400 via-gray-500 to-gray-600",
          "dark:from-gray-200 dark:via-gray-300 dark:to-gray-500",
        ],
        bronze: [
          "bg-gradient-to-r",
          "dark:from-yellow-700 dark:via-orange-400 dark:to-red-900",
        ],
      },
    },
    defaultVariants: {
      color: "rainbow",
    },
  },
);

interface GlowProps extends VariantProps<typeof glowVariants> {
  children: React.ReactNode;
}

export default function Glow({ children, color }: GlowProps) {
  return (
    <>
      <span
        className={`absolute box-content select-none border ${glowVariants({
          color,
        })} blur-md`}
      >
        {children}
      </span>
      <h1
        className={`relative top-0 flex h-auto select-auto ${glowVariants({
          color,
        })}`}
      >
        {children}
      </h1>
    </>
  );
}
