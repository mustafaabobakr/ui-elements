// create as const component name to make it readonly example "sections.hero"
export const COMPONENT_MAP = {
  'sections.faq': 'sections.faq',
  'sections.hero': 'sections.hero',
  'sections.card': 'sections.card',
  'sections.form': 'sections.form',
  'sections.card-small': 'sections.card-small',
  'sections.card-small-array': 'sections.card-small-array',
  'sections.intro': 'sections.intro',
  'sections.gallery': 'sections.gallery',
  'sections.feedback': 'sections.feedback',
  'sections.big-title': 'sections.big-title',
  'sections.open-content': 'sections.open-content',
  'sections.card-only-data': 'sections.card-only-data',
  'sections.card-only-data-array': 'sections.card-only-data-array',
  'sections.card-blog': 'sections.card-blog',
  'sections.card-blog-array': 'sections.card-blog-array',
  'sections.full-image': 'sections.full-image',
  'sections.payment-methods': 'sections.payment-methods',
  'sections.carousel-gallery': 'sections.carousel-gallery',
  'sections.customer-gallery': 'sections.customer-gallery',

  // used in footer.
  'sections.callout': 'sections.callout', // not used anymore. deleted from design by Ali.
  'sections.menu-and-locale': 'sections.menu-and-locale', // not used anymore. replaced by footer-menus and localization-box

  'sections.footer-menus': 'sections.footer-menus',
  'sections.locale-switcher': 'sections.locale-switcher',
  'sections.social-media': 'sections.social-media',

  'sections.icons': 'sections.icons',
  'sections.small-menu': 'sections.small-menu',
  'sections.copyright': 'sections.copyright',
} as const;

export type COMPONENT_MAP_TYPE = typeof COMPONENT_MAP;
export type ComponentList = COMPONENT_MAP_TYPE[keyof COMPONENT_MAP_TYPE];
