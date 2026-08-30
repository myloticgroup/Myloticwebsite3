import * as React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  Users,
  FileText,
  Inbox,
  Activity,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Shield,
  Briefcase,
  Layers,
  Sparkles,
  MessageSquareQuote,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  const isAdmin = user?.role === "ADMIN";

  const adminNav = [
    { label: "Overview", to: "/admin", icon: LayoutDashboard, end: true },
    { label: "Manage Content", to: "/admin/content/solutions", icon: Layers },
    { label: "Staff Users", to: "/admin/users", icon: Users },
    { label: "Lead Inbox", to: "/lead-team/leads", icon: Inbox },
    { label: "Live Analytics", to: "/lead-team", icon: Activity },
  ];

  const leadTeamNav = [
    { label: "Analytics Overview", to: "/lead-team", icon: Activity, end: true },
    { label: "Unified Lead Inbox", to: "/lead-team/leads", icon: Inbox },
    { label: "Live Visitors", to: "/lead-team/live", icon: Activity },
  ];

  const currentNav = isAdmin ? adminNav : leadTeamNav;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E1E7EF] flex flex-col md:flex-row antialiased selection:bg-[#66705A] selection:text-white">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#101418] border-r border-[#232A32] shrink-0 min-h-screen">
        {/* Header */}
        <div className="p-6 border-b border-[#232A32] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#66705A] text-white flex items-center justify-center font-bold text-sm font-mono shadow-xs group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-tight leading-tight">
                Mylotic Group
              </span>
              <span className="text-[10px] font-mono text-[#7A8490] uppercase tracking-wider">
                Internal Portal
              </span>
            </div>
          </Link>
        </div>

        {/* User Card */}
        <div className="p-4 mx-3 my-3 rounded-2xl bg-[#1B2026] border border-[#232A32] flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#232A32] text-[#A5AC92] flex items-center justify-center font-bold text-xs font-mono shrink-0 border border-[#2E3640]">
            {user?.name.slice(0, 2).toUpperCase() || "US"}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs font-semibold text-white truncate">{user?.name}</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Shield className="w-3 h-3 text-[#66705A]" />
              <span className="text-[10px] font-mono text-[#A5AC92] font-semibold uppercase">
                {user?.role}
              </span>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="px-3 py-2 flex-1 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-[#7A8490] font-semibold">
            {isAdmin ? "Admin Controls" : "Operations Hub"}
          </div>
          {currentNav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-colors font-medium cursor-pointer",
                    isActive
                      ? "bg-[#66705A] text-white font-semibold shadow-xs"
                      : "text-[#9AA4AF] hover:text-white hover:bg-[#1B2026]"
                  )
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#232A32] space-y-2">
          <Link
            to="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono text-[#7A8490] hover:text-white hover:bg-[#1B2026] transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Public Website</span>
            </span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Top Navigation */}
      <div className="md:hidden bg-[#101418] border-b border-[#232A32] p-4 flex items-center justify-between sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#66705A] text-white flex items-center justify-center font-bold text-xs font-mono">
            M
          </div>
          <span className="font-bold text-xs text-white">Mylotic Portal</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#1B2026] border border-[#232A32] text-[10px] font-mono text-[#A5AC92] font-semibold uppercase">
            {user?.role}
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-[#1B2026] text-[#9AA4AF] hover:text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-[#101418] z-30 p-6 flex flex-col justify-between border-t border-[#232A32] animate-fade-in">
          <div className="space-y-2">
            <div className="pb-2 text-[10px] font-mono uppercase tracking-widest text-[#7A8490] font-semibold">
              Navigation Menu ({user?.role})
            </div>
            {currentNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono transition-colors font-medium",
                      isActive
                        ? "bg-[#66705A] text-white font-semibold"
                        : "text-[#9AA4AF] hover:text-white hover:bg-[#1B2026]"
                    )
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#232A32] space-y-3">
            <div className="text-xs font-mono text-[#9AA4AF]">
              Logged in as <strong className="text-white">{user?.name}</strong> ({user?.email})
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                handleLogout();
              }}
              className="w-full py-3 rounded-xl bg-red-950/50 border border-red-800 text-red-300 font-mono text-xs uppercase font-semibold flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Viewport */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
}
