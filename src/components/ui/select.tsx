"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import { CaretUpDown, Check } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { type ComponentProps, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const selectTriggerVariants = cva(
  [
    "flex w-full items-center justify-between bg-surface shadow-neu-sm transition-all outline-none cursor-pointer",
    "data-[popup-open]:shadow-neu-pressed-sm",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm rounded-lg",
        md: "h-10 px-4 text-base rounded-xl",
        lg: "h-12 px-5 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SelectSize = "sm" | "md" | "lg";

type SelectItemType = { value: string | null; label: string };

const SelectContext = createContext<{
  size: SelectSize;
}>({
  size: "md",
});

type SelectProps = ComponentProps<typeof BaseSelect.Root> &
  VariantProps<typeof selectTriggerVariants> & {
    items?: SelectItemType[];
  };

function Select({ size = "md", children, items, ...props }: SelectProps) {
  return (
    <SelectContext.Provider value={{ size: size ?? "md" }}>
      <BaseSelect.Root items={items} {...props}>
        {children}
      </BaseSelect.Root>
    </SelectContext.Provider>
  );
}

function SelectTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseSelect.Trigger>) {
  const { size } = useContext(SelectContext);

  return (
    <BaseSelect.Trigger
      className={cn(selectTriggerVariants({ size }), className)}
      {...props}
    >
      {children}
      <BaseSelect.Icon className="ml-2">
        <CaretUpDown weight="bold" className="size-4 opacity-50" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

const SelectValue = BaseSelect.Value;

function SelectContent({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner sideOffset={8}>
        <BaseSelect.Popup
          className={cn(
            "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl bg-surface p-1 shadow-neu",
            "data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-top-2 data-[closed]:animate-out data-[closed]:fade-out data-[closed]:slide-out-to-top-2 duration-150",
            className,
          )}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

type SelectItemProps = ComponentProps<typeof BaseSelect.Item> & {
  children: React.ReactNode;
  label?: string;
};

function SelectItem({
  className,
  children,
  label,
  value,
  ...props
}: SelectItemProps) {
  return (
    <BaseSelect.Item
      className={cn(
        "relative flex w-full select-none items-center justify-between rounded-lg px-3 py-2 outline-none transition-all cursor-pointer",
        "hover:shadow-neu-pressed-xs hover:bg-surface",
        "data-[highlighted]:shadow-neu-pressed-xs data-[highlighted]:bg-surface",
        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        className,
      )}
      value={value}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator>
        <Check weight="bold" className="size-4" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  selectTriggerVariants,
};
export type { SelectProps, SelectItemProps };
