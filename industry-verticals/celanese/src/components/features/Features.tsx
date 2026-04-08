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
  // rendering item id
  const id = wrapperProps.props.params.RenderingIdentifier;

  return (
    <section className={`${wrapperProps.props.params.styles}`} id={id ? id : undefined}>
      {wrapperProps.children}
    </section>
  );
};

export const Default = (props: FeaturesProps) => {
  // results of the graphql
  const results = props.fields.data.datasource.children.results;
  const featureSectionTitle = props.fields.data.datasource.title;
  const numOfItems = results.length;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 py-16 md:py-20 lg:gap-12">
        <div className="mb-16 lg:mb-0">
          <h2 className="inline-block max-w-md font-medium max-lg:text-3xl lg:max-w-lg lg:text-4xl">
            <Text field={featureSectionTitle.jsonValue} />
          </h2>
        </div>
        <div
          className={`${numOfItems === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10`}
        >
          {results.map((item, index) => {
            const title = item.featureTitle.jsonValue;
            const description = item.featureDescription.jsonValue;
            const link = item.featureLink.jsonValue;

            return (
              <div className="flex flex-col bg-[#eee] p-6 transition-shadow" key={index}>
                <div className="text-foreground mb-4 text-xl font-semibold">
                  <Text field={title} />
                </div>
                <div className="text-foreground-light mb-4 flex-auto leading-relaxed">
                  <Text field={description} />
                </div>
                <div className="mt-auto flex items-center">
                  <>
                    <Link
                      field={link}
                      className="mr-3 flex items-center text-xl font-bold text-[#b44000]"
                    />
                    <div className="flex items-center gap-2 rounded-full border border-white bg-[#b44000] p-2 text-white">
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
  // results of the graphql
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-4 py-9 md:grid-cols-2 lg:grid-cols-5">
        {results.map((item, index) => {
          const imageField = item?.featureImage.jsonValue;
          return (
            <div className="flex items-center justify-center py-9 lg:py-2" key={index}>
              {imageField && <Image field={imageField} className="max-h-20 object-contain" />}
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};

export const ThreeColGridCentered = (props: FeaturesProps) => {
  // results of the graphql
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 justify-evenly gap-6 py-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:py-24">
        {results.map((item, index) => {
          console.log(item);
          const title = item.featureTitle.jsonValue;
          const description = item.featureDescription.jsonValue;
          const image = item.featureImage.jsonValue;
          const link = item.featureLink.jsonValue;
          return (
            <div className="flex flex-col items-center justify-center bg-[#fff] p-4" key={index}>
              {/* Image */}
              <div className="text-background justify-centerl mb-7 flex h-20 w-20 items-center">
                <Image field={image} />
              </div>
              {/* Title and Description */}
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 leading-0.5">
                  <Text tag="h5" className="text-primary" field={title} />
                </div>
                <div className="text-foreground-light text-center">
                  <Text field={description} />
                </div>
                <div className="mt-4">
                  <Link
                    field={link}
                    className="text-primary border-primary mt-3 block w-full border-1 p-3 px-8"
                  />
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
  // results of the graphql
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-6 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {results.map((item, index) => {
          const title = item?.featureTitle.jsonValue;
          const description = item?.featureDescription.jsonValue;
          return (
            <div
              className="group border-border bg-background-teal-tint text-foreground hover:border-brand-teal-deep hover:bg-brand-teal-deep cursor-pointer border p-6 transition-colors"
              key={index}
            >
              <h1 className="text-teal group-hover:text-background mb-2 text-6xl leading-none font-bold md:text-7xl">
                {generateIndexes(index)}
              </h1>
              <div>
                <div className="group-hover:text-background text-foreground mb-3 text-xl leading-snug font-semibold">
                  <Text field={title} />
                </div>
                <div className="text-foreground-light group-hover:text-background/90 leading-relaxed">
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

export const FourColGrid = (props: FeaturesProps) => {
  // results of the graphql
  const results = props.fields.data.datasource.children.results;

  return (
    <FeatureWrapper props={props}>
      <div className="container grid grid-cols-1 gap-20 py-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {results.map((item, index) => {
          const title = item.featureTitle.jsonValue;
          const description = item.featureDescription.jsonValue;
          const image = item.featureImage.jsonValue;
          return (
            <div className="grid grid-cols-[1fr_2fr] gap-2.5" key={index}>
              {/* Image */}
              <div className="flex items-center justify-center rounded-full">
                <Image field={image} />
              </div>
              {/* Title and Description */}
              <div className="flex flex-col justify-center">
                <div className="text-xl leading-9 font-bold">
                  <Text className="text-foreground" field={title} />
                </div>
                <div className="text-background-muted-light leading-8">
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
      <div className="outline-non container grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {results.map((item, index) => {
          const title = item.featureTitle.jsonValue;
          const description = item.featureDescription.jsonValue;
          const image = item.featureImage.jsonValue;
          return (
            <div key={index}>
              <div className="border-border bg-background mb-6 aspect-4/3 w-full overflow-hidden border shadow-sm">
                <Image field={image} className="h-full w-full object-cover" />
              </div>

              <h6 className="text-foreground font-semibold">
                <Text field={title} />
              </h6>

              <p className="text-foreground-muted border-accent mt-2 border-b-2 pb-4 text-base leading-relaxed">
                <Text field={description} />
              </p>
            </div>
          );
        })}
      </div>
    </FeatureWrapper>
  );
};
