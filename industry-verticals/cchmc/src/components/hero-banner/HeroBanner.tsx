'use client';

import React from 'react';
import {
  ImageField,
  NextImage as ContentSdkImage,
  Link as ContentSdkLink,
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import type { LinkField, RichTextField, TextField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';
import { ArrowRight } from 'lucide-react';

interface Fields {
  Image: ImageField;
  Title?: TextField;
  Description?: RichTextField;
  CtaLink?: LinkField;
  SecondaryCtaLink?: LinkField;
}

interface HeroBannerProps extends ComponentProps {
  fields: Fields;
}

const DEFAULT_HEADLINE = 'Nationally Ranked in all Pediatric Specialties';

const DEFAULT_CTA = { label: 'Find a Doctor', href: '#' };

export const DefaultHeroBanner = (props: HeroBannerProps) => {
  const id = props.params?.RenderingIdentifier;
  const { fields } = props ?? {};
  const titleField = fields?.Title;
  const descriptionField = fields?.Description;
  const ctaLink = fields?.CtaLink;

  const hasTitle = titleField?.value != null && String(titleField.value).trim() !== '';
  const hasDescription =
    descriptionField?.value != null && String(descriptionField.value).trim() !== '';
  const hasCta = ctaLink?.value?.href != null;

  return (
    <section
      className={`hero-banner relative overflow-hidden ${props?.params?.styles ?? ''}`}
      id={id || undefined}
    >
      <div className="container">
        <div className="relative min-h-[min(70vh,28rem)] overflow-hidden">
          {/* Image inside container */}
          {fields?.Image?.value?.src != null ? (
            <ContentSdkImage field={fields.Image} className="h-full w-full object-cover" />
          ) : (
            <div className="bg-background-dark h-full min-h-[min(70vh,28rem)] w-full" aria-hidden />
          )}

          {/* Pink overlay box: content-sized, left side, vertically centered */}
          <div className="hero-banner__overlay absolute top-1/2 w-fit max-w-md -translate-y-1/2 bg-[#ba508e] p-6 md:left-6 md:max-w-lg md:p-8 lg:min-w-[400px]">
            {/* Title */}
            <div>
              {hasTitle ? (
                <h1 className="hero-banner__headline font-heading text-3xl leading-tight font-semibold text-white md:text-4xl lg:text-5xl">
                  <ContentSdkText field={titleField} tag="span" />
                </h1>
              ) : (
                <h1 className="hero-banner__headline font-heading text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
                  {DEFAULT_HEADLINE}
                </h1>
              )}
            </div>

            {/* Description */}
            {hasDescription && descriptionField && (
              <div className="hero-banner__overlay-description mt-4 text-white">
                <ContentSdkRichText field={descriptionField} />
              </div>
            )}

            {/* CTA link */}
            <div className="hero-banner__ctas mt-6">
              {hasCta && ctaLink ? (
                <ContentSdkLink
                  field={ctaLink}
                  className="inline-flex justify-center px-6 py-3 font-medium text-white"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<HeroBannerProps>(DefaultHeroBanner);
