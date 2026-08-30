import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#171A17] text-[#F7F5EF] hover:bg-[#242622] active:scale-[0.98] border border-[#171A17] font-mono text-xs uppercase tracking-wider font-semibold shadow-xs transition-all duration-200",
  secondary:
    "bg-[#F1F0EA] text-[#171A17] hover:bg-[#E8E6DE] active:scale-[0.98] border border-[#E8E6DE] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200",
  outline:
    "bg-transparent text-[#171A17] border border-[#E8E6DE] hover:border-[#66705A] hover:bg-[#F7F5EF] active:scale-[0.98] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200",
  ghost:
    "bg-transparent text-[#555850] hover:text-[#171A17] hover:bg-[#F1F0EA] active:scale-[0.98] font-medium transition-all duration-200",
  link: "bg-transparent text-[#66705A] hover:text-[#4C5642] hover:underline underline-offset-4 p-0 h-auto font-medium transition-colors",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-[11px] gap-1.5 rounded-lg",
  md: "h-10 px-5 py-2.5 text-xs gap-2 rounded-lg",
  lg: "h-12 px-7 text-xs sm:text-sm gap-2.5 rounded-xl",
  icon: "h-9.5 w-9.5 p-0 rounded-lg justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
