import * as React from "react";
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

  return (
    <div className="lg:hidden">
      {/* Mobile Drawer Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open Navigation Menu"
        className="p-2 rounded-xl text-[#10213B] hover:text-[#4688B2] hover:bg-[#F0F7FB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688B2]"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Slide-over Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Blur Surface */}
          <div
            className="fixed inset-0 bg-[#060D18]/50 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-over Container */}
          <div className="relative ml-auto w-full max-w-sm bg-white/95 backdrop-blur-2xl border-l border-[#D0E3F0] h-full flex flex-col justify-between p-6 shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#D0E3F0]">
                <BrandLogo variant="light" />
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-xl text-[#5C7690] hover:text-[#10213B] hover:bg-[#F0F7FB] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-5">
                {/* 1. Solutions Accordion */}
                <div className="border-b border-[#D0E3F0]/70 pb-2">
                  <button
                    type="button"
                    onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] cursor-pointer"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform text-[#5C7690]",
                        solutionsExpanded && "rotate-180 text-[#4688B2]"
                      )}
                    />
                  </button>
                  {solutionsExpanded && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#4688B2]/40 ml-2">
                      <Link
                        to="/solutions"
                        onClick={closeMenu}
                        className="text-xs font-mono uppercase tracking-wider text-[#4688B2] font-semibold py-1 hover:underline"
                      >
                        All Practice Areas →
                      </Link>
                      {solutionsData.map((solution) => (
                        <Link
                          key={solution.id}
                          to={`/solutions/${solution.slug}`}
                          onClick={closeMenu}
                          className="text-sm text-[#243B53] hover:text-[#10213B] py-1"
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Industries Accordion */}
                <div className="border-b border-[#D0E3F0]/70 pb-2">
                  <button
                    type="button"
                    onClick={() => setIndustriesExpanded(!industriesExpanded)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] cursor-pointer"
                  >
                    <span>Industries</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform text-[#5C7690]",
                        industriesExpanded && "rotate-180 text-[#4688B2]"
                      )}
                    />
                  </button>
                  {industriesExpanded && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#4688B2]/40 ml-2">
                      <Link
                        to="/industries"
                        onClick={closeMenu}
                        className="text-xs font-mono uppercase tracking-wider text-[#4688B2] font-semibold py-1 hover:underline"
                      >
                        All Domain Practices →
                      </Link>
                      {industriesData.map((industry) => (
                        <Link
                          key={industry.id}
                          to={`/industries/${industry.slug}`}
                          onClick={closeMenu}
                          className="text-sm text-[#243B53] hover:text-[#10213B] py-1"
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
                  className="py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] border-b border-[#D0E3F0]/70"
                >
                  Technology
                </Link>

                {/* 4. Work */}
                <Link
                  to="/work"
                  onClick={closeMenu}
                  className="py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] border-b border-[#D0E3F0]/70"
                >
                  Work
                </Link>

                {/* 5. Careers */}
                <Link
                  to="/careers"
                  onClick={closeMenu}
                  className="py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] border-b border-[#D0E3F0]/70"
                >
                  Careers
                </Link>

                {/* 6. Company Accordion */}
                <div className="border-b border-[#D0E3F0]/70 pb-2">
                  <button
                    type="button"
                    onClick={() => setCompanyExpanded(!companyExpanded)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] cursor-pointer"
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform text-[#5C7690]",
                        companyExpanded && "rotate-180 text-[#4688B2]"
                      )}
                    />
                  </button>
                  {companyExpanded && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#4688B2]/40 ml-2">
                      <Link
                        to="/company"
                        onClick={closeMenu}
                        className="text-sm text-[#243B53] hover:text-[#10213B] py-1"
                      >
                        About Mylotic
                      </Link>
                      <Link
                        to="/company/leadership"
                        onClick={closeMenu}
                        className="text-sm text-[#243B53] hover:text-[#10213B] py-1"
                      >
                        Leadership &amp; Governance
                      </Link>
                      <Link
                        to="/company/approach"
                        onClick={closeMenu}
                        className="text-sm text-[#243B53] hover:text-[#10213B] py-1"
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
                  className="py-2.5 text-base font-semibold text-[#10213B] hover:text-[#4688B2] border-b border-[#D0E3F0]/70"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Footer inside drawer with Action Button */}
            <div className="pt-6 border-t border-[#D0E3F0] flex flex-col gap-3">
              <Link to="/contact" onClick={closeMenu} className="w-full">
                <button
                  type="button"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-cta-blue border border-white/60"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10213B]" />
                </button>
              </Link>
              <span className="text-[11px] font-mono text-[#5C7690] text-center">
                Mylotic Group Private Limited
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
