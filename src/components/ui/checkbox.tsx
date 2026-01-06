import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  [
    "flex items-center justify-center bg-surface transition-all duration-150",
    "shadow-neu-xs hover:shadow-neu-sm",
    "border border-foreground/20",
    "data-[checked]:shadow-neu-pressed-xs data-[checked]:border-primary",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4 rounded",
        md: "w-5 h-5 rounded-md",
        lg: "w-6 h-6 rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const iconSizes = {
  sm: 12,
  md: 14,
  lg: 18,
} as const;

export type CheckboxProps = ComponentProps<typeof BaseCheckbox.Root> &
  VariantProps<typeof checkboxVariants>;

export default function Checkbox({
  className,
  size = "md",
  children,
  ...props
}: CheckboxProps) {
  return (
    <BaseCheckbox.Root
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <BaseCheckbox.Indicator className="flex items-center justify-center text-primary w-full h-full">
        {props.indeterminate ? (
          <Minus weight="bold" size={iconSizes[size ?? "md"]} />
        ) : (
          <Check weight="bold" size={iconSizes[size ?? "md"]} />
        )}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}

export { checkboxVariants };
