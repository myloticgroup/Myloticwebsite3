import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/auth-context";
import { ProtectedRoute, RoleGuard } from "@/components/auth/protected-route";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

// Public Marketing Pages
import HomePage from "@/pages/home-page";
import CompanyPage from "@/pages/company/company-page";
import ApproachPage from "@/pages/company/approach-page";
import LeadershipPage from "@/pages/company/leadership-page";
import SolutionsPage from "@/pages/solutions/solutions-page";
import SolutionDetailPage from "@/pages/solutions/solution-detail-page";
import IndustriesPage from "@/pages/industries/industries-page";
import IndustryDetailPage from "@/pages/industries/industry-detail-page";
import CareersPage from "@/pages/careers/careers-page";
import JobDetailPage from "@/pages/careers/job-detail-page";
import BlogPage from "@/pages/blog/blog-page";
import BlogDetailPage from "@/pages/blog/blog-detail-page";
import WorkPage from "@/pages/work/work-page";
import TechnologyPage from "@/pages/technology/technology-page";
import ContactPage from "@/pages/contact/contact-page";
import EducationConsultationPage from "@/pages/contact/education-consultation-page";
import PrivacyPage from "@/pages/legal/privacy-page";
import TermsPage from "@/pages/legal/terms-page";
import SecurityPage from "@/pages/legal/security-page";
import NotFoundPage from "@/pages/not-found-page";

// Auth & Dashboard Internal Pages
import { LoginPage } from "@/pages/auth/login-page";
import { LeadTeamDashboardPage } from "@/pages/lead-team/lead-team-dashboard-page";
import { LeadsPage } from "@/pages/lead-team/leads-page";
import { LiveVisitorsPage } from "@/pages/lead-team/live-visitors-page";
import { AdminDashboardPage } from "@/pages/admin/admin-dashboard-page";
import { AdminContentPage } from "@/pages/admin/admin-content-page";
import { AdminUsersPage } from "@/pages/admin/admin-users-page";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased flex flex-col min-h-screen selection:bg-slate-900 selection:text-white">
      <ScrollToTop />
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Auth Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Dashboard Experience */}
        <Route element={<ProtectedRoute />}>
          {/* Shared LEAD_TEAM & ADMIN Access Routes */}
          <Route element={<RoleGuard allowedRoles={["ADMIN", "LEAD_TEAM"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="/lead-team" element={<LeadTeamDashboardPage />} />
              <Route path="/lead-team/leads" element={<LeadsPage />} />
              <Route path="/lead-team/live" element={<LiveVisitorsPage />} />
            </Route>
          </Route>

          {/* ADMIN Only Access Routes */}
          <Route element={<RoleGuard allowedRoles={["ADMIN"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin/content" element={<Navigate to="/admin/content/solutions" replace />} />
              <Route path="/admin/content/:resource" element={<AdminContentPage />} />
              <Route path="/admin/users" element={<AdminUsersPage />} />
            </Route>
          </Route>
        </Route>

        {/* Public Marketing Site Routes (Wrapped with Header & Footer) */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Company Routes */}
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/company/approach" element={<ApproachPage />} />
                <Route path="/company/leadership" element={<LeadershipPage />} />

                {/* Solutions Routes */}
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

                {/* Industries Routes */}
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/industries/:slug" element={<IndustryDetailPage />} />

                {/* Careers Routes */}
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/careers/:slug" element={<JobDetailPage />} />

                {/* Blog & Insights Routes */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogDetailPage />} />
                <Route path="/insights" element={<Navigate to="/blog" replace />} />

                {/* Work & Technology Routes */}
                <Route path="/work" element={<WorkPage />} />
                <Route path="/technology" element={<TechnologyPage />} />

                {/* Contact Routes */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/contact/education-consultation" element={<EducationConsultationPage />} />

                {/* Legal Routes */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/security" element={<SecurityPage />} />

                {/* 404 Catch-All */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
