"use client";

import { Progress as BaseProgress } from "@base-ui/react/progress";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const progressTrackVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-surface shadow-neu-inset-sm",
  {
    variants: {
      size: {
        sm: "h-2 text-xs",
        md: "h-3 text-sm",
        lg: "h-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type ProgressProps = ComponentProps<typeof BaseProgress.Root> &
  VariantProps<typeof progressTrackVariants> & {
    showValue?: boolean;
  };

export default function Progress({
  size,
  showValue = false,
  className,
  value,
  max = 100,
  ...props
}: ProgressProps) {
  return (
    <BaseProgress.Root
      value={value}
      max={max}
      className={cn("w-full flex flex-col gap-2", className)}
      {...props}
    >
      <div className="flex justify-between items-end w-full">
        {showValue && (
          <BaseProgress.Value className="text-foreground font-mono font-medium ml-auto">
            {(curr) => {
              if (curr === null) return "Loading...";
              const val = Number(curr);
              const maxValue = Number(max) || 100;
              if (Number.isNaN(val) || Number.isNaN(maxValue)) return "0%";
              return `${Math.round((val / maxValue) * 100)}%`;
            }}
          </BaseProgress.Value>
        )}
      </div>

      <BaseProgress.Track className={cn(progressTrackVariants({ size }))}>
        <BaseProgress.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-300 ease-out rounded-full",
            "bg-gradient-to-r from-primary to-primary/80 shadow-[0_0_10px_rgba(124,92,226,0.3)]",
          )}
        />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

export { progressTrackVariants };
