import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const switchRootVariants = cva(
  [
    "inline-flex items-center p-1",
    "rounded-full transition-all duration-200",
    "bg-surface shadow-neu-inset-sm",
    "cursor-pointer data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
  ],
  {
    variants: {
      size: {
        sm: "w-8 h-5",
        md: "w-11 h-6",
        lg: "w-14 h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const switchThumbVariants = cva(
  [
    "rounded-full aspect-square bg-surface-highlight shadow-neu-xs",
    "transition-all duration-200",
    "data-[checked]:bg-primary data-[checked]:shadow-neu-sm",
  ],
  {
    variants: {
      size: {
        sm: "w-3 h-3 data-[checked]:translate-x-3",
        md: "w-4 h-4 data-[checked]:translate-x-5",
        lg: "w-6 h-6 data-[checked]:translate-x-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type SwitchProps = ComponentProps<typeof BaseSwitch.Root> &
  VariantProps<typeof switchRootVariants>;

export default function Switch({
  size,
  className,
  children,
  ...props
}: SwitchProps) {
  return (
    <BaseSwitch.Root
      className={cn(switchRootVariants({ size }), className)}
      {...props}
    >
      <BaseSwitch.Thumb className={switchThumbVariants({ size })} />
    </BaseSwitch.Root>
  );
}

export { switchRootVariants, switchThumbVariants };
