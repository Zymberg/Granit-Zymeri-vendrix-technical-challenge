import { useState } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
// Theme
import 'typeface-mulish';
import ThemeProvider from '../src/theme';
import GlobalStyles from '../src/theme/globalStyles';
import ThemeColorPresets from '../src/theme/ThemeColorPresets';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function VendrixExampleApp(props: AppProps) {
  // INIT
  const { Component, pageProps } = props;
  // @ts-expect-error
  const { dehydratedState } = pageProps;

  // STATE
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider>
        <ThemeColorPresets>
          <GlobalStyles />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
              <Component {...pageProps} suppressHydrationWarning={true} />
            </Hydrate>
          </QueryClientProvider>
        </ThemeColorPresets>
      </ThemeProvider>
    </>
  );
}

// ----------------------------------------------------------------------

VendrixExampleApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  return {
    ...appProps,
  };
};
