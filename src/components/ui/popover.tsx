"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import { X } from "@phosphor-icons/react/dist/ssr";
import * as React from "react";

import { cn } from "@/lib/utils";

const Popover = BasePopover.Root;
const PopoverTrigger = BasePopover.Trigger;
const PopoverPortal = BasePopover.Portal;
const PopoverPositioner = BasePopover.Positioner;

const PopoverArrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>
>(({ className, ...props }, ref) => (
  <BasePopover.Arrow
    ref={ref}
    className={cn(
      "flex",
      "data-[side=top]:bottom-[-6px]",
      "data-[side=bottom]:top-[-6px] data-[side=bottom]:rotate-180",
      "data-[side=left]:right-[-9px] data-[side=left]:-rotate-90",
      "data-[side=right]:left-[-9px] data-[side=right]:rotate-90",
      className,
    )}
    {...props}
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
  </BasePopover.Arrow>
));
PopoverArrow.displayName = "PopoverArrow";

const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Close>
>(({ className, ...props }, ref) => (
  <BasePopover.Close
    ref={ref}
    className={cn(
      "absolute top-2 right-2 rounded-full p-1 text-foreground/70 transition-colors hover:bg-surface-shadow/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className,
    )}
    {...props}
  >
    <X size={16} weight="bold" />
    <span className="sr-only">Close</span>
  </BasePopover.Close>
));
PopoverClose.displayName = "PopoverClose";

const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup> & {
    sideOffset?: number;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
  }
>(
  (
    {
      className,
      sideOffset = 10,
      side = "bottom",
      align = "center",
      children,
      ...props
    },
    ref,
  ) => (
    <BasePopover.Portal>
      <BasePopover.Positioner sideOffset={sideOffset} side={side} align={align}>
        <BasePopover.Popup
          ref={ref}
          className={cn(
            "z-50 rounded-lg bg-surface p-4 shadow-neu-lg outline-none",
            "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
            "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
            "transition-all duration-150",
            className,
          )}
          {...props}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  ),
);
PopoverContent.displayName = "PopoverContent";

export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverPositioner,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
};
