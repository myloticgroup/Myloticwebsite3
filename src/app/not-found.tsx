import * as React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section spacing="spacious" className="flex-1 flex items-center justify-center py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-widest text-slate-700 font-semibold">
          <Compass className="w-3.5 h-3.5 text-slate-500" />
          <span>Error 404 • Resource Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
          Page Not Located
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
          The requested URL does not correspond to an active engineering document or public route in this directory.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg" className="font-mono text-xs uppercase tracking-wider font-semibold shadow-subtle">
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/solutions">
            <Button variant="outline" size="lg" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <span>Explore Solutions</span>
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
