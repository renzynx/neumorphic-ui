import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  [
    "w-full bg-surface text-foreground placeholder:text-foreground/50 border-none outline-none transition-shadow duration-200 resize-y",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "min-h-[80px] px-3 py-2 text-sm rounded-lg shadow-neu-inset-sm",
        md: "min-h-[100px] px-4 py-3 text-base rounded-xl shadow-neu-inset",
        lg: "min-h-[120px] px-5 py-4 text-lg rounded-xl shadow-neu-inset-lg",
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

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(textareaVariants({ size, error }), className)}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
