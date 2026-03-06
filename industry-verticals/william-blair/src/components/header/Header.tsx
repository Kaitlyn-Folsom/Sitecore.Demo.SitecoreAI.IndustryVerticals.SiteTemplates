import React, { JSX } from 'react';
import { ComponentProps } from '@/lib/component-props';
import { Placeholder } from '@sitecore-content-sdk/nextjs';

export type HeaderProps = ComponentProps & {
  params: { [key: string]: string };
};

export const Default = (props: HeaderProps): JSX.Element => {
  const { styles, RenderingIdentifier: id, DynamicPlaceholderId } = props.params;

  return (
    <>
      <div className="w-full">
        <div className="hidden w-full md:block" data-component="TertiaryNav">
          <div className="primary relative z-20 flex h-10 w-full bg-[#d5d6d2] py-3">
            <div className="max-w-outer-content relative mx-auto w-full px-4 sm:px-8 md:px-15 lg:px-30">
              <div className="max-w-outer-content flex w-full gap-8 md:justify-end">
                <button
                  type="button"
                  className="p4 group text-primaryblue focus:ring-secondarybrightgreen inline-flex cursor-pointer items-center gap-1 focus:ring-4 focus:ring-offset-2 focus:outline-none"
                  aria-label="Clear current persona: United States | Financial Professional"
                >
                  <span className="group-hover:underline">
                    United States | Financial Professional
                  </span>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mb-1 h-4 w-4"
                  >
                    <path
                      d="M9.03995 10.32L-5.26163e-05 1.29001L1.27995 0.0100054L9.03995 7.78001L16.7899 7.51749e-06L18.0699 1.28001L9.03995 10.32Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <div data-component="NavList" className="flex flex-row items-center gap-10">
                  <div data-component="NavItem" className="flex gap-8">
                    <a
                      data-component="Button"
                      className="group copy-sm group-hover:decoration-surface hover:decoration-surface copy-sm primary p4 text-primaryblue flex w-fit items-center underline decoration-transparent duration-200 hover:underline"
                      target=""
                      aria-label="Contact Us"
                      href="/contact-us#intermediary-north-america-tab"
                    >
                      <span className="text-center">Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`component header bg-[#004165] ${styles}`} id={id}>
        <div className="container flex items-center gap-3 px-4 sm:px-8 md:px-15 lg:gap-5 lg:px-30">
          {/* <div className="max-lg:order-1 lg:flex-[1_1]">
          <Placeholder name={`header-left-${DynamicPlaceholderId}`} rendering={props.rendering} />
        </div> */}
          <div className="max-lg:order-0 max-lg:mr-auto max-lg:w-2/3 lg:flex-[4_1]">
            <Placeholder name={`header-nav-${DynamicPlaceholderId}`} rendering={props.rendering} />
          </div>
          <div className="max-lg:order-2 lg:flex-[1_1]">
            <Placeholder
              name={`header-right-${DynamicPlaceholderId}`}
              rendering={props.rendering}
            />
          </div>
        </div>
      </div>
    </>
  );
};
