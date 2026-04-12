import { isParamEnabled } from '@/helpers/isParamEnabled';
import { ComponentProps } from '@/lib/component-props';
import {
  Field,
  ImageField,
  RichTextField,
  NextImage as ContentSdkImage,
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  Placeholder,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SocialShare from '../non-sitecore/SocialShare';

interface Fields {
  Title: Field<string>;
  ShortDescription: Field<string>;
  Content: RichTextField;
  Image: ImageField;
}

interface ArticleDetailsProps extends ComponentProps {
  fields: Fields;
}

export const Default = ({ params, fields, rendering }: ArticleDetailsProps) => {
  const { page } = useSitecore();
  const [currentUrl, setCurrentUrl] = useState('');
  const { styles, RenderingIdentifier: id, DynamicPlaceholderId } = params;
  const placeholderKey = `article-details-${DynamicPlaceholderId}`;
  const fullWidthPlaceholderKey = `article-details-full-width-${DynamicPlaceholderId}`;
  const isPageEditing = page.mode.isEditing;
  const hideShareWidget = isParamEnabled(params.HideShareWidget);
  const articleCategory = fields?.Category?.name;
  const date = new Date(fields?.PublishedDate?.value);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const authorName = fields?.Author?.name;
  const readTime = fields?.ReadTime?.value;

  console.log(fields);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!fields) {
    return isPageEditing ? (
      <div className={`component article-details ${styles}`} id={id}>
        [ARTICLE DETAILS]
      </div>
    ) : (
      <></>
    );
  }

  return (
    <>
      <Head>
        <meta property="og:url" content={currentUrl} />
        <meta property="og:name" content={fields?.Title?.value} />
        <meta property="og:title" content={fields?.Title?.value} />
        <meta property="og:description" content={fields?.ShortDescription?.value} />
        <meta property="og:image" content={fields?.Image?.value?.src} />
        <meta property="og:type" content="article" />
      </Head>

      <article className={`component article-details ${styles}`} id={id}>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 py-11">
            {/* Social Share */}
            {!hideShareWidget && (
              <SocialShare
                url={currentUrl}
                title={fields?.Title?.value || ''}
                description={fields?.ShortDescription?.value || ''}
                mediaUrl={fields?.Image?.value?.src || ''}
                className="border-border col-span-12 size-fit border p-3 shadow-sm md:p-4 lg:col-span-1 lg:flex-col"
              />
            )}

            <div className="col-span-12 aspect-video w-full overflow-hidden rounded-sm lg:col-span-9 lg:col-start-2">
              <ContentSdkImage field={fields.Image} className="h-full w-full object-cover" />
            </div>

            <div className="col-span-12 lg:col-span-9 lg:col-start-2">
              {authorName && <div>Written by {authorName}</div>}
              {formattedDate && <span className="text-muted uppercase">{formattedDate}</span>}{' '}
              {readTime && <span> | {readTime} mins read</span>}
            </div>

            {articleCategory && (
              <div className="text-accent-secondary col-span-12 mt-4 flex justify-start text-xl font-bold uppercase lg:col-span-9 lg:col-start-2">
                {articleCategory}
              </div>
            )}

            <div className="col-span-12 mt-0 lg:col-span-9 lg:col-start-2">
              <h2 className="text-[#002d72]">
                <ContentSdkText field={fields.Title} />
              </h2>

              <p className="mt-5 text-lg font-semibold tracking-wide">
                <ContentSdkText field={fields.ShortDescription} />
              </p>

              <div className="rich-text article-content mt-10 text-lg">
                <ContentSdkRichText field={fields.Content} />
              </div>
            </div>

            <div className="col-span-12 mt-12 lg:col-span-9 lg:col-start-2">
              <Placeholder name={placeholderKey} rendering={rendering} />
            </div>
          </div>
        </div>
        <Placeholder name={fullWidthPlaceholderKey} rendering={rendering} />
      </article>
    </>
  );
};
