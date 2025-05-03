
import { ReactNode } from 'react';

export interface SubNavItem {
  name: string;
  href: string;
  icon?: ReactNode;
}

export interface NavItem {
  name: string;
  href?: string;
  isDropdown?: boolean;
  items?: Array<SubNavItem>;
}
