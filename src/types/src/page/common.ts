export interface CMSLinkProps {
  id?: number;
  href: string;
  caption: string;
  description?: string;
  icon?: CMSImageProps;
  disabled: boolean | null;
}

export interface CMSImageProps {
  url: string;
  width: number;
  height: number;
  alternativeText: string | null;
  id?: number;
  caption?: string | null;
  name?: string;
  formats?: null;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: string;
  folderPath?: string;
  createdAt?: string;
  updatedAt?: string;
  sitemap_exclude?: boolean;
}

export interface Localizations {
  data: unknown[];
}

export interface Logo {
  id?: number;
  href: string;
  image: CMSImageProps;
}

export interface MetaImage {
  id?: number;
  name?: string | null;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  hash?: string | null;
  ext?: string | null;
  mime?: string | null;
  size?: number;

  url: string;
  previewUrl?: string | null;
  provider?: string | null;
  provider_metadata?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  formats?: Formats;
}
export interface Formats {
  small?: Format;
  medium?: Format;
  large?: Format;
  thumbnail?: Format;
}

export interface Format {
  url: string;
  width: number;
  height: number;
  size?: number | null;
  ext?: string | null;
  hash?: string | null;
  mime?: string | null;
  name?: string | null;
  path?: string | null;
}

export interface CMSCurrency {
  name_en: string;
  name_ar: string;
  symbol: string;
  code: string;
  decimals: string;
  logo: string;
  createdAt?: string;
  updatedAt?: string;
  sitemap_exclude?: string;
}

export type BackgroundPosition =
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom';

export type BlobGradient =
  | 'gradient-x'
  | 'gradient-blue-green'
  | 'gradient-green-yellow'
  | 'gradient-yellow-orange'
  | 'gradient-orange-red'
  | 'gradient-red-purple'
  | 'gradient-purple-blue'
  | 'gradient-feedback';

export type InputMode =
  | 'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search';
