"use client";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { CheckCircle, Info, Warning, X, XCircle } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const toastManager = BaseToast.createToastManager();

function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <BaseToast.Provider toastManager={toastManager}>
      {children}
    </BaseToast.Provider>
  );
}

const ToastPortal = BaseToast.Portal;

function useToast() {
  return BaseToast.useToastManager();
}

function ToastViewport({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Viewport>) {
  return (
    <BaseToast.Viewport
      className={cn(
        "fixed bottom-4 right-4 z-[100] w-full max-w-sm outline-none",
        className,
      )}
      {...props}
    />
  );
}

const toastVariants = cva(
  [
    "group pointer-events-auto absolute bottom-0 left-0 right-0 flex w-full items-start gap-3 overflow-hidden rounded-xl border bg-surface p-4 shadow-neu",
    "transition-all duration-300 ease-out",
    "z-[calc(100-var(--toast-index))]",
    "translate-y-[calc(var(--toast-index)*8px)]",
    "scale-[calc(1-var(--toast-index)*0.05)]",
    "origin-top",
    "data-[expanded]:translate-y-[calc((var(--toast-offset-y)*-1)-(var(--toast-index)*12px))]",
    "data-[expanded]:scale-100",
    "data-[swipe-direction]:transition-transform",
    "data-[starting-style]:opacity-0 data-[starting-style]:translate-y-full",
    "data-[ending-style]:opacity-0 data-[ending-style]:translate-y-full",
  ],
  {
    variants: {
      variant: {
        default: "border-foreground/10",
        success: "border-success/30",
        error: "border-destructive/30",
        warning: "border-warning/30",
        info: "border-primary/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const variantIcons: Record<string, ReactNode> = {
  default: null,
  success: (
    <CheckCircle weight="fill" className="size-5 shrink-0 text-success" />
  ),
  error: <XCircle weight="fill" className="size-5 shrink-0 text-destructive" />,
  warning: <Warning weight="fill" className="size-5 shrink-0 text-warning" />,
  info: <Info weight="fill" className="size-5 shrink-0 text-primary" />,
};

export type ToastRootProps = ComponentProps<typeof BaseToast.Root> &
  VariantProps<typeof toastVariants>;

function ToastRoot({
  className,
  variant = "default",
  children,
  ...props
}: ToastRootProps) {
  return (
    <BaseToast.Root
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      {variantIcons[variant ?? "default"]}
      <BaseToast.Content className="flex-1 space-y-1">
        {children}
      </BaseToast.Content>
    </BaseToast.Root>
  );
}

function ToastTitle({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Title>) {
  return (
    <BaseToast.Title
      className={cn("text-sm font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function ToastDescription({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Description>) {
  return (
    <BaseToast.Description
      className={cn("text-sm text-foreground/70", className)}
      {...props}
    />
  );
}

function ToastClose({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Close>) {
  return (
    <BaseToast.Close
      className={cn(
        "absolute top-3 right-3 rounded-full p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100",
        "focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
        className,
      )}
      {...props}
    >
      <X size={16} weight="bold" />
      <span className="sr-only">Close</span>
    </BaseToast.Close>
  );
}

function ToastAction({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Action>) {
  return (
    <BaseToast.Action
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg bg-surface px-3 text-sm font-medium shadow-neu-xs transition-all hover:shadow-neu-pressed-xs",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2",
        className,
      )}
      {...props}
    />
  );
}

export {
  toastManager,
  ToastProvider,
  ToastPortal,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  useToast,
  toastVariants,
};
