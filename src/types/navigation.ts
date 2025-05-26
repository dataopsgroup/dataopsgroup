
import { ReactNode } from 'react';

export interface SubNavItem {
  title: string;
  href?: string;
  icon?: string;
  description?: string;
  badge?: string;
  children?: Array<SubNavItem>;
}

export interface NavItem {
  title: string;
  href?: string;
  children?: Array<SubNavItem>;
}
