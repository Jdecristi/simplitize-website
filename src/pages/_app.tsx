import '@src/styles/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { AppThemeProvider } from '@src/theme/AppThemeProvider';
import createEmotionCache from '@src/theme/emotionCache';
import { api } from '@src/utils/api';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ClerkProvider {...pageProps}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <AppThemeProvider>
          <Component {...pageProps} />
        </AppThemeProvider>
      </CacheProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
