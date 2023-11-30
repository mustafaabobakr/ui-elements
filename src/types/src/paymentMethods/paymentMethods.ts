import { ButtonGroupProps } from '@mono/ui/buttonGroup/ButtonGroup';
import { iso2, countryConnectAPI, Language } from '../country';
import { currency } from '../currency';
import { CMSImageProps } from '../page/common';
import { SharedSectionProps } from '../page/section';

export type PaymentType =
  | 'Device'
  | 'Debit Cards'
  | 'Credit Cards'
  | 'Buy Now Pay Later'
  | 'Express Checkout'
  | 'Cash Wallet'
  | 'Pass-Thru Wallet'
  | 'Stored Value Wallet';
export type Acceptance = 'Unavailable' | 'Preferred' | 'Expanded';

export interface PaymentCountry {
  code?: iso2;
  name?: string;
  acceptance?: Acceptance;
  payout?: currency[];
  charge?: currency[];
  order?: number;
}
export interface PaymentCard {
  name?: string;
  order?: number;
  icon?: string;
  type?: { title?: PaymentType; icon?: CMSImageProps }[];
  description?: string;
  readMore?: {
    title?: string;
    href?: string;
  };
  countries?: PaymentCountry[];
}

/**
 * @param title - title of the area
 * @example 'Middle East' | 'Europe' | 'North America' | 'South America' | 'South East Asia' | 'East Asia' | 'Africa'
 * @param column - number of column to place the area in, this is used to place the area in the correct place in the grid
 */
export type Area = {
  title: string;
  column: number;
  countries: {
    label: Lowercase<iso2>;
    country: countryConnectAPI;
    languages: Language[];
  }[];
};

// used in redux store/paymentMethods
export interface PaymentMethodsCMS {
  title?: string;
  description?: string;
  countryFlagBaseURL?: string;
  card?: {
    payoutLabel?: string;
    acceptedInLabel?: string;
    acceptedFromLabel?: string;
  };
  filter?: {
    sellingFromLabel?: string;
    sellingToLabel?: string;
    showAdvancedFilterLabel?: string;
    hideAdvancedFilterLabel?: string;
    payoutCurrencyLabel?: string;
    chargeCurrencyLabel?: string;
    paymentTypeLabel?: string;
    allLabel?: string;
    expandTitle?: string;
    expandDescription?: string;
    countries?: {
      areas?: Area[];
    };
  };
  paymentMethods?: PaymentCard[];
  buttons?: ButtonGroupProps[];
}

// used in PaymentMethods.tsx
export type PaymentMethodsProps = PaymentMethodsCMS & SharedSectionProps;
export type PaymentMethods = PaymentMethodsProps['paymentMethods'];
export type PaymentMethodsCard = PaymentMethodsProps['card'];
export type PaymentMethodsFilter = PaymentMethodsProps['filter'];
