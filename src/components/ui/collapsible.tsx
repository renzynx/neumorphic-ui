"use client";

import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import * as React from "react";

import { cn } from "@/lib/utils";

const Collapsible = BaseCollapsible.Root;

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Trigger>
>(({ className, ...props }, ref) => (
  <BaseCollapsible.Trigger
    ref={ref}
    className={cn(
      "group flex w-full items-center justify-between rounded-md py-2 font-medium transition-all hover:brightness-105 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  />
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Panel>
>(({ className, children, ...props }, ref) => (
  <BaseCollapsible.Panel
    ref={ref}
    className={cn(
      "overflow-hidden transition-[grid-template-rows,padding] duration-300 ease-in-out data-[state=closed]:grid data-[state=open]:grid data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr] data-[starting-style]:grid-rows-[0fr] data-[ending-style]:grid-rows-[0fr]",
      className,
    )}
    {...props}
  >
    <div className="min-h-0">{children}</div>
  </BaseCollapsible.Panel>
));
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
