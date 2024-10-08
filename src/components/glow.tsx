import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "~/lib/utils";

import type { VariantProps } from "class-variance-authority";

export const glowVariants = cva(
  "bg-clip-text font-extrabold text-transparent",
  {
    variants: {
      color: {
        rainbow: "bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500",
        gold: [
          "bg-gradient-to-r",
          "from-amber-400 via-yellow-500 to-yellow-600",
          "dark:from-yellow-200 dark:via-yellow-400 dark:to-yellow-700",
        ],
        silver: [
          "bg-gradient-to-r",
          "from-gray-400 via-gray-500 to-gray-600",
          "dark:from-gray-200 dark:via-gray-300 dark:to-gray-500",
        ],
        bronze: [
          "bg-gradient-to-r",
          "from-yellow-700 via-orange-400 to-red-900",
        ],
      },
      blur: {
        none: "",
        xs: "blur-xs",
        sm: "blur-sm",
        md: "blur-md",
        lg: "blur-lg",
        xl: "blur-xl",
        "2xl": "blur-2xl",
      },
    },
    defaultVariants: {
      color: "rainbow",
      blur: "md",
    },
  },
);

interface GlowProps extends VariantProps<typeof glowVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Glow({ children, color, blur, className }: GlowProps) {
  return (
    <div className="inline-flex">
      <span
        className={cn(
          `absolute box-content select-none border ${glowVariants({
            color,
            blur,
          })}`,
          className,
        )}
      >
        {children}
      </span>
      <h1
        className={cn(
          `relative top-0 flex h-auto select-auto ${glowVariants({
            blur: "none",
            color,
          })}`,
          className,
        )}
      >
        {children}
      </h1>
    </div>
  );
}
