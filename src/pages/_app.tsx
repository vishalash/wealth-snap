import { AppProps } from 'next/app';

import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-DRSB8XNFLM"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DRSB8XNFLM');
        `}
    </Script>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    <Analytics />
  </>
);

export default MyApp;
