import * as React from "react";
import { X, Plus, Trash2, Tag, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { createContentItemApi, updateContentItemApi } from "@/services/admin.service";
import { JobOpening } from "@/types";

interface AdminJobFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveSuccess: () => void;
  initialData?: JobOpening | null;
}

export function AdminJobForm({
  isOpen,
  onClose,
  onSaveSuccess,
  initialData,
}: AdminJobFormProps) {
  const isEditMode = Boolean(initialData && (initialData._id || initialData.id));

  // Form Field States
  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = React.useState(false);
  const [department, setDepartment] = React.useState("Software Engineering");
  const [customDepartment, setCustomDepartment] = React.useState("");
  const [location, setLocation] = React.useState("Gurugram, India");

  const [employmentType, setEmploymentType] = React.useState("Full-time");
  const [experienceLevel, setExperienceLevel] = React.useState("Senior");
  const [workplaceType, setWorkplaceType] = React.useState("Hybrid");

  const [summary, setSummary] = React.useState("");

  const [responsibilities, setResponsibilities] = React.useState<string[]>([]);
  const [requirements, setRequirements] = React.useState<string[]>([]);
  const [niceToHave, setNiceToHave] = React.useState<string[]>([]);

  const [skills, setSkills] = React.useState<string[]>([]);
  const [skillInput, setSkillInput] = React.useState("");

  const [isPublished, setIsPublished] = React.useState(true);
  const [isOpenStatus, setIsOpenStatus] = React.useState(true);

  const [isSaving, setIsSaving] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  // Department predefined options
  const defaultDepartments = [
    "AI/ML",
    "Software Engineering",
    "Cloud",
    "Frontend",
    "Design",
    "Business Development",
    "Operations",
    "Custom",
  ];

  // Helper to generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // Populate form on edit mode / reset on create mode
  React.useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setSlug(initialData.slug || "");
      setSlugManuallyEdited(true);

      const deptVal = initialData.department || "Software Engineering";
      if (defaultDepartments.includes(deptVal)) {
        setDepartment(deptVal);
        setCustomDepartment("");
      } else {
        setDepartment("Custom");
        setCustomDepartment(deptVal);
      }

      setLocation(initialData.location || "Gurugram, India");
      setEmploymentType(initialData.employmentType || "Full-time");
      setExperienceLevel(initialData.experienceLevel || "Senior");
      setWorkplaceType(initialData.workplaceType || "Hybrid");

      setSummary(initialData.summary || initialData.description || "");

      setResponsibilities(
        Array.isArray(initialData.responsibilities) && initialData.responsibilities.length > 0
          ? [...initialData.responsibilities]
          : [""]
      );

      setRequirements(
        Array.isArray(initialData.requirements) && initialData.requirements.length > 0
          ? [...initialData.requirements]
          : [""]
      );

      setNiceToHave(
        Array.isArray(initialData.niceToHave) && initialData.niceToHave.length > 0
          ? [...initialData.niceToHave]
          : [""]
      );

      setSkills(Array.isArray(initialData.skills) ? [...initialData.skills] : []);

      setIsPublished(initialData.isPublished ?? true);
      setIsOpenStatus(initialData.isOpen ?? true);
    } else {
      // Create Mode Defaults
      setTitle("");
      setSlug("");
      setSlugManuallyEdited(false);
      setDepartment("Software Engineering");
      setCustomDepartment("");
      setLocation("Gurugram, India");

      setEmploymentType("Full-time");
      setExperienceLevel("Senior");
      setWorkplaceType("Hybrid");

      setSummary("");

      setResponsibilities([""]);
      setRequirements([""]);
      setNiceToHave([""]);
      setSkills([]);

      setIsPublished(true);
      setIsOpenStatus(true);
    }
    setErrorMsg(null);
  }, [initialData, isOpen]);

  // Handle title change & auto-slugify
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!slugManuallyEdited && !isEditMode) {
      setSlug(generateSlug(val));
    }
  };

  // Add / Remove item handlers for dynamic arrays
  const handleArrayChange = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    val: string
  ) => {
    const updated = [...list];
    updated[index] = val;
    setList(updated);
  };

  const handleAddArrayItem = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList([...list, ""]);
  };

  const handleRemoveArrayItem = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    index: number
  ) => {
    if (list.length === 1) {
      setList([""]);
    } else {
      setList(list.filter((_, i) => i !== index));
    }
  };

  // Skill Chip handlers
  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg("Job Title is required.");
      return;
    }
    if (!slug.trim()) {
      setErrorMsg("URL Slug is required.");
      return;
    }
    if (!summary.trim()) {
      setErrorMsg("Job Summary / Overview is required.");
      return;
    }

    setIsSaving(true);
    setErrorMsg(null);

    const finalDept = department === "Custom" ? customDepartment.trim() || "Engineering" : department;

    // Filter out empty strings from dynamic array lists
    const cleanResponsibilities = responsibilities.map((r) => r.trim()).filter(Boolean);
    const cleanRequirements = requirements.map((r) => r.trim()).filter(Boolean);
    const cleanNiceToHave = niceToHave.map((r) => r.trim()).filter(Boolean);

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      department: finalDept,
      location: location.trim(),
      employmentType,
      experienceLevel,
      workplaceType,
      summary: summary.trim(),
      description: summary.trim(),
      responsibilities: cleanResponsibilities,
      requirements: cleanRequirements,
      niceToHave: cleanNiceToHave,
      skills,
      isPublished,
      isOpen: isOpenStatus,
    };

    try {
      const targetId = initialData?._id || initialData?.id;
      if (isEditMode && targetId) {
        await updateContentItemApi("jobs", targetId, payload);
      } else {
        await createContentItemApi("jobs", payload);
      }
      onSaveSuccess();
      onClose();
    } catch (err: unknown) {
      console.error("[AdminJobForm] Error saving job:", err);
      setErrorMsg((err as Error).message || "Failed to save job requisition.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#101418] border border-[#232A32] rounded-3xl p-6 sm:p-8 space-y-6 animate-pop shadow-2xl my-auto max-h-[92vh] flex flex-col">
        {/* Form Modal Header */}
        <div className="flex items-center justify-between border-b border-[#232A32] pb-4 shrink-0">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#66705A] font-semibold block">
              {isEditMode ? "REQUISITION CMS EDIT" : "NEW REQUISITION CMS"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isEditMode ? `Edit Job: ${initialData?.title}` : "Create New Job Opening"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1B2026] text-[#7A8490] hover:text-white border border-[#2E3640] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-3 shrink-0">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="space-y-8 overflow-y-auto pr-2 flex-1">
          {/* SECTION 1: BASIC INFORMATION */}
          <div className="space-y-4">
            <div className="border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                01. Basic Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Job Title */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Job Title <span className="text-[#66705A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Principal AI & Systems Engineer"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A] transition-colors"
                />
              </div>

              {/* URL Slug */}
              <div className="space-y-1.5 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                    URL Slug <span className="text-[#66705A]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setSlug(generateSlug(title));
                      setSlugManuallyEdited(true);
                    }}
                    className="text-[11px] font-mono text-[#66705A] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Auto-Generate from Title</span>
                  </button>
                </div>
                <input
                  type="text"
                  required
                  placeholder="e.g. principal-ai-systems-engineer"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                    setSlugManuallyEdited(true);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A] transition-colors"
                />
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Department <span className="text-[#66705A]">*</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A] transition-colors"
                >
                  {defaultDepartments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                {department === "Custom" && (
                  <input
                    type="text"
                    required
                    placeholder="Enter custom department name..."
                    value={customDepartment}
                    onChange={(e) => setCustomDepartment(e.target.value)}
                    className="mt-2 w-full px-4 py-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                  />
                )}
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Location <span className="text-[#66705A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gurugram, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: EMPLOYMENT INFORMATION */}
          <div className="space-y-4">
            <div className="border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                02. Employment &amp; Work Structure
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Employment Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Employment Type
                </label>
                <select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>

              {/* Experience Level */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Experience Level
                </label>
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                >
                  <option value="Intern">Intern</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior">Senior</option>
                  <option value="Lead">Lead</option>
                  <option value="Principal">Principal</option>
                </select>
              </div>

              {/* Workplace Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                  Workplace Type
                </label>
                <select
                  value={workplaceType}
                  onChange={(e) => setWorkplaceType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                >
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 3: JOB OVERVIEW */}
          <div className="space-y-4">
            <div className="border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                03. Role Summary &amp; Overview
              </h3>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                Summary / Role Description <span className="text-[#66705A]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Architect and deploy production-grade machine learning pipelines, vector retrieval architectures, and deterministic LLM guardrails for enterprise systems..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A] leading-relaxed"
              />
            </div>
          </div>

          {/* SECTION 4: RESPONSIBILITIES (DYNAMIC LIST) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                04. Primary Responsibilities
              </h3>
              <button
                type="button"
                onClick={() => handleAddArrayItem(responsibilities, setResponsibilities)}
                className="text-xs font-mono text-[#66705A] hover:text-[#EEF3F8] flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Responsibility</span>
              </button>
            </div>

            <div className="space-y-3">
              {responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`Responsibility #${idx + 1}...`}
                    value={resp}
                    onChange={(e) =>
                      handleArrayChange(responsibilities, setResponsibilities, idx, e.target.value)
                    }
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(responsibilities, setResponsibilities, idx)}
                    className="p-2.5 rounded-xl bg-[#1B2026] hover:bg-red-950/40 text-red-400 border border-[#2E3640] transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: REQUIREMENTS (DYNAMIC LIST) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                05. Requirements &amp; Prerequisites
              </h3>
              <button
                type="button"
                onClick={() => handleAddArrayItem(requirements, setRequirements)}
                className="text-xs font-mono text-[#66705A] hover:text-[#EEF3F8] flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Requirement</span>
              </button>
            </div>

            <div className="space-y-3">
              {requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`Requirement #${idx + 1}...`}
                    value={req}
                    onChange={(e) =>
                      handleArrayChange(requirements, setRequirements, idx, e.target.value)
                    }
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(requirements, setRequirements, idx)}
                    className="p-2.5 rounded-xl bg-[#1B2026] hover:bg-red-950/40 text-red-400 border border-[#2E3640] transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 6: NICE TO HAVE (DYNAMIC LIST) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                06. Nice to Have / Advantages
              </h3>
              <button
                type="button"
                onClick={() => handleAddArrayItem(niceToHave, setNiceToHave)}
                className="text-xs font-mono text-[#66705A] hover:text-[#EEF3F8] flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Advantage</span>
              </button>
            </div>

            <div className="space-y-3">
              {niceToHave.map((nth, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`Advantage #${idx + 1}...`}
                    value={nth}
                    onChange={(e) =>
                      handleArrayChange(niceToHave, setNiceToHave, idx, e.target.value)
                    }
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(niceToHave, setNiceToHave, idx)}
                    className="p-2.5 rounded-xl bg-[#1B2026] hover:bg-red-950/40 text-red-400 border border-[#2E3640] transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7: PRIMARY SKILLS (TAG MANAGER) */}
          <div className="space-y-4">
            <div className="border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" />
                <span>07. Technical Skills &amp; Stack Chips</span>
              </h3>
            </div>

            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3.5 rounded-xl bg-[#1B2026] border border-[#2E3640]">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-[#232A32] border border-[#2E3640] text-[#EEF3F8] text-xs font-mono flex items-center gap-1.5"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-[#7A8490] hover:text-red-400 cursor-pointer ml-1"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type skill tag (e.g. Python, PyTorch, Kubernetes) and press Enter..."
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleSkillKeyDown}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] focus:outline-none focus:border-[#66705A]"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2.5 rounded-xl bg-[#232A32] hover:bg-[#2E3640] border border-[#2E3640] text-xs font-mono text-white flex items-center gap-1.5 cursor-pointer shrink-0 font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Skill</span>
              </button>
            </div>
          </div>

          {/* SECTION 8: STATUS & PUBLICATION SWITCHES */}
          <div className="space-y-4 pt-2">
            <div className="border-b border-[#232A32] pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#66705A] font-bold">
                08. Publication &amp; Application Status
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1B2026] border border-[#2E3640] flex items-center gap-3">
                <input
                  id="isPublishedCheck"
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="w-4 h-4 rounded border-[#2E3640] text-[#66705A] focus:ring-[#66705A] cursor-pointer"
                />
                <label htmlFor="isPublishedCheck" className="text-xs font-mono text-[#EEF3F8] cursor-pointer leading-relaxed">
                  <span className="font-bold block text-white">Publish to Marketing Website</span>
                  <span className="text-[11px] text-[#7A8490]">Role is listed publicly on /careers</span>
                </label>
              </div>

              <div className="p-4 rounded-xl bg-[#1B2026] border border-[#2E3640] flex items-center gap-3">
                <input
                  id="isOpenCheck"
                  type="checkbox"
                  checked={isOpenStatus}
                  onChange={(e) => setIsOpenStatus(e.target.checked)}
                  className="w-4 h-4 rounded border-[#2E3640] text-[#66705A] focus:ring-[#66705A] cursor-pointer"
                />
                <label htmlFor="isOpenCheck" className="text-xs font-mono text-[#EEF3F8] cursor-pointer leading-relaxed">
                  <span className="font-bold block text-white">Accepting Candidate Applications</span>
                  <span className="text-[11px] text-[#7A8490]">Application form is active for candidates</span>
                </label>
              </div>
            </div>
          </div>

          {/* Form Actions Footer */}
          <div className="pt-6 border-t border-[#232A32] flex items-center justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-[#1B2026] hover:bg-[#232A32] text-xs font-mono text-[#9AA4AF] hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="px-7 py-3 rounded-xl bg-[#66705A] hover:bg-[#525B48] text-white font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Saving Job Record...</span>
                </>
              ) : (
                <span>{isEditMode ? "Save Requisition Updates" : "Create Job Requisition"}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
