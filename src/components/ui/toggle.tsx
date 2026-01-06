import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  [
    "flex items-center justify-center",
    "rounded-xl font-medium",
    "bg-surface text-foreground/70",
    "shadow-neu-sm",
    "transition-all duration-150",
    "hover:brightness-105",
    "data-[pressed]:shadow-neu-pressed-sm data-[pressed]:text-foreground",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type ToggleProps = ComponentProps<typeof BaseToggle> &
  VariantProps<typeof toggleVariants>;

export default function Toggle({
  className,
  size,
  children,
  ...props
}: ToggleProps) {
  return (
    <BaseToggle className={cn(toggleVariants({ size }), className)} {...props}>
      {children}
    </BaseToggle>
  );
}

export { toggleVariants };
