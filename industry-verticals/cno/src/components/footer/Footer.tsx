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

const footerLinkClass =
  'text-interactive font-semibold transition-colors hover:text-accent-secondary hover:underline';

export const Default = (props: FooterProps) => {
  const id = props.params.RenderingIdentifier;

  return (
    <section className={`component footer relative ${props.params.styles} overflow-hidden`} id={id}>
      <div className="border-border bg-background-muted border-t">
        <div className="container mx-auto max-w-7xl gap-14 px-4 py-20">
          <div className="flex flex-col gap-8">
            <div className="sm:max-w-50">
              <Image field={props.fields.Logo} />
            </div>
            <div className="text-interactive font-semibold">
              <Text field={props.fields.CopyrightText} />
            </div>
            <RichText
              field={props.fields.Description}
              className="text-foreground-light [&_a]:text-interactive [&_a]:hover:text-accent-secondary max-w-3xl"
            />
          </div>

          <nav
            className="border-border mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-12 text-sm max-sm:flex-col max-sm:items-start"
            aria-label="Footer"
          >
            <Link field={props.fields.TermsText} className={footerLinkClass} />
            <span className="text-border max-sm:hidden" aria-hidden>
              |
            </span>
            <Link field={props.fields.PolicyText} className={footerLinkClass} />
            <span className="text-border max-sm:hidden" aria-hidden>
              |
            </span>
            <span className={footerLinkClass}>Sitemap</span>
            <span className="text-border max-sm:hidden" aria-hidden>
              |
            </span>
            <span className={footerLinkClass}>Contact Us</span>
            <span className="text-border max-sm:hidden" aria-hidden>
              |
            </span>
            <span className={footerLinkClass}>Bankers Life Agency, Inc.</span>
            <span className="text-border max-sm:hidden" aria-hidden>
              |
            </span>
            <span className={footerLinkClass}>Notification and Disaster Information</span>
          </nav>
        </div>
      </div>
    </section>
  );
};
