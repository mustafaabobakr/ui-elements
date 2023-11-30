import { ButtonProps } from '../ui/button';
import { CMSLinkProps, Localizations, Logo } from './common';

export interface PageDataHeader {
  id?: number;
  label: string;
  logo: Logo;
  darkLogo?: Logo | null;
  navbuttons: ButtonProps[];
  navitems: PageDataHeaderNavItem[];
  localizations: Localizations;
  locale?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export type PageDataHeaderNavItemChildren = {
  id?: number;
  title: string;
  type: 'navitems' | 'megamenu';
  items?: Array<CMSLinkProps>;
};
export interface PageDataHeaderNavItem extends CMSLinkProps {
  children?: Array<PageDataHeaderNavItemChildren>;
}
