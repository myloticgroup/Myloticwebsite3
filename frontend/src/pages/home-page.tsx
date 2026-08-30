import {
  HeroSection,
  PositioningSection,
  TechMarquee,
  CapabilitiesSection,
  EngineeringSection,
  IndustriesSection,
  WorkSection,
  CareersSection,
  BlogSection,
  CTASection,
} from "@/components/home";

export function HomePage() {
  return (
    <>
      {/* 01 WARM EDITORIAL HERO SECTION */}
      <HeroSection />

      {/* 02 CONTINUOUS TECHNOLOGY ECOSYSTEM MARQUEE */}
      <TechMarquee />

      {/* 03 POSITIONING & LIFECYCLE GATEWAYS */}
      <PositioningSection />

      {/* 04 INTERACTIVE WHAT WE BUILD / PRACTICE EXPLORER */}
      <CapabilitiesSection />

      {/* 04 THE SYSTEM BEHIND THE PRODUCT / 5-LAYER MAP */}
      <EngineeringSection />

      {/* 05 TAILORED INDUSTRY VERTICALS */}
      <IndustriesSection />

      {/* 06 EDITORIAL CASE ENGAGEMENTS */}
      <WorkSection />

      {/* 07 CAREERS AT MYLOTIC / OPEN ROLES */}
      <CareersSection />

      {/* 08 EDITORIAL BLOG & ENGINEERING NOTES */}
      <BlogSection />

      {/* 09 CLOSING ENGAGEMENT GATEWAY */}
      <CTASection />
    </>
  );
}

export default HomePage;
