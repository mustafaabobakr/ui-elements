import { COUNTRY_ISO2 } from '../country';
import { LANGUAGE } from '../local';
import { ButtonProps } from '../ui/button';
import { Logo } from './common';
import { PageDataSection } from './section';

export interface PageDataFooter {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale: string;
  Label: string;
  components: PageDataSection[];
}

export interface FooterCallout {
  id: number;
  title: string;
  subTitle: string;
  buttons: ButtonProps[];
  layout: null;
}

export interface FooterMenu {
  id: number;
  label: string;
  Links: [
    {
      id: number;
      href: string;
      caption: string;
    }
  ];
  layout: null;
}

export interface LocalizationBox {
  id: number;
  Language: boolean;
  Country: boolean;
  countries: [
    {
      id: number;
      name: string;
      code: COUNTRY_ISO2;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: LANGUAGE;
      label: string | null;
      flag: string | null;
      localizations: [];
    }
  ];
}
