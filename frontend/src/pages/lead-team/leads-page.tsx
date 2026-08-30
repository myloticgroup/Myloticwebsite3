import * as React from "react";
import { getLeadsApi, updateLeadStatusApi } from "@/services/lead-team.service";
import { LEAD_STATUS_OPTIONS } from "@/types/backend.types";
import {
  Inbox,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  FileText,
  MessageSquare,
  Clock,
  User,
  Building,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function LeadsPage() {
  const [activeTab, setActiveTab] = React.useState<"contact" | "consultation" | "jobApplication" | "talent">("contact");
  const [statusFilter, setStatusFilter] = React.useState<string>("");
  const [leads, setLeads] = React.useState<any[]>([]);
  const [pagination, setPagination] = React.useState({ page: 1, totalPages: 1, total: 0 });
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Selected lead for status update modal
  const [selectedLead, setSelectedLead] = React.useState<any | null>(null);
  const [newStatus, setNewStatus] = React.useState("");
  const [newNotes, setNewNotes] = React.useState("");
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [modalError, setModalError] = React.useState<string | null>(null);

  const currentTabOptions = LEAD_STATUS_OPTIONS[activeTab] || LEAD_STATUS_OPTIONS.contact;

  const fetchLeads = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getLeadsApi(activeTab, statusFilter || undefined, pagination.page, 20);
      if (res.success && res.data) {
        setLeads(res.data);
        if (res.meta) {
          setPagination({ page: res.meta.page, totalPages: res.meta.totalPages, total: res.meta.total });
        }
      }
    } catch (err: any) {
      console.error("[LeadsPage] Fetch error:", err);
      setError(err.message || "Failed to fetch leads.");
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, statusFilter, pagination.page]);

  React.useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleOpenModal = (lead: any) => {
    setSelectedLead(lead);
    const validOpts = LEAD_STATUS_OPTIONS[activeTab] || LEAD_STATUS_OPTIONS.contact;
    const initialStatus = validOpts.some((opt) => opt.value === lead.status)
      ? lead.status
      : validOpts[0]?.value || "NEW";

    setNewStatus(initialStatus);
    setNewNotes(lead.notes || lead.internalNotes || "");
    setModalError(null);
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead) return;

    setIsUpdating(true);
    setModalError(null);
    try {
      const res = await updateLeadStatusApi(activeTab, selectedLead._id, newStatus, newNotes);
      if (res.success) {
        setSelectedLead(null);
        fetchLeads();
      } else {
        setModalError(res.message || "Failed to update lead status.");
      }
    } catch (err: any) {
      console.error("[LeadsPage] Update lead status error:", err);
      setModalError(err.message || "Failed to update lead status.");
    } finally {
      setIsUpdating(false);
    }
  };

  const tabs = [
    { key: "contact", label: "Contact Us Leads" },
    { key: "consultation", label: "EdTech Consultations" },
    { key: "jobApplication", label: "Job Applications" },
    { key: "talent", label: "Talent Pool Signups" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232A32]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
            INBOUND PIPELINE MANAGEMENT
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Unified Lead Inbox
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A] cursor-pointer"
          >
            <option value="">All Statuses</option>
            {currentTabOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#232A32] pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key as any);
              setStatusFilter("");
              setPagination({ ...pagination, page: 1 });
            }}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-mono transition-colors font-semibold cursor-pointer",
              activeTab === tab.key
                ? "bg-[#66705A] text-white shadow-xs"
                : "bg-[#101418] text-[#9AA4AF] border border-[#232A32] hover:text-white hover:bg-[#1B2026]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs">
          {error}
        </div>
      )}

      {/* Leads List / Table */}
      {isLoading ? (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
          <span>Fetching inbound lead pipeline data...</span>
        </div>
      ) : leads.length > 0 ? (
        <div className="space-y-4">
          {leads.map((lead) => (
            <div
              key={lead._id}
              className="p-6 rounded-2xl bg-[#101418] border border-[#232A32] hover:border-[#66705A]/50 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              {/* Main Information */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-base text-white">
                    {lead.fullName}
                  </span>

                  {lead.priority === "CEO_DIRECT" && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-700 text-red-300 text-[10px] font-mono font-bold tracking-wide uppercase flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-red-400" />
                      <span>CEO DIRECT ESCALATION</span>
                    </span>
                  )}

                  <span className="px-2.5 py-0.5 rounded-full bg-[#1B2026] border border-[#2E3640] text-[#A5AC92] text-[10px] font-mono font-semibold uppercase">
                    {lead.status || "NEW"}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A8490]">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#66705A]" />
                    <span className="text-[#EEF3F8]">{lead.email}</span>
                  </span>
                  {lead.phone && (
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#66705A]" />
                      <span>{lead.phone}</span>
                    </span>
                  )}
                  {lead.company && (
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-[#66705A]" />
                      <span>{lead.company}</span>
                    </span>
                  )}
                  {lead.primarySkill && (
                    <span className="px-2 py-0.5 rounded bg-[#1B2026] text-[#A5AC92]">
                      Skill: {lead.primarySkill}
                    </span>
                  )}
                </div>

                {/* Message / Details */}
                {(lead.message || lead.educationRequirement || lead.coverLetter) && (
                  <p className="text-xs text-[#9AA4AF] leading-relaxed bg-[#1B2026] p-3 rounded-xl border border-[#2E3640] max-w-3xl mt-2">
                    {lead.message || lead.educationRequirement || lead.coverLetter}
                  </p>
                )}

                {/* Internal Notes */}
                {(lead.notes || lead.internalNotes) && (
                  <div className="text-[11px] font-mono text-[#66705A] flex items-center gap-1 mt-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>Internal Note: {lead.notes || lead.internalNotes}</span>
                  </div>
                )}
              </div>

              {/* Action Side */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-start">
                {lead.resumeUrl && (
                  <a
                    href={lead.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-xl bg-[#1B2026] hover:bg-[#232A32] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#66705A]" />
                    <span>Resume</span>
                  </a>
                )}

                <button
                  onClick={() => handleOpenModal(lead)}
                  className="px-4 py-2 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white text-xs font-mono font-semibold transition-colors cursor-pointer"
                >
                  Update Status
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] bg-[#101418] rounded-3xl border border-[#232A32]">
          No inbound leads found for this tab filter.
        </div>
      )}

      {/* Update Status Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#101418] border border-[#232A32] rounded-3xl p-6 sm:p-8 space-y-6 animate-pop shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#232A32] pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#66705A] font-semibold block">
                  LEAD LIFECYCLE UPDATE
                </span>
                <h3 className="text-xl font-bold text-white">
                  Update {selectedLead.fullName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-lg bg-[#1B2026] text-[#7A8490] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalError && (
              <div className="p-4 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{modalError}</span>
              </div>
            )}

            <form onSubmit={handleUpdateStatus} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Lifecycle Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A] cursor-pointer"
                >
                  {currentTabOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Internal Follow-up Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Log outreach outcome, client response, or next steps..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#232A32]">
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#1B2026] text-xs font-mono text-[#9AA4AF] hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-6 py-2.5 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-semibold cursor-pointer disabled:opacity-50 flex items-center gap-2"
                >
                  {isUpdating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Saving Status...</span>
                    </>
                  ) : (
                    <span>Save Status</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
