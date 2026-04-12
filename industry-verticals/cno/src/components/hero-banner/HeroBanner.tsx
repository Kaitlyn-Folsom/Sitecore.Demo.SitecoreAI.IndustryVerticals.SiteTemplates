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
import { HeroFrame } from '@/components/hero-banner/HeroFrame';
import { HeroBannerStyles, LayoutStyles } from '@/types/styleFlags';
import clsx from 'clsx';
import type { ReactNode } from 'react';

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

type HeroOverlayPlacement = 'left' | 'right' | 'center';

const HeroBannerCommon = ({
  params,
  fields,
  children,
}: HeroBannerProps & {
  children: ReactNode;
  overlayPlacement: HeroOverlayPlacement;
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
          <ContentSdkImage
            field={fields.Image}
            className="h-full w-full object-cover md:object-bottom"
            priority
          />
        )}
        {!hideGradientOverlay && (
          <>
            <div
              className="hero-banner__pattern pointer-events-none absolute inset-0 z-[1]"
              aria-hidden
            />
            <div className={clsx('pointer-events-none absolute inset-0 z-[2]')} aria-hidden />
          </>
        )}
      </div>

      <div
        className={clsx('relative z-10 w-full', hideGradientOverlay && 'hero-banner--no-overlay')}
      >
        {children}
      </div>
    </div>
  );
};

export const Default = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const withPlaceholder = styles.includes(HeroBannerStyles.WithPlaceholder);
  const reverseLayout = styles.includes(LayoutStyles.Reversed);
  const screenLayer = styles.includes(HeroBannerStyles.ScreenLayer);
  const searchBarPlaceholderKey = `hero-banner-search-bar-${params.DynamicPlaceholderId}`;

  return (
    <HeroBannerCommon params={params} fields={fields}>
      <div className="relative w-full">
        <div className="container mx-auto px-4">
          <div
            className={`flex w-full py-20 lg:w-1/2 lg:items-center xl:w-2/3 ${reverseLayout ? 'lg:mr-auto' : 'lg:ml-auto'}`}
          >
            <div className="max-w-180">
              <HeroFrame className="px-5 py-6 md:px-7 md:py-8">
                <h1
                  className={clsx(
                    'hero-banner__title group/heading text-center text-5xl leading-[110%] font-bold lg:text-left'
                  )}
                >
                  <ContentSdkText field={fields.Title} />
                </h1>
              </HeroFrame>

              <div className="hero-banner__richtext mt-7 text-xl md:text-2xl">
                <ContentSdkRichText
                  field={fields.Description}
                  className="text-center lg:text-left"
                />
              </div>

              <div className="mt-6 flex w-full justify-center lg:justify-start">
                {withPlaceholder ? (
                  <Placeholder name={searchBarPlaceholderKey} rendering={rendering} />
                ) : (
                  <Link field={fields.CtaLink} className="arrow-btn" />
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
  const screenLayer = styles.includes(HeroBannerStyles.ScreenLayer);
  const searchBarPlaceholderKey = `hero-banner-search-bar-${params.DynamicPlaceholderId}`;

  return (
    <HeroBannerCommon params={params} fields={fields} overlayPlacement="center">
      <div className="relative w-full">
        <div className="container mx-auto flex min-h-238 justify-center px-4">
          <div
            className={`flex flex-col items-center py-10 lg:py-44 ${reverseLayout ? 'justify-end' : 'justify-start'}`}
          >
            <HeroFrame className="max-w-182 px-5 py-6 md:px-8 md:py-10">
              <div className={clsx({ shim: screenLayer })}>
                <h1 className="hero-banner__title group/heading text-center text-5xl leading-[110%] font-bold md:text-7xl md:leading-[130%] xl:text-[80px]">
                  <ContentSdkText field={fields.Title} />
                </h1>

                <div className="hero-banner__richtext mt-7 text-xl md:text-2xl">
                  <ContentSdkRichText field={fields.Description} className="text-center" />
                </div>

                <div className="mt-6 flex w-full justify-center">
                  {withPlaceholder ? (
                    <Placeholder name={searchBarPlaceholderKey} rendering={rendering} />
                  ) : (
                    <Link field={fields.CtaLink} className="arrow-btn" />
                  )}
                </div>
              </div>
            </HeroFrame>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};
