"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const tabsTriggerVariants = cva(
  [
    "relative text-foreground/70 rounded-lg transition-all duration-200 flex-1 text-center",
    "data-[selected]:text-foreground data-[selected]:font-semibold data-[active]:text-foreground data-[active]:font-semibold",
    "hover:text-foreground",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
    "z-10 bg-transparent cursor-pointer select-none outline-none",
  ],
  {
    variants: {
      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type TabsSize = "sm" | "md" | "lg";
const TabsContext = React.createContext<{ size: TabsSize }>({ size: "md" });

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.Root>,
    VariantProps<typeof tabsTriggerVariants> {}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ size: size ?? "md" }}>
        <BaseTabs.Root
          ref={ref}
          className={cn("flex flex-col", className)}
          {...props}
        >
          {children}
        </BaseTabs.Root>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(({ className, children, ...props }, ref) => (
  <BaseTabs.List
    ref={ref}
    className={cn(
      "shadow-neu-sm bg-surface rounded-xl p-1",
      "flex gap-1 relative isolate",
      className,
    )}
    {...props}
  >
    {children}
    <BaseTabs.Indicator
      className={cn(
        "absolute z-[-1] top-[var(--active-tab-top)] left-[var(--active-tab-left)]",
        "w-[var(--active-tab-width)] h-[var(--active-tab-height)]",
        "shadow-neu-pressed-sm bg-surface-highlight",
        "rounded-lg transition-all duration-200 ease-in-out",
      )}
    />
  </BaseTabs.List>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, ...props }, ref) => {
  const { size } = React.useContext(TabsContext);

  return (
    <BaseTabs.Tab
      ref={ref}
      className={cn(tabsTriggerVariants({ size }), className)}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={cn("p-4 focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsTriggerVariants };
