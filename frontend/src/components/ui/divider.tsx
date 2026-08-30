import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn("w-px h-full bg-border self-stretch shrink-0", className)}
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={cn("relative flex items-center justify-center w-full my-6", className)}
          {...props}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <span className="relative px-3 bg-background text-xs font-mono uppercase tracking-widest text-muted">
            {label}
          </span>
        </div>
      );
    }

    return (
      <hr
        ref={ref as React.ForwardedRef<HTMLHRElement>}
        className={cn("w-full border-0 border-t border-border my-6", className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
