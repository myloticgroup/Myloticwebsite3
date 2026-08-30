import * as React from "react";
import { getUsersApi, createUserApi, setUserActiveApi } from "@/services/admin.service";
import { Users, Plus, Shield, CheckCircle2, XCircle, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminUsersPage() {
  const [users, setUsers] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Modal State
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "LEAD_TEAM" as "ADMIN" | "LEAD_TEAM",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fetchUsers = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getUsersApi();
      if (res.success && res.data) {
        setUsers(res.data);
      }
    } catch (err: any) {
      console.error("[AdminUsersPage] Error:", err);
      setError(err.message || "Failed to fetch staff accounts.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    try {
      const res = await setUserActiveApi(id, !currentActive);
      if (res.success) {
        fetchUsers();
      }
    } catch (err: any) {
      alert(err.message || "Failed to update user status.");
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await createUserApi({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        role: formData.role,
      });

      if (res.success) {
        setModalOpen(false);
        setFormData({ name: "", email: "", password: "", role: "LEAD_TEAM" });
        fetchUsers();
      }
    } catch (err: any) {
      alert(err.message || "Failed to create user account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232A32]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
            STAFF AUTHORIZATIONS &amp; ACCOUNTS
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Manage Staff Users
          </h1>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Onboard New Staff User</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs">
          {error}
        </div>
      )}

      {/* Users Table / List */}
      {isLoading ? (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
          <span>Fetching authorized staff account registry...</span>
        </div>
      ) : users.length > 0 ? (
        <div className="space-y-3">
          {users.map((u) => (
            <div
              key={u._id}
              className="p-5 rounded-2xl bg-[#101418] border border-[#232A32] hover:border-[#66705A]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-base text-white">{u.name}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1B2026] border border-[#2E3640] text-[#A5AC92] text-[10px] font-mono font-bold uppercase flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#66705A]" />
                    <span>{u.role}</span>
                  </span>
                  {u.isActive ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-[10px] font-mono font-bold uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Active</span>
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-[10px] font-mono uppercase flex items-center gap-1">
                      <XCircle className="w-3 h-3 text-red-400" />
                      <span>Deactivated</span>
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono text-[#7A8490]">
                  <span>Email: {u.email}</span>
                  {u.createdAt && <span className="ml-4">Joined: {new Date(u.createdAt).toLocaleDateString()}</span>}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => handleToggleActive(u._id, u.isActive)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer border",
                    u.isActive
                      ? "bg-red-950/30 text-red-300 border-red-900/60 hover:bg-red-900/40"
                      : "bg-emerald-950/30 text-emerald-300 border-emerald-900/60 hover:bg-emerald-900/40"
                  )}
                >
                  {u.isActive ? "Deactivate Account" : "Activate Account"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] bg-[#101418] rounded-3xl border border-[#232A32]">
          No staff users found. Click &quot;Onboard New Staff User&quot; to add one.
        </div>
      )}

      {/* Onboard Staff Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#101418] border border-[#232A32] rounded-3xl p-6 sm:p-8 space-y-6 animate-pop shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#232A32] pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#66705A] font-semibold block">
                  STAFF ONBOARDING PORTAL
                </span>
                <h3 className="text-xl font-bold text-white">
                  Create Authorized Account
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg bg-[#1B2026] text-[#7A8490] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Full Name <span className="text-[#66705A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Staff"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Work Email <span className="text-[#66705A]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@mylotic.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Initial Password <span className="text-[#66705A]">*</span>
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Role Permission Level
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                >
                  <option value="LEAD_TEAM">LEAD_TEAM — Inbox &amp; Traffic Analytics</option>
                  <option value="ADMIN">ADMIN — Full Content &amp; Staff Administration</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#232A32]">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#1B2026] text-xs font-mono text-[#9AA4AF] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-semibold cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Creating..." : "Create Staff Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
