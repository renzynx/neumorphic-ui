import { Input as BaseInput } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full bg-surface text-foreground placeholder:text-foreground/50 border-none outline-none transition-shadow duration-200",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm rounded-lg shadow-neu-inset-sm",
        md: "h-10 px-4 text-base rounded-xl shadow-neu-inset",
        lg: "h-12 px-5 text-lg rounded-xl shadow-neu-inset-lg",
      },
      error: {
        true: "shadow-focus-destructive",
        false: "focus:shadow-focus-primary",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

export type InputProps = Omit<ComponentProps<typeof BaseInput>, "size"> &
  VariantProps<typeof inputVariants>;

export default function Input({
  className,
  size,
  error,
  disabled,
  ...props
}: InputProps) {
  return (
    <BaseInput
      disabled={disabled}
      className={cn(inputVariants({ size, error }), className)}
      {...props}
    />
  );
}

export { inputVariants };
