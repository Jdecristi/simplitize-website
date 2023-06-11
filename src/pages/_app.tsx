import '@src/styles/globals.css';

import { api } from '@src/utils/api';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
