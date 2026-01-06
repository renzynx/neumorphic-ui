"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = BaseAccordion.Root;

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Item
    ref={ref}
    className={cn(
      "rounded-lg bg-surface text-foreground shadow-neu-sm transition-all duration-300 ease-in-out data-[open]:shadow-neu-inset-sm data-[open]:bg-surface/50",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionHeader = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Header>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Header
    ref={ref}
    className={cn("flex", className)}
    {...props}
  />
));
AccordionHeader.displayName = "AccordionHeader";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Trigger
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between px-6 py-4 font-medium transition-all text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg [&[data-open]>svg]:rotate-180",
      className,
    )}
    {...props}
  >
    {children}
    <CaretDown
      size={16}
      weight="bold"
      className="shrink-0 transition-transform duration-300 text-muted-foreground"
    />
  </BaseAccordion.Trigger>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionPanel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Panel
    ref={ref}
    className={cn(
      "h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
      className,
    )}
    {...props}
  >
    <div className="px-6 pb-4 pt-0 text-foreground/80">{children}</div>
  </BaseAccordion.Panel>
));
AccordionPanel.displayName = "AccordionPanel";

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
};
