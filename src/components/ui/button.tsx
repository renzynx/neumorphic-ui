import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-medium select-none",
    "transition-all duration-200 ease-in-out",
    "active:translate-y-0.5",
    "outline-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
    "data-disabled:opacity-50 data-disabled:shadow-none data-disabled:cursor-not-allowed data-disabled:translate-y-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-surface text-foreground shadow-neu border border-white/20 hover:brightness-105 active:shadow-neu-pressed",
        primary:
          "bg-surface text-primary shadow-neu border border-primary/30 hover:brightness-105 active:shadow-neu-pressed",
        secondary:
          "bg-surface text-foreground/80 shadow-neu border border-foreground/10 hover:brightness-105 active:shadow-neu-pressed",
        success:
          "bg-surface text-success shadow-neu border border-success/30 hover:brightness-105 active:shadow-neu-pressed",
        warning:
          "bg-surface text-warning shadow-neu border border-warning/30 hover:brightness-105 active:shadow-neu-pressed",
        error:
          "bg-surface text-destructive shadow-neu border border-destructive/30 hover:brightness-105 active:shadow-neu-pressed",
        ghost:
          "bg-transparent text-foreground shadow-none border border-transparent hover:bg-surface-shadow/10 active:bg-surface-shadow/20",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        md: "h-11 px-6 text-base rounded-xl",
        lg: "h-14 px-8 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, isLoading, className, children, disabled, ...props },
  ref,
) {
  return (
    <BaseButton
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </BaseButton>
  );
});

export default Button;

export { buttonVariants };
