import '../styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
       <Layout>
        <Component {...pageProps} />
       </Layout>
    </Provider>

  )
}

export default MyApp;