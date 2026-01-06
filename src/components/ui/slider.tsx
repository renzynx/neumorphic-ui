import { Slider as BaseSlider } from "@base-ui/react/slider";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const sliderTrackVariants = cva(
  "relative grow rounded-full bg-surface shadow-neu-inset-sm",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const sliderThumbVariants = cva(
  [
    "block rounded-full bg-surface shadow-neu-sm",
    "absolute top-1/2 -translate-x-1/2 -translate-y-1/2",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "transition-shadow duration-150",
    "data-[dragging]:shadow-neu-pressed-sm",
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

export type SliderProps = ComponentProps<typeof BaseSlider.Root> &
  VariantProps<typeof sliderTrackVariants>;

export default function Slider({ size, className, ...props }: SliderProps) {
  return (
    <BaseSlider.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <BaseSlider.Control className="flex w-full items-center">
        <BaseSlider.Track className={sliderTrackVariants({ size })}>
          <BaseSlider.Indicator className="absolute h-full rounded-full bg-primary" />
          <BaseSlider.Thumb className={sliderThumbVariants({ size })} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export { sliderTrackVariants, sliderThumbVariants };
