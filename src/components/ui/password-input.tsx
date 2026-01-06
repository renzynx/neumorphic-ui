"use client";

import { Input as BaseInput } from "@base-ui/react/input";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";

const passwordInputVariants = cva(
  [
    "w-full bg-surface text-foreground placeholder:text-foreground/50 border-none outline-none transition-shadow duration-200",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "h-8 pl-3 pr-9 text-sm rounded-lg shadow-neu-inset-sm",
        md: "h-10 pl-4 pr-10 text-base rounded-xl shadow-neu-inset",
        lg: "h-12 pl-5 pr-12 text-lg rounded-xl shadow-neu-inset-lg",
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

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

const buttonPositions = {
  sm: "right-2",
  md: "right-3",
  lg: "right-4",
} as const;

export type PasswordInputProps = Omit<
  ComponentProps<typeof BaseInput>,
  "size" | "type"
> &
  VariantProps<typeof passwordInputVariants> & {
    wrapperClassName?: string;
  };

export function PasswordInput({
  className,
  wrapperClassName,
  size = "md",
  error,
  disabled,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("relative w-full", wrapperClassName)}>
      <BaseInput
        type={showPassword ? "text" : "password"}
        disabled={disabled}
        className={cn(passwordInputVariants({ size, error }), className)}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        disabled={disabled}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded",
          buttonPositions[size ?? "md"],
        )}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeSlash size={iconSizes[size ?? "md"]} weight="bold" />
        ) : (
          <Eye size={iconSizes[size ?? "md"]} weight="bold" />
        )}
      </button>
    </div>
  );
}

export { passwordInputVariants };
export default PasswordInput;
