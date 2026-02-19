import { Field, useSitecore } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface OfferFields {
  id: string;
  displayName: string;
  name: string;
  url: string;
  fields: {
    OfferText: Field<string>;
  };
}

interface OfferProps extends ComponentProps {
  fields: {
    Offers: OfferFields[];
  };
}

export const Default = (props: OfferProps) => {
  const { page } = useSitecore();

  const id = props.params.RenderingIdentifier;

  const datasource = props.fields?.Offers || [];
  const styles = `${props.params.styles || ''}`.trim();

  if (!datasource.length) {
    return page.mode.isEditing ? (
      <div className={`component offers ${styles}`} id={id}>
        [OFFERS]
      </div>
    ) : (
      <></>
    );
  }

  return (
    <div className={`component offers bg-[var(--color-dark-blue)] ${styles}`} id={id}>
      <div className="container mx-auto flex w-full items-center justify-end gap-5 p-2">
        <ul className="flex items-center justify-end gap-5">
          <li className="mx-3 cursor-pointer text-xs text-white transition hover:text-[var(--color-teal)]">
            Credit Unions
          </li>
          <li className="mx-3 cursor-pointer text-xs text-white transition hover:text-[var(--color-teal)]">
            Get Started with MGIC
          </li>
          <li className="mx-3 cursor-pointer text-xs text-white transition hover:text-[var(--color-teal)]">
            MI Basics
          </li>
          <li className="mx-3 cursor-pointer text-xs text-white transition hover:text-[var(--color-teal)]">
            Careers
          </li>
          <li className="mx-3 cursor-pointer text-xs text-white transition hover:text-[var(--color-teal)]">
            Contact
          </li>
          <li className="mx-3 cursor-pointer text-xs text-white transition hover:text-[var(--color-teal)]">
            Investors
          </li>
          <li className="mx-3 cursor-pointer text-xs text-[var(--color-teal)]">Login/Signup</li>
          <li className="mx-3 cursor-pointer text-xs text-[var(--color-teal)]">Search</li>
        </ul>
      </div>
    </div>
  );
};
