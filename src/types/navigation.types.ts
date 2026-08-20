export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavGroup {
  title: string;
  href?: string;
  items: NavItem[];
}

export interface HeaderNavigation {
  mainNav: (NavItem | NavGroup)[];
  cta: NavItem;
}

export interface FooterColumn {
  title: string;
  items: NavItem[];
}

export interface FooterNavigation {
  columns: FooterColumn[];
  legal: NavItem[];
}
