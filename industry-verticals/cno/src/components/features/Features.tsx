import { generateIndexes } from '@/helpers/generateIndexes';
import { IGQLTextField } from '@/types/igql';
import {
  ComponentParams,
  ComponentRendering,
  Image,
  Link,
  Text,
} from '@sitecore-content-sdk/nextjs';
import React from 'react';
import AccentLine from '@/assets/icons/accent-line/AccentLine';
import { CommonStyles } from '@/types/styleFlags';

interface Fields {
  data: {
    datasource: {
      children: {
        results: Feature[];
      };
      title: IGQLTextField;
    };
  };
}

interface Feature {
  featureImage: { jsonValue: { value: { src: string; alt?: string } } };
  featureTitle: { jsonValue: { value: string } };
  featureDescription: { jsonValue: { value: string } };
  featureLink: { jsonValue: { value: { href: string } } };
}

type FeaturesProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

type FeatureWrapperProps = {
  props: FeaturesProps;
  children: React.ReactNode;
};

const FeatureWrapper = (wrapperProps: FeatureWrapperProps) => {
  const id = wrapperProps.props.params.RenderingIdentifier;

  return (
    <section className={`${wrapperProps.props.params.styles}`} id={id ? id : undefined}>
      {wrapperProps.children}
    </section>
  );
};

export const Default = (props: FeaturesProps) => {
  const results = props.fields.data.datasource.children.results;
  const hideAccentLine = props.params.styles?.includes(CommonStyles.HideAccentLine);
  const featureSectionTitle = props.fields.data.datasource.title;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-x-16 lg:gap-y-10">
        <div className="max-w-2xl lg:mb-0">
          <h2 className="features-section-title">
            <Text field={featureSectionTitle.jsonValue} />
          </h2>
          {!hideAccentLine && (
            <AccentLine className="!text-accent-secondary mt-4 w-full max-w-xs" />
          )}
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3">
          {results.map((item, index) => {
            const title = item.featureTitle.jsonValue;
            const description = item.featureDescription.jsonValue;
            const link = item.featureLink.jsonValue;
            return (
              <div className="flex flex-col gap-6" key={index}>
                <div className="features-item-title">
                  <Text field={title} />
                </div>
                <div className="promo-body flex-auto">
                  <Text field={description} />
                </div>
                <div>
                  <Link field={link} className="promo-cta" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FeatureWrapper>
  );
};

export const ImageGrid = (props: FeaturesProps) => {
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-6 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-5">
        {results.map((item, index) => {
          const imageField = item?.featureImage.jsonValue;
          return (
            <div className="flex items-center justify-center py-6 lg:py-4" key={index}>
              {imageField && <Image field={imageField} className="max-h-20 object-contain" />}
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};

export const ThreeColGridCentered = (props: FeaturesProps) => {
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container flex flex-col flex-wrap justify-evenly gap-16 py-16 md:flex-row md:py-20 lg:gap-20">
        {results.map((item, index) => {
          const title = item.featureTitle.jsonValue;
          const description = item.featureDescription.jsonValue;
          const image = item.featureImage.jsonValue;
          return (
            <div className="flex max-w-sm flex-col items-center justify-start 2xl:w-80" key={index}>
              <div className="bg-interactive mb-7 flex h-20 w-20 items-center justify-center rounded-none">
                <Image field={image} />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <Text
                  tag="h3"
                  className="text-foreground text-center text-lg font-bold tracking-tight md:text-xl"
                  field={title}
                />
                <div className="promo-body text-center">
                  <Text field={description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};

export const NumberedGrid = (props: FeaturesProps) => {
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-6 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {results.map((item, index) => {
          const title = item?.featureTitle.jsonValue;
          const description = item?.featureDescription.jsonValue;
          return (
            <div
              className="group border-border bg-background-accent hover:bg-interactive cursor-pointer rounded-none border p-6 transition-colors"
              key={index}
            >
              <p className="text-foreground-muted group-hover:text-background/85 mb-3 text-7xl leading-none font-bold tabular-nums">
                {generateIndexes(index)}
              </p>
              <div className="features-item-title group-hover:!text-background mb-4">
                <Text field={title} />
              </div>
              <div className="text-foreground-light group-hover:text-background/95 text-lg leading-relaxed">
                <Text field={description} />
              </div>
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};

export const FourColGrid = (props: FeaturesProps) => {
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-16 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-12">
        {results.map((item, index) => {
          const title = item.featureTitle.jsonValue;
          const description = item.featureDescription.jsonValue;
          const image = item.featureImage.jsonValue;
          return (
            <div className="grid grid-cols-[1fr_2fr] gap-4" key={index}>
              <div className="flex items-center justify-center overflow-hidden rounded-none">
                <Image field={image} />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="features-item-title">
                  <Text field={title} />
                </div>
                <div className="promo-body">
                  <Text field={description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};

export const ImageCardGrid = (props: FeaturesProps) => {
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {results.map((item, index) => {
          const title = item.featureTitle.jsonValue;
          const description = item.featureDescription.jsonValue;
          const image = item.featureImage.jsonValue;
          return (
            <div className="flex flex-col gap-5" key={index}>
              <div className="bg-background mb-1 aspect-4/3 w-full overflow-hidden rounded-none">
                <Image field={image} className="h-full w-full object-cover" />
              </div>

              <h3 className="features-item-title">
                <Text field={title} />
              </h3>

              <div className="promo-body">
                <Text field={description} />
              </div>
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};
