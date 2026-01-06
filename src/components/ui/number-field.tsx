"use client";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import * as React from "react";
import { cn } from "@/lib/utils";

const NumberField = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Root>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Root
    ref={ref}
    className={cn("flex flex-col gap-1.5", className)}
    {...props}
  />
));
NumberField.displayName = "NumberField";

const NumberFieldGroup = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Group>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Group>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Group
    ref={ref}
    className={cn(
      "flex items-center gap-2 bg-surface shadow-neu-inset rounded-lg p-1",
      className,
    )}
    {...props}
  />
));
NumberFieldGroup.displayName = "NumberFieldGroup";

const NumberFieldInput = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Input>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Input>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Input
    ref={ref}
    className={cn(
      "flex-1 bg-transparent text-foreground placeholder:text-foreground/50 border-none outline-none text-center h-10 w-full min-w-0 text-base font-medium",
      "focus:outline-none focus:ring-0",
      "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      className,
    )}
    {...props}
  />
));
NumberFieldInput.displayName = "NumberFieldInput";

const NumberFieldIncrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Increment>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Increment>
>(({ className, children, ...props }, ref) => (
  <BaseNumberField.Increment
    ref={ref}
    className={cn(
      "flex items-center justify-center h-10 w-10 shrink-0 select-none rounded-md bg-surface text-foreground shadow-neu-sm outline-none transition-all duration-200",
      "hover:brightness-105 active:shadow-neu-pressed",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:active:shadow-neu-sm",
      className,
    )}
    {...props}
  >
    {children ?? <Plus className="h-4 w-4" weight="bold" />}
  </BaseNumberField.Increment>
));
NumberFieldIncrement.displayName = "NumberFieldIncrement";

const NumberFieldDecrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Decrement>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>
>(({ className, children, ...props }, ref) => (
  <BaseNumberField.Decrement
    ref={ref}
    className={cn(
      "flex items-center justify-center h-10 w-10 shrink-0 select-none rounded-md bg-surface text-foreground shadow-neu-sm outline-none transition-all duration-200",
      "hover:brightness-105 active:shadow-neu-pressed",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:active:shadow-neu-sm",
      className,
    )}
    {...props}
  >
    {children ?? <Minus className="h-4 w-4" weight="bold" />}
  </BaseNumberField.Decrement>
));
NumberFieldDecrement.displayName = "NumberFieldDecrement";

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
};
