import Head from 'next/head';
import { JSX } from 'react';

/**
 * Rendered in case if we have 404 error
 */
const NotFound = (): JSX.Element => (
  <>
    <Head>
      <title>404: NotFound</title>
    </Head>
    <div className="bg-background text-foreground flex min-h-[50vh] flex-col items-center justify-center px-6 py-16">
      <h1 className="text-foreground font-heading text-3xl font-semibold md:text-4xl">
        Page not found
      </h1>
      <p className="text-foreground-light mt-4 max-w-md text-center text-base">
        This page does not exist.
      </p>
      <a
        href="/"
        className="bg-accent text-background hover:bg-accent/95 mt-8 inline-flex rounded-sm px-6 py-3 text-sm font-semibold transition-colors"
      >
        Go to the Home page
      </a>
    </div>
  </>
);

export default NotFound;
