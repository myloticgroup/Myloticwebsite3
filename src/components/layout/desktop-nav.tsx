import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Sparkles,
  Code2,
  Cloud,
  Users2,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Landmark,
  BookOpen,
  Tv,
  Cpu,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";

const solutionIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="w-4 h-4 text-[#66705A]" />,
  "software-engineering": <Code2 className="w-4 h-4 text-[#66705A]" />,
  "digital-transformation": <Cloud className="w-4 h-4 text-[#66705A]" />,
  staffing: <Users2 className="w-4 h-4 text-[#66705A]" />,
  "managed-services": <ShieldCheck className="w-4 h-4 text-[#66705A]" />,
  "edtech-training": <GraduationCap className="w-4 h-4 text-[#66705A]" />,
};

const industryIcons: Record<string, React.ReactNode> = {
  "ai-intelligent-technology": <Sparkles className="w-4 h-4 text-[#66705A]" />,
  "it-digital-technology": <Code2 className="w-4 h-4 text-[#66705A]" />,
  "global-capability-centers": <Globe className="w-4 h-4 text-[#66705A]" />,
  fintech: <Landmark className="w-4 h-4 text-[#66705A]" />,
  edtech: <BookOpen className="w-4 h-4 text-[#66705A]" />,
  "media-advertising": <Tv className="w-4 h-4 text-[#66705A]" />,
  "enterprise-tech": <Cpu className="w-4 h-4 text-[#66705A]" />,
};

export function DesktopNav() {
  const location = useLocation();
  const pathname = location.pathname;
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDropdown();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      className="hidden lg:flex items-center gap-1 text-xs xl:text-[13px] font-medium"
      aria-label="Main Navigation"
    >
      {/* 1. Solutions Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("solutions")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() =>
            setActiveDropdown((prev) => (prev === "solutions" ? null : "solutions"))
          }
          aria-expanded={activeDropdown === "solutions"}
          aria-haspopup="true"
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer",
            "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
            (activeDropdown === "solutions" || pathname?.startsWith("/solutions")) &&
              "text-[#171A17] bg-[#E8E6DE] font-semibold"
          )}
        >
          <span>Solutions</span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-200 text-[#555850]",
              activeDropdown === "solutions" && "rotate-180 text-[#171A17]"
            )}
          />
        </button>

        {activeDropdown === "solutions" && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[820px] z-50 animate-fade-in"
            role="region"
            aria-label="Solutions Menu"
          >
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E6DE] p-6 shadow-dropdown grid grid-cols-12 gap-6">
              {/* Editorial Spotlight */}
              <div className="col-span-4 bg-[#F7F5EF] rounded-xl p-5 border border-[#E8E6DE] flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider text-[#66705A] font-semibold bg-[#E8E6DE] mb-3">
                    <Sparkles className="w-3 h-3 text-[#66705A]" /> Practice Area
                  </span>
                  <h3 className="text-sm font-bold text-[#171A17] mb-2 leading-snug">
                    AI &amp; Intelligent Systems
                  </h3>
                  <p className="text-xs text-[#555850] leading-relaxed font-normal">
                    Deploying production-grade machine learning models, vector search, and automated workflows.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E6DE] mt-4 flex flex-col gap-2">
                  <Link
                    to="/solutions/ai"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#66705A] hover:text-[#4C5642] transition-colors group"
                  >
                    <span>Explore AI Practice</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/solutions"
                    onClick={closeDropdown}
                    className="text-xs text-[#73766D] hover:text-[#242622] transition-colors"
                  >
                    View all 6 practice areas →
                  </Link>
                </div>
              </div>

              {/* Grid of Verified Solutions */}
              <div className="col-span-8 grid grid-cols-2 gap-2">
                {solutionsData.map((solution) => (
                  <Link
                    key={solution.id}
                    to={`/solutions/${solution.slug}`}
                    onClick={closeDropdown}
                    className="group p-3 rounded-xl hover:bg-[#F7F5EF] border border-transparent hover:border-[#E8E6DE] transition-all duration-200 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#F1F0EA] border border-[#E8E6DE] text-[#66705A] shrink-0 mt-0.5 group-hover:bg-[#E8E6DE] group-hover:scale-105 transition-all duration-200 shadow-2xs">
                      {solutionIcons[solution.slug] || (
                        <Code2 className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors block">
                        {solution.title.split("&")[0].trim()}
                      </span>
                      <span className="text-xs text-[#555850] line-clamp-1 mt-0.5 font-normal">
                        {solution.shortDescription}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. Industries Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("industries")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() =>
            setActiveDropdown((prev) => (prev === "industries" ? null : "industries"))
          }
          aria-expanded={activeDropdown === "industries"}
          aria-haspopup="true"
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer",
            "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
            (activeDropdown === "industries" || pathname?.startsWith("/industries")) &&
              "text-[#171A17] bg-[#E8E6DE] font-semibold"
          )}
        >
          <span>Industries</span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-200 text-[#555850]",
              activeDropdown === "industries" && "rotate-180 text-[#171A17]"
            )}
          />
        </button>

        {activeDropdown === "industries" && (
          <div
            className="absolute left-0 top-full pt-2 w-[460px] z-50 animate-fade-in"
            role="region"
            aria-label="Industries Menu"
          >
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E6DE] p-3 shadow-dropdown flex flex-col gap-1">
              {industriesData.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.slug}`}
                  onClick={closeDropdown}
                  className="group p-3 rounded-xl hover:bg-[#F7F5EF] border border-transparent hover:border-[#E8E6DE] transition-all duration-200 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-[#F1F0EA] border border-[#E8E6DE] text-[#66705A] shrink-0 mt-0.5 group-hover:bg-[#E8E6DE] group-hover:scale-105 transition-all duration-200 shadow-2xs">
                    {industryIcons[industry.slug] || (
                      <Landmark className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors block">
                      {industry.name}
                    </span>
                    <span className="text-xs text-[#555850] line-clamp-1 mt-0.5 font-normal">
                      {industry.headline}
                    </span>
                  </div>
                </Link>
              ))}

              <div className="pt-2 mt-1 border-t border-[#E8E6DE] px-3">
                <Link
                  to="/industries"
                  onClick={closeDropdown}
                  className="text-xs font-semibold text-[#66705A] hover:underline"
                >
                  View all industry domain practices →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Technology */}
      <Link
        to="/technology"
        className={cn(
          "px-3 py-2 rounded-md transition-all duration-200",
          "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
          pathname === "/technology" && "text-[#171A17] bg-[#E8E6DE] font-semibold"
        )}
      >
        Technology
      </Link>

      {/* 4. Work */}
      <Link
        to="/work"
        className={cn(
          "px-3 py-2 rounded-md transition-all duration-200",
          "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
          pathname === "/work" && "text-[#171A17] bg-[#E8E6DE] font-semibold"
        )}
      >
        Work
      </Link>

      {/* 5. Careers */}
      <Link
        to="/careers"
        className={cn(
          "px-3 py-2 rounded-md transition-all duration-200",
          "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
          pathname?.startsWith("/careers") && "text-[#171A17] bg-[#E8E6DE] font-semibold"
        )}
      >
        Careers
      </Link>

      {/* 6. Company Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("company")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() =>
            setActiveDropdown((prev) => (prev === "company" ? null : "company"))
          }
          aria-expanded={activeDropdown === "company"}
          aria-haspopup="true"
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer",
            "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
            (activeDropdown === "company" || pathname?.startsWith("/company")) &&
              "text-[#171A17] bg-[#E8E6DE] font-semibold"
          )}
        >
          <span>Company</span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-200 text-[#555850]",
              activeDropdown === "company" && "rotate-180 text-[#171A17]"
            )}
          />
        </button>

        {activeDropdown === "company" && (
          <div
            className="absolute left-0 top-full pt-2 w-[340px] z-50 animate-fade-in"
            role="region"
            aria-label="Company Menu"
          >
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E6DE] p-3 shadow-dropdown flex flex-col gap-1">
              <Link
                to="/company"
                onClick={closeDropdown}
                className="group p-3 rounded-xl hover:bg-[#F7F5EF] transition-all duration-200 flex flex-col"
              >
                <span className="text-sm font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors">
                  About Mylotic
                </span>
                <span className="text-xs text-[#555850] mt-0.5 font-normal">
                  Our corporate mission, engineering philosophy, and values.
                </span>
              </Link>

              <Link
                to="/company/leadership"
                onClick={closeDropdown}
                className="group p-3 rounded-xl hover:bg-[#F7F5EF] transition-all duration-200 flex flex-col"
              >
                <span className="text-sm font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors">
                  Leadership &amp; Governance
                </span>
                <span className="text-xs text-[#555850] mt-0.5 font-normal">
                  Executive leadership and corporate governance.
                </span>
              </Link>

              <Link
                to="/company/approach"
                onClick={closeDropdown}
                className="group p-3 rounded-xl hover:bg-[#F7F5EF] transition-all duration-200 flex flex-col"
              >
                <span className="text-sm font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors">
                  Our Delivery Approach
                </span>
                <span className="text-xs text-[#555850] mt-0.5 font-normal">
                  How we architect, engineer, and deliver technology.
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 7. Blog */}
      <Link
        to="/blog"
        className={cn(
          "px-3 py-2 rounded-md transition-all duration-200",
          "text-[#242622] hover:text-[#171A17] hover:bg-[#E8E6DE]/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66705A]",
          (pathname === "/blog" || pathname?.startsWith("/blog/")) && "text-[#171A17] bg-[#E8E6DE] font-semibold"
        )}
      >
        Blog
      </Link>
    </nav>
  );
}
