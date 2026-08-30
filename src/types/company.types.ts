export interface OfficeLocation {
  type: "headquarters" | "registered_office" | "branch";
  city: string;
  state: string;
  country: string;
  postalCode: string;
  addressLine1: string;
  addressLine2?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio?: string;
  isDirector: boolean;
}

export interface SocialLink {
  platform: "linkedin" | "twitter" | "github" | "youtube" | "facebook";
  url: string;
  label: string;
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  cin: string;
  incorporationDate: string;
  tagline: string;
  summary: string;
  description: string;
  email: string;
  website: string;
  locations: OfficeLocation[];
  leadership: LeadershipMember[];
  socialLinks: SocialLink[];
}
