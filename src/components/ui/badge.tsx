import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

import type { VariantProps } from "class-variance-authority";

<div className="rounded-lg border border-emerald-500 px-1.5 py-0.5 text-xs text-emerald-500"></div>;
const badgeVariants = cva(
  "inline-flex items-center select-none rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        success:
          "border-emerald-500 bg-emerald-500/5 text-emerald-500 hover:bg-emerald-500/20",
        pending:
          "border-amber-500 bg-amber-500/5 text-amber-500 hover:bg-amber-500/20",
        failure:
          "border-rose-500 bg-rose-500/5 text-rose-500 hover:bg-rose-500/20",
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        muted:
          "border-muted-foreground text-muted-foreground bg-muted/40 hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
