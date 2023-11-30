import { PageDataSeo } from '@mono/types';
import { CONFIG } from '.';

export const defaultSeoObj: PageDataSeo = {
  id: 1,
  metaViewport: 'width=device-width,minimum-scale=1,maximum-scale=5',
  canonicalURL: CONFIG.website.baseURL,
  metaDescription:
    'Tap Payments simplifies online payment & acceptance for businesses with an easy, quick & secure experience for people paying on websites & apps.',
  keywords:
    'Tap Payments, Online Payment, Online Payment Services, Online Payment Gateway, Online Payment System, Online Payment Processing, Online Payment Solutions, Online Payment Platform, Online Payment Software, Online Payment API, Online Payment Integration, Online Payment Provider, Online Payment Service, Online Payment Gateway Provider, Online Payment Gateway Services, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway API, Online Payment Gateway Provider, Online Payment Gateway Service, Online Payment Gateway Software, Online Payment Gateway Solutions, Online Payment Gateway System, Online Payment Gateway Integration, Online Payment Gateway',
  metaRobots: null,
  structuredData: null,
  metaImage: {
    id: 5,
    name: 'logo.png',
    alternativeText: null,
    caption: null,
    width: 853,
    height: 673,
    formats: {
      small: {
        ext: '.png',
        url: '/uploads/small_logo_a287ed2cbe.png',
        hash: 'small_logo_a287ed2cbe',
        mime: 'image/png',
        name: 'small_logo.png',
        path: null,
        size: 11.13,
        width: 500,
        height: 394,
      },
      medium: {
        ext: '.png',
        url: '/uploads/medium_logo_a287ed2cbe.png',
        hash: 'medium_logo_a287ed2cbe',
        mime: 'image/png',
        name: 'medium_logo.png',
        path: null,
        size: 20.77,
        width: 750,
        height: 592,
      },
      thumbnail: {
        ext: '.png',
        url: '/uploads/thumbnail_logo_a287ed2cbe.png',
        hash: 'thumbnail_logo_a287ed2cbe',
        mime: 'image/png',
        name: 'thumbnail_logo.png',
        path: null,
        size: 3.84,
        width: 198,
        height: 156,
      },
    },
    hash: 'logo_a287ed2cbe',
    ext: '.png',
    mime: 'image/png',
    size: 5.4,
    url: '/uploads/logo_a287ed2cbe.png',
    previewUrl: null,
    provider: 'local',
    provider_metadata: null,
    createdAt: '2023-03-12T13:19:29.276Z',
    updatedAt: '2023-03-12T13:19:29.276Z',
  },
  metaSocial: [
    {
      id: 15,
      socialNetwork: 'Twitter',
      title: 'Tap | Online Payment Services',
      description: 'Simplifies online payment & acceptance for businesses',
      image: {
        alternativeText: 'Tap | Online Payment Services',
        url: 'https://websiteimages.b-cdn.net/ogImages/tap.png',
        width: 1200,
        height: 630,
      },
    },
    {
      id: 16,
      socialNetwork: 'Facebook',
      title: 'Facebook meta',
      description: 'Facebook description ',
      image: {
        alternativeText: 'Tap ',
        url: 'https://websiteimages.b-cdn.net/ogImages/tap.png',
        width: 1200,
        height: 630,
      },
    },
  ],
};

// freezed object
export const defaultSeo = Object.freeze(defaultSeoObj);
