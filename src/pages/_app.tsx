import { AppProps } from 'next/app';

import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    <Analytics />
  </>
);

export default MyApp;
