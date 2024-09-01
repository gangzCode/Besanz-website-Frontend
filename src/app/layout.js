import React ,{Suspense} from "react";

import "../../public/assets/scss/style.scss";
import "../../public/assets/scss/basic/reset.scss";
import "../../public/assets/scss/basic/helper-class.scss";
import "../../public/assets/scss/basic/typography.scss";

import "../../public/assets/css/responsive.css";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from 'next/script'

import Loader from "./components/loader";
import {UserProvider} from "@auth0/nextjs-auth0/client";

// export const metadata = {
//   title: 'Cloud-Based Phone System Canada | Besanz.com',
//   description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
// }



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" /> 

      
           <Script src="https://www.googletagmanager.com/gtag/js?id=G-66TGPJ1GJ9" />
           <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

        gtag('config', 'G-66TGPJ1GJ9');
        `}
           </Script>

           
           <Script id="google-tag">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KKZRKQ8'); `}
            </Script>

        
      </head>

      {/* <body className={inter.className}> */}
      <body>
      
      <Script>{`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKZRKQ8"
      height="0" width="0" style="display:none;visibility:hidden"></iframe> `}</Script>

        <Suspense fallback={<Loader/>}>
            {/* <I18nextProvider i18n={i18n}> */}
            <UserProvider>
              {children}
            </UserProvider>
            {/* </I18nextProvider> */}
          
        </Suspense>
        {/* {children} */}
      </body>
    </html>
  )
}
