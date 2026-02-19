import {
  ComponentParams,
  ComponentRendering,
  Image,
  ImageField,
  Link,
  LinkField,
  Placeholder,
  RichTextField,
  Text,
  TextField,
} from '@sitecore-content-sdk/nextjs';
import React from 'react';

interface Fields {
  TitleOne: TextField;
  TitleTwo: TextField;
  TitleThree: TextField;
  TitleFour: TextField;
  TitleFive: TextField;
  CopyrightText: TextField;
  PolicyText: LinkField;
  TermsText: LinkField;
  Logo: ImageField;
  Description: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps) => {
  // rendering item id
  const id = props.params.RenderingIdentifier;

  // placeholders keys
  const phKeyOne = `footer-list-first-${props?.params?.DynamicPlaceholderId}`;
  const phKeyTwo = `footer-list-second-${props?.params?.DynamicPlaceholderId}`;
  const phKeyThree = `footer-list-third-${props?.params?.DynamicPlaceholderId}`;

  const sections = [
    {
      key: 'first_nav',
      title: <Text field={props.fields.TitleOne} />,
      content: <Placeholder name={phKeyOne} rendering={props.rendering} className="text-white" />,
    },
    {
      key: 'second_nav',
      title: <Text field={props.fields.TitleTwo} />,
      content: <Placeholder name={phKeyTwo} rendering={props.rendering} />,
    },
    {
      key: 'third_nav',
      title: <Text field={props.fields.TitleThree} />,
      content: <Placeholder name={phKeyThree} rendering={props.rendering} />,
    },
  ];

  return (
    <footer
      className={`bg-size-[1615px 85px] ${props.params.styles} relative w-full bg-[var(--color-dark-blue)] bg-[url('https://www.mgic.com/-/media/project/mgic/mgic/graphic-treatments/footer/footer-magenta-pattern-bar.svg')] bg-top bg-repeat-x px-4 py-12 sm:px-6 sm:py-14 lg:px-[80px] lg:py-[165px] ${props.params.styles}`}
      id={id}
    >
      <div className="m-auto w-full max-w-[1400px] px-[15px]">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
          <div className="w-full shrink-0 border-b border-[#eeeeee] pb-8 lg:mr-16 lg:w-auto lg:border-r lg:border-b-0 lg:border-r-[#eeeeee] lg:pr-12 lg:pb-0">
            <Image
              field={props.fields.Logo}
              width="140"
              height="200"
              alt="MGIC light logo"
              className="mb-8"
            />
            <div className="component">
              <div className="component-content">
                <ul>
                  <li className="text-md">
                    <div className="field-link">
                      <Link
                        field={props.fields.PolicyText}
                        className="block py-1.5 text-white hover:underline"
                      />
                    </div>
                  </li>
                  <li className="text-md">
                    <div className="field-link">
                      <a
                        className="block py-1.5 text-white"
                        href="https://www.mgic.com/legal"
                        title="Consumer Privacy Policy link"
                      >
                        Legal
                      </a>
                    </div>
                  </li>
                  <li className="text-md">
                    <div className="field-link">
                      <a
                        className="block py-1.5 text-white"
                        href="https://www.mgic.com/email-preferences"
                        title="Consumer Privacy Policy link"
                      >
                        Manage Email Preferences
                      </a>
                    </div>
                  </li>
                  <li className="text-md">
                    <div className="field-link">
                      <a
                        className="block py-1.5 text-white"
                        href="https://www.mgic.com/legal/info-security"
                        title="Consumer Privacy Policy link"
                      >
                        Site Security
                      </a>
                    </div>
                  </li>
                  <li className="text-md">
                    <div className="field-link">
                      <a
                        className="block py-1.5 text-white"
                        href="https://www.mgic.com/site-map"
                        title="Consumer Privacy Policy link"
                      >
                        Site Map
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mt-4 text-sm text-white">
              ©Copyright 2025
              <br />
              All rights reserved.
            </div>
          </div>
          <div className="w-full min-w-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5 lg:gap-5 xl:gap-12">
              {sections.map(({ key, title, content }) => (
                <div key={key}>
                  <h3 className="mb-4 text-xl font-bold text-[#5fdefe]">{title}</h3>
                  <div className="space-y-4">{content}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full shrink-0 border-t border-[#eeeeee] pt-8 lg:w-auto lg:border-t-0 lg:pt-0">
            <ul className="flex flex-row flex-wrap justify-center gap-4 lg:flex-col lg:justify-start lg:gap-0">
              <li className="mb-0 lg:mb-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-[#5fdefe]">
                  <a href="https://www.facebook.com/MGICMI">
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#153b5a]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="800px"
                        height="800px"
                        viewBox="0 0 20 20"
                        enableBackground="new 0 0 20 20"
                      >
                        <path d="M10,12L10,12c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4v4C14,10.2,12.2,12,10,12z" />
                        <path
                          d="M17.4,10.1c-0.5-0.3-1.1-0.1-1.4,0.4C14.8,12.7,12.5,14,10,14c-2.5,0-4.8-1.3-6.1-3.5C3.7,10,3,9.9,2.6,10.1
                        c-0.5,0.3-0.6,0.9-0.4,1.4c1.4,2.5,4,4.1,6.8,4.4V18H6c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3v-2.1
                        c2.8-0.3,5.4-1.9,6.8-4.4C18.1,11,17.9,10.4,17.4,10.1z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0 lg:mb-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-[#5fdefe]">
                  <a href="https://www.facebook.com/MGICMI">
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#153b5a]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0 lg:mb-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-[#5fdefe]">
                  <a href="https://www.facebook.com/MGICMI">
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#153b5a]">
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="-2 -2 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin"
                        className="jam jam-linkedin"
                      >
                        <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0 lg:mb-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-[#5fdefe]">
                  <a href="https://www.facebook.com/MGICMI">
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#153b5a]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li className="mb-0 lg:mb-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-[#5fdefe]">
                  <a href="https://www.facebook.com/MGICMI">
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#153b5a]">
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 17 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.301 6.422c0.437 0 0.769-0.161 1.006-0.484 0.181-0.237 0.265-0.617 0.265-1.12v-1.66c0-0.503-0.084-0.873-0.265-1.11-0.238-0.321-0.57-0.483-1.006-0.483-0.428 0-0.76 0.161-0.995 0.483-0.181 0.238-0.266 0.608-0.266 1.111v1.66c0 0.503 0.085 0.873 0.266 1.12 0.235 0.322 0.567 0.483 0.995 0.483zM7.893 2.988c0-0.436 0.133-0.654 0.408-0.654 0.285 0 0.408 0.218 0.408 0.654v1.992c0 0.437-0.123 0.664-0.408 0.664-0.275 0-0.408-0.228-0.408-0.664v-1.992zM10.35 6.071c-0.048-0.143-0.075-0.37-0.075-0.711v-3.738h0.863v3.481c0 0.2 0 0.313 0.010 0.333 0.019 0.133 0.085 0.208 0.199 0.208 0.17 0 0.35-0.133 0.54-0.408v-3.614h0.863v4.734h-0.863v-0.522c-0.341 0.398-0.663 0.588-0.978 0.588-0.275 0-0.474-0.113-0.559-0.351zM13.633 11.811v0.436h-0.854v-0.436c0-0.427 0.143-0.646 0.427-0.646 0.284 0.001 0.427 0.219 0.427 0.646zM4.354 1.774c-0.208-0.588-0.416-1.186-0.617-1.774h1.007l0.673 2.495 0.645-2.495h0.968l-1.148 3.785v2.571h-0.948v-2.571c-0.086-0.465-0.276-1.129-0.58-2.011zM15.283 8.785c-0.171-0.75-0.788-1.3-1.518-1.385-1.746-0.19-3.511-0.19-5.266-0.19s-3.52 0-5.256 0.19c-0.738 0.085-1.346 0.635-1.526 1.385-0.237 1.062-0.247 2.22-0.247 3.32 0 1.091 0 2.257 0.247 3.32 0.171 0.75 0.788 1.3 1.518 1.376 1.745 0.199 3.51 0.199 5.265 0.199s3.52 0 5.266-0.199c0.729-0.076 1.337-0.626 1.518-1.376 0.237-1.062 0.247-2.229 0.247-3.32-0.001-1.1-0.001-2.258-0.248-3.32zM5.483 9.743h-1.014v5.398h-0.949v-5.398h-0.997v-0.892h2.96v0.892zM8.045 15.141h-0.845v-0.512c-0.342 0.389-0.664 0.579-0.968 0.579-0.274 0-0.474-0.114-0.55-0.351-0.048-0.142-0.076-0.361-0.076-0.692v-3.709h0.845v3.453c0 0.2 0 0.304 0.009 0.333 0.020 0.132 0.086 0.199 0.199 0.199 0.172 0 0.352-0.132 0.541-0.398v-3.586h0.845v4.684zM11.271 13.737c0 0.437-0.020 0.749-0.086 0.948-0.104 0.342-0.342 0.522-0.674 0.522-0.303 0-0.598-0.171-0.883-0.522v0.456h-0.843v-6.29h0.843v2.059c0.275-0.342 0.57-0.512 0.883-0.512 0.332 0 0.57 0.18 0.674 0.531 0.066 0.19 0.086 0.502 0.086 0.939v1.869zM14.477 12.959h-1.698v0.825c0 0.437 0.143 0.654 0.437 0.654 0.209 0 0.332-0.113 0.38-0.341 0.009-0.047 0.019-0.237 0.019-0.579h0.863v0.124c0 0.275 0 0.465-0.019 0.55-0.020 0.189-0.096 0.36-0.199 0.512-0.229 0.332-0.579 0.503-1.024 0.503-0.446 0-0.779-0.161-1.025-0.484-0.18-0.228-0.275-0.598-0.275-1.101v-1.641c0-0.503 0.086-0.863 0.266-1.101 0.247-0.323 0.579-0.484 1.016-0.484 0.428 0 0.759 0.161 1.005 0.484 0.172 0.237 0.257 0.597 0.257 1.101v0.978zM10.426 11.801v2.002c0 0.427-0.124 0.635-0.37 0.635-0.143 0-0.285-0.066-0.428-0.208v-2.855c0.143-0.143 0.285-0.209 0.428-0.209 0.246 0 0.37 0.218 0.37 0.635z"
                          fill="#153b5a"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
