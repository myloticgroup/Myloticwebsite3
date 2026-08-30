import * as React from "react";
import {
  getLiveVisitorsApi,
  getSessionJourneyApi,
  LiveVisitorSession,
  SessionJourneyData,
} from "@/services/lead-team.service";
import { Activity, Clock, Laptop, Smartphone, Tablet, Globe, CheckCircle2, ChevronRight, X, Loader2, RefreshCw } from "lucide-react";

export function LiveVisitorsPage() {
  const [visitors, setVisitors] = React.useState<LiveVisitorSession[]>([]);
  const [minutes, setMinutes] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Modal for Journey trace
  const [selectedSessionId, setSelectedSessionId] = React.useState<string | null>(null);
  const [journeyData, setJourneyData] = React.useState<SessionJourneyData | null>(null);
  const [isJourneyLoading, setIsJourneyLoading] = React.useState(false);

  const fetchLiveVisitors = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getLiveVisitorsApi(minutes);
      if (res.success && res.data) {
        setVisitors(res.data);
      }
    } catch (err: any) {
      console.error("[LiveVisitorsPage] Fetch error:", err);
      setError(err.message || "Failed to fetch live visitors.");
    } finally {
      setIsLoading(false);
    }
  }, [minutes]);

  React.useEffect(() => {
    fetchLiveVisitors();
    const interval = setInterval(fetchLiveVisitors, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, [fetchLiveVisitors]);

  const handleOpenJourney = async (sessionId: string) => {
    setSelectedSessionId(sessionId);
    setIsJourneyLoading(true);
    try {
      const res = await getSessionJourneyApi(sessionId);
      if (res.success && res.data) {
        setJourneyData(res.data);
      }
    } catch (err) {
      console.error("[handleOpenJourney] Error:", err);
    } finally {
      setIsJourneyLoading(false);
    }
  };

  const getDeviceIcon = (device?: string) => {
    switch (device) {
      case "mobile":
        return <Smartphone className="w-4 h-4 text-[#66705A]" />;
      case "tablet":
        return <Tablet className="w-4 h-4 text-[#66705A]" />;
      default:
        return <Laptop className="w-4 h-4 text-[#66705A]" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232A32]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
            REAL-TIME CLIENT MONITORING
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Live Visitor Radar</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="px-3.5 py-2 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A] cursor-pointer"
          >
            <option value={5}>Active in last 5 min</option>
            <option value={15}>Active in last 15 min</option>
            <option value={30}>Active in last 30 min</option>
            <option value={60}>Active in last 60 min</option>
          </select>

          <button
            onClick={fetchLiveVisitors}
            disabled={isLoading}
            className="p-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-[#9AA4AF] hover:text-white transition-colors cursor-pointer"
            title="Refresh Live Data"
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

      {/* Visitor Grid */}
      {isLoading ? (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
          <span>Scanning active site visitor sessions...</span>
        </div>
      ) : visitors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visitors.map((v) => (
            <div
              key={v._id}
              onClick={() => handleOpenJourney(v.sessionId)}
              className="p-5 rounded-2xl bg-[#101418] border border-[#232A32] hover:border-[#66705A] hover:-translate-y-0.5 transition-all cursor-pointer space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getDeviceIcon(v.device)}
                  <span className="font-mono text-xs font-bold text-white truncate max-w-[150px]">
                    {v.sessionId.slice(0, 12)}...
                  </span>
                </div>

                {v.isConvertedToLead ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>CONVERTED</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-[#1B2026] text-[#7A8490] text-[10px] font-mono">
                    Browsing
                  </span>
                )}
              </div>

              <div className="space-y-1 text-xs font-mono text-[#9AA4AF]">
                <div className="flex items-center justify-between">
                  <span>Landing Page:</span>
                  <span className="text-[#EEF3F8] truncate max-w-[140px]">{v.landingPage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pageviews:</span>
                  <span className="text-[#A5AC92] font-bold">{v.pageViewCount} pages</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#7A8490]">
                  <span>Last Active:</span>
                  <span>{new Date(v.lastSeenAt).toLocaleTimeString()}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#232A32] flex items-center justify-between text-xs font-mono text-[#66705A] group-hover:text-[#A5AC92] transition-colors">
                <span>View Full Journey Trace</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] bg-[#101418] rounded-3xl border border-[#232A32]">
          No active visitors logged in the last {minutes} minutes.
        </div>
      )}

      {/* Session Journey Modal */}
      {selectedSessionId && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#101418] border border-[#232A32] rounded-3xl p-6 sm:p-8 space-y-6 animate-pop shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-[#232A32] pb-4 shrink-0">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#66705A] font-semibold block">
                  VISITOR BEHAVIORAL JOURNEY
                </span>
                <h3 className="text-xl font-bold text-white font-mono">
                  Session Trace: {selectedSessionId}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSessionId(null)}
                className="p-1.5 rounded-lg bg-[#1B2026] text-[#7A8490] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isJourneyLoading ? (
              <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
                <span>Reconstructing visitor journey timeline...</span>
              </div>
            ) : journeyData ? (
              <div className="overflow-y-auto pr-2 space-y-4 flex-1">
                {/* Session Meta Card */}
                {journeyData.session && (
                  <div className="p-4 rounded-2xl bg-[#1B2026] border border-[#2E3640] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div>
                      <span className="text-[#7A8490] block text-[10px]">Landing Page:</span>
                      <span className="text-white font-bold">{journeyData.session.landingPage}</span>
                    </div>
                    <div>
                      <span className="text-[#7A8490] block text-[10px]">Device:</span>
                      <span className="text-white font-bold capitalize">{journeyData.session.device || "Unknown"}</span>
                    </div>
                    <div>
                      <span className="text-[#7A8490] block text-[10px]">Conversion Status:</span>
                      <span className={journeyData.session.isConvertedToLead ? "text-emerald-400 font-bold" : "text-[#9AA4AF]"}>
                        {journeyData.session.isConvertedToLead ? "Converted Lead" : "Browsing"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Timeline */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                    Page View Timeline ({journeyData.pageViews.length} events)
                  </span>

                  {journeyData.pageViews.map((pv, idx) => (
                    <div
                      key={pv._id || idx}
                      className="p-3.5 rounded-xl bg-[#1B2026] border border-[#2E3640] flex items-start justify-between text-xs font-mono gap-3"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[#EEF3F8] font-bold block">{pv.page}</span>
                        {pv.title && <span className="text-[11px] text-[#7A8490]">{pv.title}</span>}
                      </div>
                      <span className="text-[10px] text-[#A5AC92] shrink-0">
                        {new Date(pv.occurredAt).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-xs font-mono text-[#7A8490]">
                No detailed pageview telemetry found for this session.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
