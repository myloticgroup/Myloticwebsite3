import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "compact" | "spacious" | "none";
  surface?: "default" | "surface" | "elevated";
  border?: "none" | "top" | "bottom" | "both";
  as?: React.ElementType;
}

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  default: "py-16 sm:py-20 lg:py-28",
  compact: "py-10 sm:py-14 lg:py-18",
  spacious: "py-24 sm:py-32 lg:py-40",
  none: "py-0",
};

const surfaceClasses: Record<NonNullable<SectionProps["surface"]>, string> = {
  default: "bg-background",
  surface: "bg-surface",
  elevated: "bg-surface-elevated",
};

const borderClasses: Record<NonNullable<SectionProps["border"]>, string> = {
  none: "",
  top: "border-t border-border",
  bottom: "border-b border-border",
  both: "border-y border-border",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = "default",
      surface = "default",
      border = "none",
      as: Component = "section",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden",
          spacingClasses[spacing],
          surfaceClasses[surface],
          borderClasses[border],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";
