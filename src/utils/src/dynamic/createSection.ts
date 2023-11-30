import React from 'react';
import { GlobalComponentData, PageDataSection } from '@mono/types/page/section';
import {
  AllComponents,
  AllComponentsType,
} from '@mono/ui/sections/SectionsGenerator/SectionsGenerator';
import { ComponentList } from '@mono/types/page/components';

interface CreateSectionComponent {
  data?: PageDataSection;
  globalData: GlobalComponentData;
}

export function createSectionComponent({
  data,
  globalData,
}: CreateSectionComponent): React.ReactNode {
  if (!data) return null;
  function createComponent(item: PageDataSection): React.ReactNode {
    const { id, __component, ...rest } = item;
    // not to crash on adding new component
    if (!Object.keys(AllComponents).includes(__component)) {
      if (process.env.NODE_ENV === 'development') {
        // return an error component section.
        return React.createElement('section', {
          key: `${id}_${__component}_${new Date().getTime()}`,
          className: 'container error-section',
          children: [
            React.createElement('h1', {
              key: `${id}_${__component}_${new Date().getTime()}_h1`,
              className: 'text-4xl text-center',
              children: `Component ${__component} is not added yet.`,
            }),
          ],
        });
      }
      return null;
    }

    // Component is either .container or .container_full based on design.
    const fullWidth: ComponentList[] = ['sections.faq'];
    // means that component is not wrapped in .container or .container_full, but has its own container.
    const noContainer: ComponentList[] = [
      'sections.card',
      'sections.card-small',
      'sections.carousel-gallery',
    ];

    if (noContainer.includes(__component)) {
      rest['className'] = `${rest['className'] || ''}`;
    } else if (fullWidth.includes(__component)) {
      rest['className'] = `${rest['className'] || ''} container_full`;
    } else {
      rest['className'] = `${rest['className'] || ''} container`;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Component = AllComponents[
      __component
    ] as AllComponentsType[typeof __component];

    const randomKey = Math.random().toString(36).substring(7);

    return React.createElement(Component, {
      ...rest,
      globalData: globalData,
      key: `${id}_${__component}_${new Date().getTime()}_${randomKey}`,
    });
  }

  function renderer(config: PageDataSection | null): React.ReactNode {
    if (!config) return null;
    return createComponent(config);
  }

  return renderer(data);
}
