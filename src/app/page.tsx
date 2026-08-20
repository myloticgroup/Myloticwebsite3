import {
  HeroSection,
  PositioningSection,
  CapabilitiesSection,
  EngineeringSection,
  IndustriesSection,
  WorkSection,
  CareersSection,
  BlogSection,
  CTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      {/* 01 WARM EDITORIAL HERO SECTION */}
      <HeroSection />

      {/* 02 POSITIONING & LIFECYCLE GATEWAYS */}
      <PositioningSection />

      {/* 03 INTERACTIVE WHAT WE BUILD / PRACTICE EXPLORER */}
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
