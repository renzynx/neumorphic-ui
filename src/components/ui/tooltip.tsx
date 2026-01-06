"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function TooltipProvider(props: ComponentProps<typeof BaseTooltip.Provider>) {
  return <BaseTooltip.Provider delay={200} {...props} />;
}

const Tooltip = BaseTooltip.Root;

const TooltipTrigger = BaseTooltip.Trigger;

type TooltipContentProps = ComponentProps<typeof BaseTooltip.Popup> & {
  sideOffset?: number;
  side?: "top" | "bottom" | "left" | "right";
};

function TooltipContent({
  className,
  sideOffset = 10,
  side = "top",
  children,
  ...props
}: TooltipContentProps) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner sideOffset={sideOffset} side={side}>
        <BaseTooltip.Popup
          className={cn(
            "z-50 rounded-lg bg-surface px-3 py-1.5 text-sm shadow-neu-sm",
            "data-[instant]:duration-0",
            "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
            "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
            "transition-all duration-150",
            className,
          )}
          {...props}
        >
          {children}
          <BaseTooltip.Arrow
            className={cn(
              "flex",
              "data-[side=top]:bottom-[-6px]",
              "data-[side=bottom]:top-[-6px] data-[side=bottom]:rotate-180",
              "data-[side=left]:right-[-9px] data-[side=left]:-rotate-90",
              "data-[side=right]:left-[-9px] data-[side=right]:rotate-90",
            )}
          >
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              aria-hidden="true"
              className="fill-surface"
            >
              <path d="M0 0L6 6L12 0H0Z" />
            </svg>
          </BaseTooltip.Arrow>
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
export type { TooltipContentProps };
