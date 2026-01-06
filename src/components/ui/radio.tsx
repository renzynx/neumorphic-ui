import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  [
    "rounded-full bg-surface shadow-neu-xs transition-all duration-150",
    "flex items-center justify-center",
    "data-[checked]:shadow-neu-pressed-xs",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const radioIndicatorVariants = cva(
  "rounded-full bg-primary data-[unchecked]:hidden",
  {
    variants: {
      size: {
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type RadioGroupProps = ComponentProps<typeof BaseRadioGroup>;
export type RadioProps = ComponentProps<typeof BaseRadio.Root> &
  VariantProps<typeof radioVariants>;

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

export default function Radio({
  className,
  size = "md",
  ...props
}: RadioProps) {
  return (
    <BaseRadio.Root
      className={cn(radioVariants({ size }), className)}
      {...props}
    >
      <BaseRadio.Indicator className={radioIndicatorVariants({ size })} />
    </BaseRadio.Root>
  );
}

export { radioVariants, radioIndicatorVariants };
