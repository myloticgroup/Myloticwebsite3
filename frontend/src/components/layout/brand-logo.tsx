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
        "inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A] rounded-sm py-1 select-none",
        className
      )}
      aria-label="Mylotic Group Homepage"
    >
      {/* 
        Prism Nexus Monogram SVG:
        Precision architectural 'M' nexus constructed with geometric facets.
      */}
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 transition-transform duration-250 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Outer Protective Geometric Badge */}
          <rect
            width="36"
            height="36"
            rx="8"
            className={cn(
              "transition-colors duration-250",
              isDark ? "fill-[#171A17] stroke-[#333830]" : "fill-[#242622] stroke-[#171A17]"
            )}
            strokeWidth="1.5"
          />

          {/* Left Pillar */}
          <path
            d="M8 26V10L14 17V26H8Z"
            fill={isDark ? "#A5AC92" : "#66705A"}
            className="transition-colors duration-250"
          />

          {/* Center Nexus Apex */}
          <path
            d="M14 17L18 12L22 17L18 22L14 17Z"
            fill="#F7F5EF"
          />

          {/* Right Pillar */}
          <path
            d="M28 26V10L22 17V26H28Z"
            fill={isDark ? "#7B846B" : "#4C5642"}
            className="transition-colors duration-250"
          />

          {/* Bottom Precision Vertex */}
          <circle cx="18" cy="25" r="1.5" fill="#C5A880" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-bold text-base tracking-tight transition-colors duration-200",
              isDark ? "text-[#F7F5EF]" : "text-[#171A17] group-hover:text-[#242622]"
            )}
          >
            MYLOTIC
          </span>
          <span
            className={cn(
              "font-mono text-[9px] uppercase tracking-[0.22em] font-semibold transition-colors duration-200",
              isDark ? "text-[#A5AC92]" : "text-[#66705A] group-hover:text-[#4C5642]"
            )}
          >
            GROUP
          </span>
        </div>
      )}
    </Link>
  );
}
