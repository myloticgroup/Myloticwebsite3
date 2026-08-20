import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumbs"
      className={cn("flex items-center gap-1.5 text-xs font-mono text-slate-500", className)}
    >
      <Link
        href="/"
        className="hover:text-slate-900 transition-colors uppercase tracking-wider"
      >
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
            {isLast || !item.href ? (
              <span
                className="text-slate-900 font-semibold uppercase tracking-wider"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-slate-900 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
