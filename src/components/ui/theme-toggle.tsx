"use client";

import { Desktop, Moon, Sun } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";
import * as React from "react";

import { cn } from "@/lib/utils";

const themeToggleVariants = cva(
  "relative grid grid-cols-3 gap-0 p-1 rounded-xl bg-surface shadow-neu-inset-sm isolate",
  {
    variants: {
      size: {
        sm: "h-8 w-[108px]",
        md: "h-10 w-[132px]",
        lg: "h-12 w-[156px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type ThemeToggleProps = VariantProps<typeof themeToggleVariants> & {
  className?: string;
};

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn(themeToggleVariants({ size }), className)}>
        <div className="col-span-1" />
      </div>
    );
  }

  const themes = [
    { name: "light", icon: Sun },
    { name: "system", icon: Desktop },
    { name: "dark", icon: Moon },
  ];

  const currentIndex =
    themes.findIndex((t) => t.name === theme) === -1
      ? 1
      : themes.findIndex((t) => t.name === theme);

  return (
    <div className={cn(themeToggleVariants({ size }), className)}>
      <div
        className={cn(
          "absolute top-1 bottom-1 left-1 w-[calc((100%-8px)/3)] rounded-lg bg-surface shadow-neu-sm transition-transform duration-300 ease-in-out z-0",
          currentIndex === 1 && "translate-x-[100%]",
          currentIndex === 2 && "translate-x-[200%]",
        )}
      />
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.name;
        return (
          <button
            key={t.name}
            type="button"
            onClick={() => setTheme(t.name)}
            className={cn(
              "relative z-10 flex items-center justify-center rounded-lg transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
              isActive
                ? "text-primary"
                : "text-foreground/60 hover:text-foreground/80",
            )}
            aria-label={`Switch to ${t.name} theme`}
          >
            <Icon
              size={iconSizes[size ?? "md"]}
              weight={isActive ? "fill" : "regular"}
              className={cn(
                "transition-all duration-300",
                isActive && "scale-110",
                isActive && t.name === "light" && "rotate-90",
                isActive && t.name === "dark" && "-rotate-12",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export { themeToggleVariants };
