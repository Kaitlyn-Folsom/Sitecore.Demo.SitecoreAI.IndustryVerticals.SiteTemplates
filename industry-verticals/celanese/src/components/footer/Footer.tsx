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

  // placeholders keys
  const phKeyOne = `footer-list-first-${props?.params?.DynamicPlaceholderId}`;
  const phKeyTwo = `footer-list-second-${props?.params?.DynamicPlaceholderId}`;
  const phKeyThree = `footer-list-third-${props?.params?.DynamicPlaceholderId}`;
  const phKeyFour = `footer-list-fourth-${props?.params?.DynamicPlaceholderId}`;
  const phKeyFive = `footer-list-fifth-${props?.params?.DynamicPlaceholderId}`;

  const sections = [
    {
      key: 'first_nav',
      title: <Text field={props.fields.TitleOne} />,
      content: <Placeholder name={phKeyOne} rendering={props.rendering} />,
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
    {
      key: 'fourth_nav',
      title: <Text field={props.fields.TitleFour} />,
      content: <Placeholder name={phKeyFour} rendering={props.rendering} />,
    },
    {
      key: 'fifth_nav',
      title: <Text field={props.fields.TitleFive} />,
      content: <Placeholder name={phKeyFive} rendering={props.rendering} />,
    },
  ];

  return (
    <section className={`component footer relative ${props.params.styles} overflow-hidden`} id={id}>
      <div className="bg-footer text-background">
        <div className="container grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,3fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="max-w-xs [&_img]:brightness-0 [&_img]:invert">
              <Image field={props.fields.Logo} />
            </div>
            <RichText
              field={props.fields.Description}
              className="text-background/85 [&_a]:text-background text-sm leading-relaxed md:text-base [&_a]:underline"
            />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-6 xl:gap-10">
            {sections.map(({ key, title, content }) => (
              <div key={key}>
                <div className="text-background mb-5 text-xs font-semibold tracking-[0.12em] uppercase">
                  {title}
                </div>
                <div className="text-background/80 [&_a]:text-background/90 hover:[&_a]:text-accent space-y-3 text-sm [&_a]:transition-colors">
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-footer-bottom border-t border-white/10">
        <div className="text-background/65 container flex flex-col gap-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <Text field={props.fields.CopyrightText} />
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <Link field={props.fields.TermsText} className="hover:text-accent transition-colors" />
            <Link field={props.fields.PolicyText} className="hover:text-accent transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};
