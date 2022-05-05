import '../styles/globals.css'


import { wrapper } from '../store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PageWrapper from '../components/pageWrapper';
import Script from 'next/script'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  console.log(process.browser)
  return (<>
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Male_Fashion Template"/>
        <meta name="keywords" content="Male_Fashion, unica, creative, html"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Male-Fashion | Template</title>

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet"/>

        <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/font-awesome.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/elegant-icons.css" type="text/css"/>
        <link rel="stylesheet" href="/css/magnific-popup.css" type="text/css"/>
        <link rel="stylesheet" href="/css/nice-select.css" type="text/css"/>
        <link rel="stylesheet" href="/css/owl.carousel.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/slicknav.min.css" type="text/css"/>
        <link rel="stylesheet" href="/css/style.css" type="text/css"/>
    </Head>

    <PersistGate persistor={store.__persistor} loading={
      <div id="preloder">
          <div class="loader"></div>
      </div>
    }>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </PersistGate>

        
    <Script strategy="beforeInteractive" type="text/javascript" src="src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/owl.carousel.min.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/jquery-3.3.1.min.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/jquery.nice-select.min.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/jquery.nicescroll.min.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/jquery.magnific-popup.min.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/jquery.countdown.min.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/jquery.slicknav.js"></Script>
    <Script strategy="beforeInteractive" type="text/javascript" src="/js/mixitup.min.js"></Script>
    <Script strategy="afterInteractive" type="text/javascript" src="/js/main.js"></Script>
    <Script strategy="afterInteractive" type="text/javascript" src="/js/bootstrap.min.js"></Script>
    </>) 
}

export default wrapper.withRedux(MyApp);

// import App from 'next/app';
// import { useState } from 'react'
// import PageWrapper from '../components/pageWrapper'
// import { wrapper } from '../store/store';
// import { useStore } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// function MyApp({ Component, pageProps, router }) {
//   const store = useStore((state) => state);
//   console.log(process.browser)
//   return process.browser ? (
//     <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
//       {/* <PageWrapper  > */}
//               <Component {...pageProps} />
//           {/* </PageWrapper>    */}
//     </PersistGate>
//   ) : (
//     <PersistGate persistor={store}>
//       {/* <PageWrapper  > */}
//               <Component {...pageProps} />
//           {/* </PageWrapper>    */}
//     </PersistGate>
//   );
// }

// export default wrapper.withRedux(MyApp);
