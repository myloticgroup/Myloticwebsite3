import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function NotFoundPage() {
  return (
    <Section spacing="spacious" className="flex-1 flex items-center justify-center py-24 sm:py-36 relative overflow-hidden bg-atmospheric-hero">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
      <div className="ambient-glow-white w-[48rem] h-[48rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="ambient-glow-icy w-[36rem] h-[36rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <Container size="narrow" className="text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-[#4688B2]" />
            <span>ERROR 404 // ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#10213B] leading-tight">
            Page Not Located
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#243B53] max-w-md mx-auto leading-relaxed font-normal">
            The requested URL does not correspond to an active engineering document or public route in this directory.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer group border border-white/60"
              >
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/solutions">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#D0E3F0] bg-white hover:bg-[#F0F7FB] text-[#10213B] font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span>Explore Solutions</span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default NotFoundPage;
