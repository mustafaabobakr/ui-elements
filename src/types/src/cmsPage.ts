import { PageDataHeader } from './page/header';
import { PageDataFooter } from './page/footer';
import { PageDataSection } from './page/section';
import { PageDataSeo } from './page/seo';
import { BlobGradient } from './page/common';
import { CookieConsentProps } from '@mono/ui/cookie/CookieConsent';

export interface PageData {
  animationStyle: BlobGradient;
  header: PageDataHeader;
  sections: PageDataSection[];
  footer: PageDataFooter;
  seo: PageDataSeo | null;
  cookies?: CookieConsentProps;
}
