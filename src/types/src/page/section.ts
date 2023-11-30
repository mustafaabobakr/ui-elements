import { UserStoredInfo } from '../ip';
import { ComponentList } from './components';

export interface PageDataSection {
  id?: number;
  __component: ComponentList;
  marginTop: string;
  marginBottom: string;
  show: boolean;
  items?: unknown[];
  // FIXME - this is a hack to allow any component to be added, each component should have its own type based on the ComponentList
  [key: string]: unknown;
}

/**
   * @example
   *   const { matches: isMediaDesktop, isLoading } = useMediaQuery({  query: '(min-width: 922px)' });
      const { matches: isMediaMobile, isLoading: isMediaMobileLoading } =  useMediaQuery({ query: '(max-width: 767px)' });
  */
export type GlobalComponentData = {
  isMediaLoading: boolean;
  isMediaDesktop: boolean | undefined;
  isMediaMobile: boolean | undefined;
  isMediaMobileLoading: boolean;
  userInfo?: UserStoredInfo;
  theme: 'light' | 'dark';
};

export type SharedSectionProps = Pick<
  PageDataSection,
  'id' | 'marginTop' | 'marginBottom' | 'show'
> &
  React.HTMLAttributes<HTMLDivElement> & {
    /**
   * @example
   *   const { matches: isMediaDesktop, isLoading } = useMediaQuery({  query: '(min-width: 922px)' });
      const { matches: isMediaMobile, isLoading: isMediaMobileLoading } =  useMediaQuery({ query: '(max-width: 767px)' });
  */
    globalData: GlobalComponentData;
  };
