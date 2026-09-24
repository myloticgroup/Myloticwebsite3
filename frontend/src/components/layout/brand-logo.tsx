import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

export function BrandLogo({
  variant = "light",
  className,
  showText = true,
}: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-lg py-1 select-none",
        className
      )}
      aria-label="Mylotic Group Homepage"
    >
      {/* Dynamic MG Brand Monogram */}
      <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shrink-0 shadow-sm border border-black/5 dark:border-white/10 bg-white">
        <img
          src="/logo.png"
          alt="Mylotic Group Logo"
          className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-105"
        />
      </div>

      {/* Typography Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-bold text-base tracking-tight transition-colors duration-200",
              isDark ? "text-[#F7F5EF]" : "text-[#171A17] group-hover:text-[#0369A1]"
            )}
          >
            MYLOTIC
          </span>
          <span
            className={cn(
              "font-mono text-[9px] uppercase tracking-[0.22em] font-semibold transition-colors duration-200",
              isDark ? "text-[#93C5FD]" : "text-[#0284C7] group-hover:text-[#0369A1]"
            )}
          >
            GROUP
          </span>
        </div>
      )}
    </Link>
  );
}

