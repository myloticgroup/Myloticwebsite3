import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Loading() {
  return (
    <Section spacing="spacious" className="flex-1 flex items-center justify-center py-32">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center gap-3 text-xs font-mono text-slate-500 uppercase tracking-widest">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Synchronizing System Blueprint...</span>
        </div>
      </Container>
    </Section>
  );
}
