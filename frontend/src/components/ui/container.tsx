import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "prose" | "full";
  as?: React.ElementType;
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  prose: "max-w-3xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
