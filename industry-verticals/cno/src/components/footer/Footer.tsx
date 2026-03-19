import {
  ComponentParams,
  ComponentRendering,
  Image,
  ImageField,
  Link,
  LinkField,
  Placeholder,
  RichText,
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

  return (
    <section className={`component footer relative ${props.params.styles} overflow-hidden`} id={id}>
      <div className="bg-background-muted">
        <div className="container grid max-w-7xl gap-12 py-16">
          <div className="flex flex-col gap-7">
            <div className="sm:max-w-50">
              <Image field={props.fields.Logo} />
            </div>
            <div className="text-bold">
              <Text field={props.fields.CopyrightText} />
            </div>
            <RichText field={props.fields.Description} />
          </div>
          <div className="container flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-10">
            <div className="text-accent flex items-center justify-between gap-5 max-lg:gap-10 max-sm:order-1 max-sm:flex-col max-sm:items-start max-sm:gap-5">
              <Link field={props.fields.TermsText} className="font-bold hover:underline" /> |
              <Link field={props.fields.PolicyText} className="font-bold hover:underline" /> |
              <div className="text-accent font-bold hover:underline">Sitemap</div> |
              <div className="text-accent font-bold hover:underline">Contact Us</div> |
              <div className="text-accent font-bold hover:underline">Bankers Life Agency, Inc.</div>
              |
              <div className="text-accent font-bold hover:underline">
                Notification and Disaster Information
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
