import { ComponentProps } from '@/lib/component-props';
import {
  ImageField,
  LinkField,
  NextImage as ContentSdkImage,
  Placeholder,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface Fields {
  LogoLight: ImageField;
  LogoDark: ImageField;
  PhoneLink: LinkField;
  MailLink: LinkField;
}

interface HeaderProps extends ComponentProps {
  fields: Fields;
}

const utilityLinks = [
  { label: 'SCHEDULE AN APPOINTMENT', href: '#' },
  { label: 'DIRECTIONS', href: '#' },
  { label: 'INTERNATIONAL', href: '#' },
  { label: 'BILLING', href: '#' },
  { label: 'SIGN IN TO MYCHART', href: '#' },
  { label: 'WAYS TO HELP', href: '#' },
];

export const DefaultHeaderExtended = (props: HeaderProps) => {
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div className="bg-secondary col-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end px-6">
          {utilityLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground bg-[#e6e8e8] px-[10px] py-[10px] text-[12px] font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="text-primary hover:bg-primary hover:text-primary-foreground border bg-[#efcce0] px-[10px] py-[10px] text-[12px] font-semibold tracking-wide transition-colors"
          >
            DONATE NOW
          </Link>
        </div>
      </div>
      <section
        className={`bg-background dark:bg-background-dark relative py-8 ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="container flex items-center gap-2 lg:gap-4">
          <div className="mr-auto max-w-50">
            <Link href={'/'}>
              <ContentSdkImage
                field={props.fields.LogoLight}
                width={345}
                height={45}
                className="dark:hidden"
                priority
              />
              <ContentSdkImage
                field={props.fields.LogoDark}
                width={345}
                height={45}
                className="hidden dark:block"
                priority
              />
            </Link>
          </div>
          <div className="order-last lg:order-0 lg:mr-4 xl:mr-8">
            <Placeholder
              name={`header-extended-nav-${props?.params?.DynamicPlaceholderId}`}
              rendering={props.rendering}
            />
          </div>
          <div className="mx-2 lg:mx-0">
            <button className="flex items-center gap-1 rounded bg-[#ca3d6a] px-5 py-2.5 text-[14px] font-medium text-white">
              I want to
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export const Default = withDatasourceCheck()<HeaderProps>(DefaultHeaderExtended);
