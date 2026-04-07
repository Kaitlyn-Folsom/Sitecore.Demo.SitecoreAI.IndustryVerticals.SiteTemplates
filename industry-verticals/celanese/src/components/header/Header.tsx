import React, { JSX } from 'react';
import { ComponentProps } from '@/lib/component-props';
import { Placeholder } from '@sitecore-content-sdk/nextjs';

export type HeaderProps = ComponentProps & {
  params: { [key: string]: string };
};

/** Decorative-only mimic of corporate utility navigation (not interactive). */
const UTILITY_LABELS = [
  'Careers',
  'Contact Us',
  'My Celanese',
  'AskChemille.com',
  'Americas',
] as const;

export const Default = (props: HeaderProps): JSX.Element => {
  const { styles, RenderingIdentifier: id, DynamicPlaceholderId } = props.params;

  return (
    <div className={`component header bg-background ${styles}`} id={id}>
      <div
        className="bg-brand-teal-deep text-background w-full"
        aria-label="Company links"
        role="region"
      >
        <div className="container px-4 py-2 sm:py-2.5">
          <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-4 gap-y-1.5 p-0 sm:justify-end sm:gap-x-0 sm:gap-y-1">
            {UTILITY_LABELS.map((label, index) => (
              <li key={label} className="flex max-w-full items-center">
                {index > 0 && (
                  <span
                    aria-hidden
                    className="text-background/45 mx-1.5 hidden select-none sm:mx-3 sm:inline"
                  >
                    |
                  </span>
                )}
                <span className="text-center text-[12px] font-semibold tracking-[0.08em] whitespace-nowrap sm:text-xs">
                  {label.includes('Americas') ? 'Americas' : label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container flex items-center gap-3 py-2 lg:gap-5 lg:py-2">
        <div className="max-lg:order-0 max-lg:mr-auto max-lg:w-2/3 lg:flex-[4_1]">
          <Placeholder name={`header-nav-${DynamicPlaceholderId}`} rendering={props.rendering} />
        </div>
        <div className="max-lg:order-2 lg:flex-[1_1]">
          <Placeholder name={`header-right-${DynamicPlaceholderId}`} rendering={props.rendering} />
        </div>
      </div>
    </div>
  );
};
