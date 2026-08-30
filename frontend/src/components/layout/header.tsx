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
    <header className="sticky top-0 z-50 w-full pt-3 pb-2 px-4 sm:px-6 lg:px-8 transition-all duration-300 bg-[#7CC7EA]">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-[18px] transition-all duration-300 border px-4 sm:px-6 py-3 backdrop-blur-xl",
          isScrolled
            ? "bg-white/65 backdrop-blur-xl border-white/50 shadow-[0_10px_35px_rgba(17,87,122,.12)]"
            : "bg-white/45 border-white/40 shadow-[0_8px_25px_rgba(17,87,122,.08)]"
        )}
      >
        <div className="flex items-center justify-between gap-4 xl:gap-8">
          {/* Brand Logo */}
          <div className="flex items-center shrink-0">
            <BrandLogo variant="light" />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right: CTA & Mobile Drawer Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contact" className="hidden md:inline-flex group">
              <button
                type="button"
                className="px-4 xl:px-5 py-2.5 rounded-xl bg-[#D9F1FF]/75 hover:bg-white/90 border border-white/60 active:scale-[0.98] text-[#123650] font-mono text-[11px] xl:text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap backdrop-blur-md"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1B668B] group-hover:translate-x-1 transition-transform" />
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

export default Header;
