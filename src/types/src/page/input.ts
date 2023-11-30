import { HTMLInputTypeAttribute } from 'react';
import { countriesConnectAPI, countryConnectAPI } from '../country';

export const InputComponentName = {
  'components.input': 'components.input',
  'components.phone-input': 'components.phone-input',
  'components.dropdown': 'components.dropdown',
  'components.checkbox': 'components.checkbox',
} as const;

export interface InputBase {
  name: string;
  required: boolean;
  width?: string;
  default_value?: string | null;
  placeholder?: string;
  when?: {
    field: string;
    value: string;
  } | null;
}

export interface InputGlobal extends InputBase {
  __component:
    | (typeof InputComponentName)['components.input']
    | (typeof InputComponentName)['components.phone-input'];
  search_placeholder?: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  error_msg?: string;
  value?: string;
  countries?: countriesConnectAPI;
}
export interface InputDropdown extends InputBase {
  __component: (typeof InputComponentName)['components.dropdown'];
  title?: string;
  items: Item[];
}
interface Item {
  id?: number;
  name?: string;
  value?: string;
  icon?: string;
}

export interface InputCheckbox {
  __component: (typeof InputComponentName)['components.checkbox'];
  name: string;
  title?: string;
  value?: string;
  default_value?: string | null;
  required: boolean;
  when?: {
    field: string;
    value: string;
  } | null;
}

export type CMSInputType = InputGlobal | InputDropdown | InputCheckbox;
