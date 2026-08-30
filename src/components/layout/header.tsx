import * as React from "react";
import { Link } from "react-router-dom";
import { BrandLogo } from "./brand-logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#E8E6DE] shadow-xs py-3.5"
          : "bg-[#F7F5EF] border-b border-[#E8E6DE]/60 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Logo */}
          <div className="flex items-center shrink-0">
            <BrandLogo variant="light" />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right: CTA & Mobile Drawer Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contact" className="hidden sm:inline-flex group">
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg bg-[#171A17] hover:bg-[#242622] active:scale-[0.98] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Mobile Navigation Drawer Trigger */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
