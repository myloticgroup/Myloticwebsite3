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
        className="p-2 rounded-md text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Slide-over Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Blur Surface */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-over Container */}
          <div className="relative ml-auto w-full max-w-sm bg-[#F7F5EF] border-l border-[#E8E6DE] h-full flex flex-col justify-between p-6 shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8E6DE]">
                <BrandLogo variant="light" />
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-md text-[#555850] hover:text-[#171A17] hover:bg-[#E8E6DE] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-5">
                {/* 1. Solutions Accordion */}
                <div className="border-b border-[#E8E6DE]/70 pb-2">
                  <button
                    type="button"
                    onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] cursor-pointer"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform text-[#73766D]",
                        solutionsExpanded && "rotate-180 text-[#66705A]"
                      )}
                    />
                  </button>
                  {solutionsExpanded && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#66705A]/40 ml-2">
                      <Link
                        to="/solutions"
                        onClick={closeMenu}
                        className="text-xs font-mono uppercase tracking-wider text-[#66705A] font-semibold py-1 hover:underline"
                      >
                        All Practice Areas →
                      </Link>
                      {solutionsData.map((solution) => (
                        <Link
                          key={solution.id}
                          to={`/solutions/${solution.slug}`}
                          onClick={closeMenu}
                          className="text-sm text-[#555850] hover:text-[#171A17] py-1"
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Industries Accordion */}
                <div className="border-b border-[#E8E6DE]/70 pb-2">
                  <button
                    type="button"
                    onClick={() => setIndustriesExpanded(!industriesExpanded)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] cursor-pointer"
                  >
                    <span>Industries</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform text-[#73766D]",
                        industriesExpanded && "rotate-180 text-[#66705A]"
                      )}
                    />
                  </button>
                  {industriesExpanded && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#66705A]/40 ml-2">
                      <Link
                        to="/industries"
                        onClick={closeMenu}
                        className="text-xs font-mono uppercase tracking-wider text-[#66705A] font-semibold py-1 hover:underline"
                      >
                        All Domain Practices →
                      </Link>
                      {industriesData.map((industry) => (
                        <Link
                          key={industry.id}
                          to={`/industries/${industry.slug}`}
                          onClick={closeMenu}
                          className="text-sm text-[#555850] hover:text-[#171A17] py-1"
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
                  className="py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] border-b border-[#E8E6DE]/70"
                >
                  Technology
                </Link>

                {/* 4. Work */}
                <Link
                  to="/work"
                  onClick={closeMenu}
                  className="py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] border-b border-[#E8E6DE]/70"
                >
                  Work
                </Link>

                {/* 5. Careers */}
                <Link
                  to="/careers"
                  onClick={closeMenu}
                  className="py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] border-b border-[#E8E6DE]/70"
                >
                  Careers
                </Link>

                {/* 6. Company Accordion */}
                <div className="border-b border-[#E8E6DE]/70 pb-2">
                  <button
                    type="button"
                    onClick={() => setCompanyExpanded(!companyExpanded)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] cursor-pointer"
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform text-[#73766D]",
                        companyExpanded && "rotate-180 text-[#66705A]"
                      )}
                    />
                  </button>
                  {companyExpanded && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#66705A]/40 ml-2">
                      <Link
                        to="/company"
                        onClick={closeMenu}
                        className="text-sm text-[#555850] hover:text-[#171A17] py-1"
                      >
                        About Mylotic
                      </Link>
                      <Link
                        to="/company/leadership"
                        onClick={closeMenu}
                        className="text-sm text-[#555850] hover:text-[#171A17] py-1"
                      >
                        Leadership &amp; Governance
                      </Link>
                      <Link
                        to="/company/approach"
                        onClick={closeMenu}
                        className="text-sm text-[#555850] hover:text-[#171A17] py-1"
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
                  className="py-2.5 text-base font-semibold text-[#171A17] hover:text-[#66705A] border-b border-[#E8E6DE]/70"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Footer inside drawer with Action Button */}
            <div className="pt-6 border-t border-[#E8E6DE] flex flex-col gap-3">
              <Link to="/contact" onClick={closeMenu} className="w-full">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-md bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5AC92]" />
                </button>
              </Link>
              <span className="text-[11px] font-mono text-[#73766D] text-center">
                Mylotic Group Private Limited
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
