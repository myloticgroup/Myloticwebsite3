import * as React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { cn } from "@/lib/utils";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = React.useState(false);
  const [industriesExpanded, setIndustriesExpanded] = React.useState(false);
  const [companyExpanded, setCompanyExpanded] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Drawer modal rendered directly to body via portal to prevent containing block cropping from header backdrop-filter
  const drawerContent = isOpen && typeof document !== "undefined" ? (
    createPortal(
      <div className="fixed inset-0 z-[9999] flex justify-end">
        {/* Backdrop Dark Blur Surface */}
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Full-Height Slide-over Container */}
        <div className="relative w-full max-w-sm sm:max-w-md bg-white h-[100dvh] flex flex-col justify-between p-6 shadow-2xl z-10 overflow-y-auto border-l border-slate-200 animate-slide-in-right">
          <div>
            {/* Header inside drawer */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <BrandLogo variant="light" />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close Navigation Menu"
                className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 py-4">
              {/* 1. Solutions Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 cursor-pointer"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform text-slate-400",
                      solutionsExpanded && "rotate-180 text-sky-700"
                    )}
                  />
                </button>
                {solutionsExpanded && (
                  <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-sky-600 ml-2">
                    <Link
                      to="/solutions"
                      onClick={closeMenu}
                      className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold py-1 hover:underline"
                    >
                      All Practice Areas →
                    </Link>
                    {solutionsData.map((solution) => (
                      <Link
                        key={solution.id}
                        to={`/solutions/${solution.slug}`}
                        onClick={closeMenu}
                        className="text-sm text-slate-600 hover:text-slate-900 py-1"
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Industries Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setIndustriesExpanded(!industriesExpanded)}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 cursor-pointer"
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform text-slate-400",
                      industriesExpanded && "rotate-180 text-sky-700"
                    )}
                  />
                </button>
                {industriesExpanded && (
                  <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-sky-600 ml-2">
                    <Link
                      to="/industries"
                      onClick={closeMenu}
                      className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold py-1 hover:underline"
                    >
                      All Domain Practices →
                    </Link>
                    {industriesData.map((industry) => (
                      <Link
                        key={industry.id}
                        to={`/industries/${industry.slug}`}
                        onClick={closeMenu}
                        className="text-sm text-slate-600 hover:text-slate-900 py-1"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Technology */}
              <Link
                to="/technology"
                onClick={closeMenu}
                className="py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 border-b border-slate-100"
              >
                Technology
              </Link>

              {/* 4. Work */}
              <Link
                to="/work"
                onClick={closeMenu}
                className="py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 border-b border-slate-100"
              >
                Work
              </Link>

              {/* 5. Careers */}
              <Link
                to="/careers"
                onClick={closeMenu}
                className="py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 border-b border-slate-100"
              >
                Careers
              </Link>

              {/* 6. Company Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setCompanyExpanded(!companyExpanded)}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 cursor-pointer"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform text-slate-400",
                      companyExpanded && "rotate-180 text-sky-700"
                    )}
                  />
                </button>
                {companyExpanded && (
                  <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-sky-600 ml-2">
                    <Link
                      to="/company"
                      onClick={closeMenu}
                      className="text-sm text-slate-600 hover:text-slate-900 py-1"
                    >
                      About Mylotic
                    </Link>
                    <Link
                      to="/company/leadership"
                      onClick={closeMenu}
                      className="text-sm text-slate-600 hover:text-slate-900 py-1"
                    >
                      Leadership &amp; Governance
                    </Link>
                    <Link
                      to="/company/approach"
                      onClick={closeMenu}
                      className="text-sm text-slate-600 hover:text-slate-900 py-1"
                    >
                      Delivery Approach
                    </Link>
                  </div>
                )}
              </div>

              {/* 7. Blog */}
              <Link
                to="/blog"
                onClick={closeMenu}
                className="py-2.5 text-base font-semibold text-slate-800 hover:text-sky-700 border-b border-slate-100"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Footer inside drawer with Action Button */}
          <div className="pt-5 border-t border-slate-100 flex flex-col gap-3">
            <Link to="/contact" onClick={closeMenu} className="w-full">
              <button
                type="button"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </Link>
            <span className="text-[11px] font-mono text-slate-400 text-center">
              Mylotic Group Private Limited
            </span>
          </div>
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <div className="lg:hidden">
      {/* Mobile Drawer Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open Navigation Menu"
        className="p-2.5 rounded-xl text-[#123650] hover:text-[#0D2744] hover:bg-white/50 active:scale-95 transition-all cursor-pointer border border-white/40 shadow-2xs"
      >
        <Menu className="w-5 h-5" />
      </button>

      {drawerContent}
    </div>
  );
}
