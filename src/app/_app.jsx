import Script from 'next/script';

const App = ({ Component, pageProps }) => (
  <>
    <Script
      src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
      strategy="beforeInteractive"
    />
    <Component {...pageProps} />
  </>
);

export default App;