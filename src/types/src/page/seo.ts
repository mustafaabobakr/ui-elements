import { CMSImageProps, MetaImage } from './common';

export interface PageDataSeo {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaRobots?: string | null;
  structuredData?: string | null;
  metaViewport?: string;
  keywords?: string;
  canonicalURL: string;
  metaImage?: MetaImage;
  metaSocial?: PageDataMetaSocial[];
}

export interface PageDataMetaSocial {
  id: number;
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image: CMSImageProps;
}
export type SocialNetwork =
  | 'Twitter'
  | 'Facebook'
  | 'LinkedIn'
  | 'Instagram'
  | 'Pinterest'
  | 'Youtube'
  | 'Vimeo'
  | 'TikTok'
  | 'Reddit'
  | 'Snapchat'
  | 'Twitch'
  | 'Github'
  | 'Medium'
  | 'Quora'
  | 'Soundcloud'
  | 'Spotify'
  | 'Whatsapp'
  | 'WeChat'
  | 'Weibo'
  | 'VK'
  | 'Xing'
  | 'Yelp'
  | 'Yahoo'
  | 'Yammer'
  | 'YouTube'
  | 'Zalo'
  | 'Zoom'
  | 'Other';
