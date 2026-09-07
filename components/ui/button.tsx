"use client";

import { forwardRef, useState, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl px-5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white shadow-[0_10px_28px_rgba(59,130,246,.24)] hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_14px_34px_rgba(59,130,246,.34)]",
        outline:
          "border border-white/[.12] bg-white/[.025] text-zinc-100 hover:-translate-y-0.5 hover:border-blue-400/45 hover:bg-blue-400/[.08]",
        ghost: "text-zinc-400 hover:bg-white/[.06] hover:text-white",
      },
      size: { default: "", sm: "h-9 rounded-lg px-3.5 text-xs" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, children, onPointerDown, ...props },
    ref,
  ) => {
    const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(
      null,
    );
    const Comp = asChild ? Slot : "button";
    const sharedProps = {
      ref,
      className: cn(buttonVariants({ variant, size }), className),
      onPointerDown: (event: React.PointerEvent<HTMLButtonElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setRipple({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
          key: Date.now(),
        });
        onPointerDown?.(event);
      },
      ...props,
    };

    if (asChild) return <Slot {...sharedProps}>{children}</Slot>;

    return (
      <Comp {...sharedProps}>
        {ripple && (
          <span
            key={ripple.key}
            className="button-ripple"
            style={{ left: ripple.x, top: ripple.y }}
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
