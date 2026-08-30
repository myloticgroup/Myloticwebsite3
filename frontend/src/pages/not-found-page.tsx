import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <Section spacing="spacious" className="flex-1 flex items-center justify-center py-20 sm:py-32 bg-[#7CC7EA]">
      <Container size="narrow" className="text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#66705A]" />
            <span>Error 404 &bull; Resource Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#101418] leading-tight">
            Page Not Located
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#5F6872] max-w-md mx-auto leading-relaxed font-normal">
            The requested URL does not correspond to an active engineering document or public route in this directory.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="primary" size="lg" className="font-mono text-xs uppercase tracking-wider font-semibold shadow-xs">
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="font-mono text-xs uppercase tracking-wider font-semibold">
                <span>Explore Solutions</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default NotFoundPage;
