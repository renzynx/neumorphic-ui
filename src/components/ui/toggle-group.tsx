"use client";

import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const toggleGroupItemVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap bg-transparent font-medium text-foreground/70 rounded-lg select-none",
    "transition-colors duration-200 ease-out",
    "hover:text-foreground hover:bg-surface-shadow/10",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-1",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
    "data-[pressed]:bg-surface-shadow/20 data-[pressed]:text-foreground data-[pressed]:shadow-neu-inset-xs",
  ],
  {
    variants: {
      size: {
        sm: "h-7 min-w-7 px-2.5 text-sm",
        md: "h-9 min-w-9 px-3 text-base",
        lg: "h-11 min-w-11 px-4 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type ToggleGroupSize = "sm" | "md" | "lg";

const ToggleGroupContext = createContext<{ size: ToggleGroupSize }>({
  size: "md",
});

export type ToggleGroupProps = ComponentProps<typeof BaseToggleGroup> &
  VariantProps<typeof toggleGroupItemVariants>;

export type ToggleGroupItemProps = ComponentProps<typeof BaseToggle>;

export function ToggleGroup({
  className,
  size = "md",
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupContext.Provider value={{ size: size ?? "md" }}>
      <BaseToggleGroup
        className={cn(
          "inline-flex gap-1 rounded-xl bg-surface p-1 shadow-neu-sm",
          className,
        )}
        {...props}
      >
        {children}
      </BaseToggleGroup>
    </ToggleGroupContext.Provider>
  );
}

export function ToggleGroupItem({
  className,
  children,
  ...props
}: ToggleGroupItemProps) {
  const { size } = useContext(ToggleGroupContext);

  return (
    <BaseToggle
      className={cn(toggleGroupItemVariants({ size }), className)}
      {...props}
    >
      {children}
    </BaseToggle>
  );
}

export { toggleGroupItemVariants };
