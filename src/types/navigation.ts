
import { ReactNode } from 'react';

export interface SubNavItem {
  name: string;
  href?: string;
  icon?: string; // Changed from ReactNode to string
  isDropdown?: boolean;
  items?: Array<SubNavItem>;
}

export interface NavItem {
  name: string;
  href?: string;
  isDropdown?: boolean;
  items?: Array<SubNavItem>;
}
