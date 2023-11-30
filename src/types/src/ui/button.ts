import { TypographyVariant } from './typography';

// ref: https://github.com/microsoft/TypeScript/issues/29729#issuecomment-1331857805
type AnyString = string & Record<never, never>;
export type ButtonActionType = 'mobileAppRedirect' | 'openChat';

export type MobileAppRedirectKeys = 'ios' | 'android' | 'desktop';
export type ChatbotRedirectKeys = 'provider';
export type ButtonActionDataKey = MobileAppRedirectKeys | ChatbotRedirectKeys;

export type ButtonActionData = Partial<Record<ButtonActionDataKey, string>>;

export interface ButtonProps {
  route?: '$more-actions' | AnyString;
  name?: string;
  variant?:
    | 'text'
    | 'primary'
    | 'secondary'
    | 'primary-reversed'
    | 'secondary-reversed';
  action_type?: ButtonActionType;
  action_data?: ButtonActionData[];
  typographyVariant?: TypographyVariant;
  className?: string;
  hide_on_mobile?: true;
}

export type ButtonGroup = ButtonProps[];
