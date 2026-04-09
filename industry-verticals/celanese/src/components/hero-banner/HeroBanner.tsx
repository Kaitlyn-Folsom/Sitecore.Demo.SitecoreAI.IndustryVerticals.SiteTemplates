import {
  Field,
  ImageField,
  LinkField,
  NextImage as ContentSdkImage,
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  useSitecore,
  Placeholder,
  Link,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';
import { HeroBannerStyles, LayoutStyles } from '@/types/styleFlags';
import clsx from 'clsx';

interface Fields {
  Image: ImageField;
  Video: ImageField;
  Title: Field<string>;
  Description: Field<string>;
  CtaLink: LinkField;
}

interface HeroBannerProps extends ComponentProps {
  fields: Fields;
}

const HeroBannerCommon = ({
  params,
  fields,
  children,
}: HeroBannerProps & {
  children: React.ReactNode;
}) => {
  const { page } = useSitecore();
  const { styles, RenderingIdentifier: id } = params;
  const isPageEditing = page.mode.isEditing;
  const hideGradientOverlay = styles?.includes(HeroBannerStyles.HideGradientOverlay);

  if (!fields) {
    return isPageEditing ? (
      <div className={`component hero-banner ${styles}`} id={id}>
        [HERO BANNER]
      </div>
    ) : (
      <></>
    );
  }

  return (
    <div className={`component hero-banner ${styles} relative flex items-center`} id={id}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!isPageEditing && fields?.Video?.value?.src ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={fields.Image?.value?.src}
          >
            <source src={fields.Video?.value?.src} type="video/webm" />
          </video>
        ) : (
          <>
            <ContentSdkImage
              field={fields.Image}
              className="h-full w-full object-cover md:object-center"
              priority
            />
          </>
        )}
        {/* Subtle read on imagery — avoid heavy filters per brand */}
        {!hideGradientOverlay && (
          <div
            className="from-foreground/25 absolute inset-0 bg-gradient-to-r via-transparent to-transparent"
            aria-hidden
          />
        )}
      </div>

      {children}
    </div>
  );
};

export const Default = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const withPlaceholder = styles.includes(HeroBannerStyles.WithPlaceholder);
  const reverseLayout = styles.includes(LayoutStyles.Reversed);
  const searchBarPlaceholderKey = `hero-banner-search-bar-${params.DynamicPlaceholderId}`;

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-10 md:py-14 lg:pt-30 lg:pb-0">
          <div
            className={`flex min-h-64 w-full md:min-h-80 lg:min-h-96 lg:w-6/12 lg:items-center ${reverseLayout ? 'lg:mr-auto' : 'lg:ml-auto'}`}
          >
            <div
              className={clsx(
                'bg-brand-teal-deep text-background w-full max-w-xl border border-white/10 px-6 py-8 shadow-lg md:px-10 md:py-10 lg:max-w-3xl lg:shadow-xl'
              )}
            >
              <h1 className="text-background text-left text-xl leading-[1.15] font-bold text-balance capitalize md:text-2xl lg:text-3xl">
                <ContentSdkText field={fields.Title} />
              </h1>

              <div className="text-[#ffffff]!important mt-5 leading-relaxed md:text-lg [&_a]:underline">
                <ContentSdkRichText field={fields.Description} className="text-left" />
              </div>

              <div className="mt-6 flex w-full justify-start">
                {withPlaceholder ? (
                  <Placeholder name={searchBarPlaceholderKey} rendering={rendering} />
                ) : (
                  <>
                    <Link
                      field={fields.CtaLink}
                      className="mr-3 flex items-center text-xl font-bold text-white"
                    />
                    <div className="flex items-center gap-2 rounded-full border border-white bg-white p-2 text-black">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};

export const TopContent = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const withPlaceholder = styles.includes(HeroBannerStyles.WithPlaceholder);
  const reverseLayout = styles.includes(LayoutStyles.Reversed);
  const searchBarPlaceholderKey = `hero-banner-search-bar-${params.DynamicPlaceholderId}`;

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
      <div className="relative z-10 w-full">
        <div className="container mx-auto flex min-h-64 justify-center px-4 py-10 md:min-h-80 md:py-16 lg:min-h-96 lg:py-24">
          <div
            className={`flex w-full max-w-3xl flex-col items-center ${reverseLayout ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={clsx('bg-brand-teal-deep w-full px-6 py-8 text-center md:px-12 md:py-10')}
            >
              <h1 className="text-background text-xl font-bold capitalize md:text-2xl lg:text-2xl">
                <ContentSdkText field={fields.Title} />
              </h1>

              <div className="[&_a]:text-background mt-5 leading-relaxed md:text-lg">
                <ContentSdkRichText field={fields.Description} className="text-center" />
              </div>

              <div className="mt-6 flex w-full justify-center">
                {withPlaceholder ? (
                  <Placeholder name={searchBarPlaceholderKey} rendering={rendering} />
                ) : (
                  <>
                    <Link
                      field={fields.CtaLink}
                      className="mr-3 flex items-center text-xl font-bold text-white"
                    />
                    <div className="flex items-center gap-2 rounded-full border border-white bg-white p-2 text-black">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};
