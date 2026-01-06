"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";
import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ComponentRef<typeof BaseSeparator>,
  React.ComponentPropsWithoutRef<typeof BaseSeparator>
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <BaseSeparator
    ref={ref}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal"
        ? "h-[1px] w-full shadow-[0_1px_0_var(--color-surface-highlight)]"
        : "h-full w-[1px] shadow-[1px_0_0_var(--color-surface-highlight)]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = BaseSeparator.displayName || "Separator";

export { Separator };
export type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof BaseSeparator
>;
