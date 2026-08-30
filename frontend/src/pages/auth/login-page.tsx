import * as React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Shield, ArrowRight, AlertCircle, Lock, Loader2 } from "lucide-react";

export function LoginPage() {
  const { login, user, isLoading: isAuthLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const from = (location.state as any)?.from?.pathname;

  React.useEffect(() => {
    if (!isAuthLoading && user) {
      const target = from || (user.role === "ADMIN" ? "/admin" : "/lead-team");
      navigate(target, { replace: true });
    }
  }, [user, isAuthLoading, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const loggedUser = await login({ email: email.trim(), password });
      const target = from || (loggedUser.role === "ADMIN" ? "/admin" : "/lead-team");
      navigate(target, { replace: true });
    } catch (err: any) {
      console.error("[LoginPage] Login error:", err);
      setErrorMessage(err.message || "Invalid email or password. Please check your credentials.");
      setIsSubmitting(false);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-[#0B0F14] text-[#E1E7EF] flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#66705A] animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#7A8490]">
          Checking Staff Session Status...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E1E7EF] flex flex-col justify-between selection:bg-[#66705A] selection:text-white">
      {/* Header Bar */}
      <header className="p-6 flex items-center justify-between border-b border-[#1E2630]">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#66705A] text-white flex items-center justify-center font-bold text-sm font-mono">
            M
          </div>
          <span className="font-bold text-sm text-white tracking-tight">Mylotic Group</span>
        </Link>

        <Link
          to="/"
          className="text-xs font-mono text-[#7A8490] hover:text-white transition-colors"
        >
          Return to Marketing Site &rarr;
        </Link>
      </header>

      {/* Main Login Form Box */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#101418] border border-[#232A32] shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2026] text-[#A5AC92] text-[11px] font-mono uppercase tracking-widest font-semibold w-fit mb-6 border border-[#2E3640]">
            <Lock className="w-3.5 h-3.5 text-[#66705A]" />
            <span>STAFF &amp; ADMIN PORTAL</span>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">
            Internal Staff Sign In
          </h1>
          <p className="text-xs text-[#7A8490] leading-relaxed mb-6 font-normal">
            Enter your authorized Mylotic credentials to access internal lead management or administration tools.
          </p>

          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="staffEmail" className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                Work Email
              </label>
              <input
                id="staffEmail"
                type="email"
                required
                placeholder="admin@mylotic.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A] transition-colors font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="staffPassword" className="text-xs font-mono uppercase tracking-wider text-[#A5AC92] font-semibold block">
                Password
              </label>
              <input
                id="staffPassword"
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#5F6872] focus:outline-none focus:border-[#66705A] transition-colors font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#66705A] hover:bg-[#525B48] active:scale-[0.99] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
            >
              <span>{isSubmitting ? "Authenticating..." : "Sign In to Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#1E2630] text-center text-[11px] font-mono text-[#5F6872]">
            <span>Need access? Request an account from your System Administrator.</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs font-mono text-[#5F6872] border-t border-[#1E2630]">
        &copy; 2026 Mylotic Group. All rights reserved. Confidential Staff Portal.
      </footer>
    </div>
  );
}
