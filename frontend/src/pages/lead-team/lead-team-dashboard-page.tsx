import * as React from "react";
import { Link } from "react-router-dom";
import { getAnalyticsOverviewApi, AnalyticsOverviewData } from "@/services/lead-team.service";
import { Activity, Inbox, Users, CheckCircle2, ArrowUpRight, Clock, RefreshCw, Loader2 } from "lucide-react";

export function LeadTeamDashboardPage() {
  const [data, setData] = React.useState<AnalyticsOverviewData | null>(null);
  const [hours, setHours] = React.useState(24);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchOverview = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getAnalyticsOverviewApi(hours);
      if (res.success && res.data) {
        setData(res.data);
      }
    } catch (err: any) {
      console.error("[LeadTeamDashboardPage] Error:", err);
      setError(err.message || "Failed to load analytics overview.");
    } finally {
      setIsLoading(false);
    }
  }, [hours]);

  React.useEffect(() => {
    fetchOverview();
  }, [fetchOverview]);

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232A32]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
            LEAD OPERATIONS &amp; INTELLIGENCE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Lead Team Operations Hub
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="px-3.5 py-2 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A] cursor-pointer"
          >
            <option value={6}>Last 6 Hours</option>
            <option value={24}>Last 24 Hours</option>
            <option value={72}>Last 3 Days</option>
            <option value={168}>Last 7 Days</option>
          </select>

          <button
            onClick={fetchOverview}
            disabled={isLoading}
            className="p-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-[#9AA4AF] hover:text-white transition-colors cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs">
          {error}
        </div>
      )}

      {/* Metrics Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-6 rounded-2xl bg-[#101418] border border-[#232A32] space-y-2">
          <div className="flex items-center justify-between text-[#7A8490]">
            <span className="text-xs font-mono uppercase tracking-wider">Active Sessions</span>
            <Users className="w-4 h-4 text-[#66705A]" />
          </div>
          <div className="text-3xl font-bold text-white font-mono">
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin text-[#66705A]" /> : data?.activeSessions ?? 0}
          </div>
          <p className="text-[11px] font-mono text-[#7A8490]">Unique visitors in selected period</p>
        </div>

        {/* Metric 2 */}
        <div className="p-6 rounded-2xl bg-[#101418] border border-[#232A32] space-y-2">
          <div className="flex items-center justify-between text-[#7A8490]">
            <span className="text-xs font-mono uppercase tracking-wider">Page Views</span>
            <Activity className="w-4 h-4 text-[#66705A]" />
          </div>
          <div className="text-3xl font-bold text-white font-mono">
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin text-[#66705A]" /> : data?.totalPageViews ?? 0}
          </div>
          <p className="text-[11px] font-mono text-[#7A8490]">Total page telemetry beacons</p>
        </div>

        {/* Metric 3 */}
        <div className="p-6 rounded-2xl bg-[#101418] border border-[#232A32] space-y-2">
          <div className="flex items-center justify-between text-[#7A8490]">
            <span className="text-xs font-mono uppercase tracking-wider">Converted Leads</span>
            <CheckCircle2 className="w-4 h-4 text-[#66705A]" />
          </div>
          <div className="text-3xl font-bold text-[#A5AC92] font-mono">
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin text-[#66705A]" /> : data?.convertedSessions ?? 0}
          </div>
          <p className="text-[11px] font-mono text-[#7A8490]">Sessions that submitted a form</p>
        </div>

        {/* Metric 4 */}
        <div className="p-6 rounded-2xl bg-[#101418] border border-[#232A32] space-y-2">
          <div className="flex items-center justify-between text-[#7A8490]">
            <span className="text-xs font-mono uppercase tracking-wider">Conversion Rate</span>
            <ArrowUpRight className="w-4 h-4 text-[#66705A]" />
          </div>
          <div className="text-3xl font-bold text-white font-mono">
            {data && data.activeSessions > 0
              ? `${((data.convertedSessions / data.activeSessions) * 100).toFixed(1)}%`
              : "0.0%"}
          </div>
          <p className="text-[11px] font-mono text-[#7A8490]">Form conversion percentage</p>
        </div>
      </div>

      {/* Action Quick Links & Top Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Launchpad */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-[#101418] border border-[#232A32] space-y-4">
          <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
            <Inbox className="w-5 h-5 text-[#66705A]" />
            <span>Lead Operations Launchpad</span>
          </h3>

          <div className="space-y-3">
            <Link
              to="/lead-team/leads"
              className="p-4 rounded-2xl bg-[#1B2026] border border-[#2E3640] hover:border-[#66705A] flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-sm font-bold text-white group-hover:text-[#A5AC92] transition-colors block">
                  Unified Lead Inbox &rarr;
                </span>
                <span className="text-xs font-mono text-[#7A8490]">
                  Contact, Consultation, Job Application &amp; Talent Leads
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#66705A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/lead-team/live"
              className="p-4 rounded-2xl bg-[#1B2026] border border-[#2E3640] hover:border-[#66705A] flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-sm font-bold text-white group-hover:text-[#A5AC92] transition-colors block">
                  Live Visitor Monitor &rarr;
                </span>
                <span className="text-xs font-mono text-[#7A8490]">
                  Real-time active visitors &amp; step-by-step journeys
                </span>
              </div>
              <Activity className="w-5 h-5 text-[#66705A]" />
            </Link>
          </div>
        </div>

        {/* Top Visited Pages Table */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-[#101418] border border-[#232A32] space-y-4">
          <h3 className="text-lg font-bold text-white font-mono flex items-center justify-between">
            <span>Top Visited Pages</span>
            <span className="text-xs font-mono text-[#7A8490] font-normal">Last {hours} Hours</span>
          </h3>

          {data?.topPages && data.topPages.length > 0 ? (
            <div className="space-y-2">
              {data.topPages.map((item, idx) => (
                <div
                  key={item._id || idx}
                  className="p-3 rounded-xl bg-[#1B2026] border border-[#2E3640] flex items-center justify-between text-xs font-mono"
                >
                  <span className="text-[#EEF3F8] truncate max-w-xs">{item._id}</span>
                  <span className="px-2.5 py-1 rounded bg-[#232A32] text-[#A5AC92] font-bold">
                    {item.views} views
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-xs font-mono text-[#7A8490] bg-[#1B2026] rounded-2xl border border-[#2E3640]">
              No page view telemetry logged for this period yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
