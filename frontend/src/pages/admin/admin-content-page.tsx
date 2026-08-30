import * as React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getContentListApi,
  createContentItemApi,
  updateContentItemApi,
  deleteContentItemApi,
  uploadMediaApi,
  AdminContentResource,
} from "@/services/admin.service";
import {
  Plus,
  Edit2,
  Trash2,
  Upload,
  CheckCircle2,
  X,
  Loader2,
  Layers,
  FileText,
  Sparkles,
  Briefcase,
  UsersRound,
  MessageSquareQuote,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AdminJobForm } from "./components/admin-job-form";

export function AdminContentPage() {
  const { resource = "solutions" } = useParams<{ resource: AdminContentResource }>();
  const navigate = useNavigate();

  const [items, setItems] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Modal State
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState<any | null>(null);
  const [formData, setFormData] = React.useState<Record<string, any>>({});
  const [isSaving, setIsSaving] = React.useState(false);
  const [uploadingImage, setUploadingImage] = React.useState(false);

  const fetchContent = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getContentListApi(resource as AdminContentResource);
      if (res.success && res.data) {
        setItems(res.data);
      }
    } catch (err: any) {
      console.error("[AdminContentPage] Error:", err);
      setError(err.message || "Failed to load content resources.");
    } finally {
      setIsLoading(false);
    }
  }, [resource]);

  React.useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({ isPublished: true, isOpen: true });
    setModalOpen(true);
  };

  const handleOpenEdit = (item: any) => {
    setEditingItem(item);
    setFormData({ ...item });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this content item?")) return;
    try {
      const res = await deleteContentItemApi(resource as AdminContentResource, id);
      if (res.success) {
        fetchContent();
      }
    } catch (err: any) {
      alert(err.message || "Failed to delete item.");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setUploadingImage(true);
      try {
        const res = await uploadMediaApi(e.target.files[0]);
        if (res.success && res.data?.url) {
          setFormData((prev) => ({ ...prev, [fieldName]: res.data.url }));
        }
      } catch (err: any) {
        alert(err.message || "Failed to upload image.");
      } finally {
        setUploadingImage(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      if (editingItem) {
        await updateContentItemApi(resource as AdminContentResource, editingItem._id, formData);
      } else {
        await createContentItemApi(resource as AdminContentResource, formData);
      }
      setModalOpen(false);
      fetchContent();
    } catch (err: any) {
      alert(err.message || "Failed to save content item.");
    } finally {
      setIsSaving(false);
    }
  };

  const tabs: { key: AdminContentResource; label: string; icon: any }[] = [
    { key: "solutions", label: "Solutions", icon: Layers },
    { key: "case-studies", label: "Case Studies", icon: FileText },
    { key: "blog", label: "Blog", icon: Sparkles },
    { key: "jobs", label: "Careers Jobs", icon: Briefcase },
    { key: "team", label: "Leadership Team", icon: UsersRound },
    { key: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232A32]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
            DYNAMIC CONTENT MANAGEMENT
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize">
            Manage {resource.replace("-", " ")}
          </h1>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New {resource.slice(0, -1).replace("-", " ")}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#232A32] pb-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link
              key={tab.key}
              to={`/admin/content/${tab.key}`}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-mono transition-colors font-semibold flex items-center gap-2",
                resource === tab.key
                  ? "bg-[#66705A] text-white shadow-xs"
                  : "bg-[#101418] text-[#9AA4AF] border border-[#232A32] hover:text-white hover:bg-[#1B2026]"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs">
          {error}
        </div>
      )}

      {/* Table / Cards List */}
      {isLoading ? (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
          <span>Fetching content records from backend...</span>
        </div>
      ) : items.length > 0 ? (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item._id}
              className="p-5 rounded-2xl bg-[#101418] border border-[#232A32] hover:border-[#66705A]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-white">
                    {item.title || item.name || item.clientName}
                  </span>
                  {(item.isPublished ?? item.isOpen ?? true) ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-[10px] font-mono font-bold uppercase">
                      Published / Open
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-[#1B2026] text-[#7A8490] text-[10px] font-mono uppercase">
                      Draft / Closed
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A8490]">
                  {item.slug && <span>Slug: /{item.slug}</span>}
                  {item.author && <span>Author: {item.author}</span>}
                  {item.department && <span>Dept: {item.department}</span>}
                  {item.clientCompany && <span>Company: {item.clientCompany}</span>}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-2 rounded-xl bg-[#1B2026] hover:bg-[#232A32] text-[#EEF3F8] border border-[#2E3640] transition-colors cursor-pointer"
                  title="Edit Content"
                >
                  <Edit2 className="w-4 h-4 text-[#66705A]" />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-2 rounded-xl bg-[#1B2026] hover:bg-red-950/40 text-red-400 border border-[#2E3640] transition-colors cursor-pointer"
                  title="Delete Content"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center text-xs font-mono text-[#7A8490] bg-[#101418] rounded-3xl border border-[#232A32]">
          No content items found for this resource. Click &quot;New Item&quot; to create one.
        </div>
      )}

      {/* Create / Edit Modal */}
      {resource === "jobs" ? (
        <AdminJobForm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSaveSuccess={fetchContent}
          initialData={editingItem}
        />
      ) : (
        modalOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-[#101418] border border-[#232A32] rounded-3xl p-6 sm:p-8 space-y-6 animate-pop shadow-2xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between border-b border-[#232A32] pb-4 shrink-0">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#66705A] font-semibold block">
                    {editingItem ? "EDIT RESOURCE RECORD" : "CREATE NEW RESOURCE"}
                  </span>
                  <h3 className="text-xl font-bold text-white capitalize">
                    {editingItem ? `Edit ${resource.slice(0, -1)}` : `New ${resource.slice(0, -1)}`}
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg bg-[#1B2026] text-[#7A8490] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto pr-2 flex-1">
                {/* Title / Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                    Title / Name <span className="text-[#66705A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title || formData.name || formData.clientName || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (resource === "team") setFormData({ ...formData, name: val });
                      else if (resource === "testimonials") setFormData({ ...formData, clientName: val });
                      else setFormData({ ...formData, title: val });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                  />
                </div>

                {/* Slug (for solutions, case-studies, blog) */}
                {["solutions", "case-studies", "blog"].includes(resource) && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                      URL Slug <span className="text-[#66705A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. cloud-modernization"
                      value={formData.slug || ""}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                    />
                  </div>
                )}

                {/* Cover Image / Photo Upload */}
                {["case-studies", "blog", "team", "testimonials"].includes(resource) && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                      Media Asset / Image
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Image URL or upload file below..."
                        value={formData.coverImageUrl || formData.photoUrl || formData.avatarUrl || ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (resource === "team") setFormData({ ...formData, photoUrl: val });
                          else if (resource === "testimonials") setFormData({ ...formData, avatarUrl: val });
                          else setFormData({ ...formData, coverImageUrl: val });
                        }}
                        className="flex-1 px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                      />
                      <label className="px-4 py-3 rounded-xl bg-[#232A32] hover:bg-[#2E3640] border border-[#2E3640] text-xs font-mono text-white flex items-center gap-2 cursor-pointer">
                        <Upload className="w-4 h-4 text-[#66705A]" />
                        <span>{uploadingImage ? "Uploading..." : "Upload File"}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleImageUpload(
                              e,
                              resource === "team" ? "photoUrl" : resource === "testimonials" ? "avatarUrl" : "coverImageUrl"
                            )
                          }
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Tagline / Excerpt / Summary / Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                    Description / Excerpt / Overview
                  </label>
                  <textarea
                    rows={4}
                    value={formData.tagline || formData.excerpt || formData.summary || formData.description || formData.quote || formData.bio || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (resource === "solutions") setFormData({ ...formData, tagline: val, shortDescription: val, overview: val });
                      else if (resource === "blog") setFormData({ ...formData, excerpt: val, content: val });
                      else if (resource === "case-studies") setFormData({ ...formData, summary: val });
                      else if (resource === "testimonials") setFormData({ ...formData, quote: val });
                      else if (resource === "team") setFormData({ ...formData, bio: val });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A]"
                  />
                </div>

                {/* Author (for blog) */}
                {resource === "blog" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={formData.author || ""}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8]"
                    />
                  </div>
                )}

                {/* Company (for testimonials & case-studies) */}
                {["testimonials", "case-studies"].includes(resource) && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                      Client Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.clientCompany || formData.clientName || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (resource === "testimonials") setFormData({ ...formData, clientCompany: val });
                        else setFormData({ ...formData, clientName: val });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8]"
                    />
                  </div>
                )}

                {/* Published Switch */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    id="pubCheck"
                    type="checkbox"
                    checked={formData.isPublished ?? true}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    className="w-4 h-4 rounded border-[#2E3640] text-[#66705A] focus:ring-[#66705A]"
                  />
                  <label htmlFor="pubCheck" className="text-xs font-mono text-[#EEF3F8] cursor-pointer">
                    Publish to Public Marketing Website
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#232A32] shrink-0">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#1B2026] text-xs font-mono text-[#9AA4AF] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2.5 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-semibold cursor-pointer disabled:opacity-50"
                  >
                    {isSaving ? "Saving..." : "Save Record"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      )}
    </div>
  );
}
