import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Shield, Layers, Users, Inbox, ArrowUpRight, Plus, FileText, Briefcase, Sparkles, MessageSquareQuote, UsersRound } from "lucide-react";

export function AdminDashboardPage() {
  const { user } = useAuth();

  const contentModules = [
    { title: "Solutions & Services", slug: "solutions", desc: "Manage enterprise capability packages & tech stack deliverables.", icon: Layers },
    { title: "Case Studies", slug: "case-studies", desc: "Manage client portfolio, metrics, and project showcases.", icon: FileText },
    { title: "Blog & Insights", slug: "blog", desc: "Publish engineering articles, leadership insights, and news.", icon: Sparkles },
    { title: "Career Requisitions", slug: "jobs", desc: "Manage open job positions, descriptions, and department requirements.", icon: Briefcase },
    { title: "Leadership & Team", slug: "team", desc: "Manage corporate executive bios, photo URLs, and display order.", icon: UsersRound },
    { title: "Client Testimonials", slug: "testimonials", desc: "Manage customer reviews, company quotes, and ratings.", icon: MessageSquareQuote },
  ];

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232A32]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
            SYSTEM ADMINISTRATION &amp; CMS
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Admin Control Center
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/users"
            className="px-4 py-2.5 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Staff Account</span>
          </Link>
        </div>
      </div>

      {/* Admin Info Banner */}
      <div className="p-6 rounded-3xl bg-[#101418] border border-[#232A32] flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#1B2026] text-[#A5AC92] border border-[#2E3640] flex items-center justify-center font-bold text-lg font-mono shrink-0">
          <Shield className="w-6 h-6 text-[#66705A]" />
        </div>
        <div>
          <h2 className="text-base font-bold text-white">
            Welcome, Administrator {user?.name}
          </h2>
          <p className="text-xs text-[#7A8490] leading-relaxed">
            You have full administrative privileges over marketing site content, media upload storage, and staff user authorizations.
          </p>
        </div>
      </div>

      {/* Content Management Modules Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white font-mono flex items-center justify-between">
          <span>Marketing CMS &amp; Content Modules</span>
          <span className="text-xs font-mono text-[#7A8490] font-normal">6 Active Resources</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.slug}
                to={`/admin/content/${mod.slug}`}
                className="p-6 rounded-2xl bg-[#101418] border border-[#232A32] hover:border-[#66705A] hover:-translate-y-0.5 transition-all group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#66705A] border border-[#2E3640] group-hover:bg-[#66705A] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7A8490] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#A5AC92] transition-colors">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-[#7A8490] mt-1 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Operations Cross-Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#232A32]">
        <Link
          to="/admin/users"
          className="p-6 rounded-3xl bg-[#101418] border border-[#232A32] hover:border-[#66705A] transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#1B2026] text-[#66705A] border border-[#2E3640]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white group-hover:text-[#A5AC92] transition-colors">
                Staff Account Management
              </h4>
              <p className="text-xs text-[#7A8490] mt-0.5">
                Onboard new Lead Team members or toggle account active status.
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#66705A]" />
        </Link>

        <Link
          to="/lead-team/leads"
          className="p-6 rounded-3xl bg-[#101418] border border-[#232A32] hover:border-[#66705A] transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#1B2026] text-[#66705A] border border-[#2E3640]">
              <Inbox className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white group-hover:text-[#A5AC92] transition-colors">
                Lead Operations Hub
              </h4>
              <p className="text-xs text-[#7A8490] mt-0.5">
                Inspect inbound leads, CEO escalations, and traffic journeys.
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#66705A]" />
        </Link>
      </div>
    </div>
  );
}
