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
    <div className="bg-background text-foreground font-body flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 md:py-24">
      <h1 className="text-interactive mb-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Page not found
      </h1>
      <p className="text-foreground-light mb-10 max-w-md text-center text-base leading-relaxed">
        This page does not exist.
      </p>
      <a
        href="/"
        className="text-interactive hover:text-accent-secondary text-sm font-semibold tracking-wide uppercase transition-colors"
      >
        Go to the Home page
      </a>
    </div>
  </>
);

export default NotFound;
