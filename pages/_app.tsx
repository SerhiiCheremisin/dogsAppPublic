import '../styles/global.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import React, { useLayoutEffect, useState, createContext } from 'react';

export const WidthContext = createContext(0);
const ThemeContext = createContext(false);

function MyApp({ Component, pageProps }: AppProps) {

  const [appWidth, setAppWidth] = useState<number>(0);
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (window) {
      window.addEventListener('resize', () => {
        setAppWidth(window.innerWidth);
      })
    }
  })

  return (
    <ThemeContext.Provider value={isThemeDark}>
     <WidthContext.Provider value={appWidth}>
       <Layout>
        <Component {...pageProps} />
       </Layout>
     </WidthContext.Provider>
     </ThemeContext.Provider>
  )
}


export default MyApp;
