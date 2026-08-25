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
        "sticky top-0 z-50 w-full transition-all duration-300 pointer-events-none",
        isScrolled ? "pt-2 pb-1" : "pt-4 sm:pt-5 pb-2"
      )}
    >
      <div className="w-[min(86vw,1290px)] mx-auto px-2 sm:px-0 pointer-events-auto">
        <div
          className={cn(
            "rounded-[22px] transition-all duration-300 border flex items-center justify-between gap-4 lg:gap-8 px-4 sm:px-6 min-h-[64px] sm:min-h-[68px]",
            isScrolled
              ? "bg-[#F5FBFF]/90 backdrop-blur-2xl border-white/80 shadow-[0_16px_40px_rgba(70,110,135,0.16)] py-2.5"
              : "bg-[#F5FBFF]/75 backdrop-blur-xl border-white/75 shadow-[0_12px_40px_rgba(70,110,135,0.12)] py-3 sm:py-3.5"
          )}
        >
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
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] active:scale-[0.98] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all duration-200 shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer border border-white/70"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#10213B] group-hover:translate-x-1 transition-transform" />
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
