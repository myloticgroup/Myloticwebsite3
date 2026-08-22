import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "./brand-logo";
import { companyData } from "@/data/company";
import { footerNavigation } from "@/data/navigation";
import { Mail, MapPin } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#171A17] border-t border-[#333830] text-[#A5AC92] mt-auto relative overflow-hidden">
      <Container size="default" className="relative z-10">
        {/* Main Footer Grid */}
        <div className="py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Brand & Editorial Summary (Span 5 on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <BrandLogo variant="dark" />

            <p className="text-sm text-[#E8E6DE] leading-relaxed max-w-sm">
              {companyData.summary}
            </p>

            {/* Verified Public Location & Contact */}
            <div className="flex flex-col gap-2.5 pt-2 text-xs font-mono text-[#A5AC92]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-[#E8E6DE] leading-tight">
                  Gurugram, Haryana, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-[#E8E6DE] hover:text-white transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns (Span 7 on Desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerNavigation.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#F7F5EF] font-semibold">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {column.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        className="text-xs sm:text-sm text-[#A5AC92] hover:text-[#F7F5EF] transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Verified Social Channels */}
        <div className="py-8 border-t border-[#333830] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73766D]">
          <p>
            © {currentYear} {companyData.legalName}. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {footerNavigation.legal.map((legalItem) => (
              <Link
                key={legalItem.title}
                to={legalItem.href}
                className="text-[#A5AC92] hover:text-[#F7F5EF] transition-colors"
              >
                {legalItem.title}
              </Link>
            ))}
          </div>

          {/* Verified Social Channels */}
          <div className="flex items-center gap-3">
            {companyData.socialLinks.map((social) => {
              const Icon =
                social.platform === "linkedin"
                  ? LinkedInIcon
                  : social.platform === "twitter"
                  ? TwitterIcon
                  : GitHubIcon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg text-[#A5AC92] hover:text-[#F7F5EF] hover:bg-[#242622] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
