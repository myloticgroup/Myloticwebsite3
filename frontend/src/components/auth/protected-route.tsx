import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@/types/auth.types";
import { Loader2 } from "lucide-react";

export function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0F14] text-[#E1E7EF] flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#66705A] animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#7A8490]">
          Verifying Session &amp; Permissions...
        </span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

interface RoleGuardProps {
  allowedRoles: UserRole[];
}

export function RoleGuard({ allowedRoles }: RoleGuardProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // If a LEAD_TEAM user tries to access /admin, redirect to /lead-team
    if (user.role === "LEAD_TEAM") {
      return <Navigate to="/lead-team" replace />;
    }
    // Default fallback redirect to appropriate dashboard
    return <Navigate to={user.role === "ADMIN" ? "/admin" : "/lead-team"} replace />;
  }

  return <Outlet />;
}
