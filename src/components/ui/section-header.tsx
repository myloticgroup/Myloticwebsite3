import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "large" | "compact";
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      eyebrow,
      title,
      description,
      align = "left",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col mb-12 sm:mb-16",
          align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
          align === "center" ? "max-w-3xl" : "max-w-4xl",
          className
        )}
        {...props}
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-sm bg-primary/10 border border-primary/20 text-xs font-mono tracking-widest uppercase text-blue-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {eyebrow}
          </div>
        )}

        <h2
          className={cn(
            "font-bold tracking-tight text-foreground",
            size === "large" && "text-3xl sm:text-4xl lg:text-5xl leading-[1.15]",
            size === "default" && "text-2xl sm:text-3xl lg:text-4xl leading-[1.2]",
            size === "compact" && "text-xl sm:text-2xl lg:text-3xl leading-[1.25]"
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "mt-4 text-muted leading-relaxed font-normal",
              size === "large" ? "text-lg sm:text-xl" : "text-base sm:text-lg"
            )}
          >
            {description}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
