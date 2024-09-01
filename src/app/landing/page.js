"use client"

import React, { Fragment} from "react";
import LayoutOne from "../layouts";
import WhoAreWe from "../containers/who-are-we";
import ProductReview from "../containers/product-review";
import WhyTrustMe from "../containers/why-trust-me";
import RequestQuote from "../containers/request-quote";
import ContactFaqOne from "../containers/contact-faqs/contact-faq-one";
import Head from "next/head";

const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
}

const Home2 = () => {
return (
    <Fragment>
      <LayoutOne footerBg="white">
      <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          {/* <meta property="og:image" content="https://besanz.com/images/og-image.jpg" /> */}
          <meta property="og:url" content="https://besanz.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Besanz" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          {/* <meta name="twitter:image" content="https://besanz.com/images/og-image.jpg" /> */}
          <meta name="twitter:image:alt" content={metadata.title} />
          {/* <meta name="twitter:site" content="@besanzcom" /> */}
          {/* <meta name="twitter:creator" content="@besanzcom" /> */}
        </Head>
        
        <WhoAreWe />
        <ProductReview />
        <WhyTrustMe />
        <RequestQuote />

      </LayoutOne>
    </Fragment>
  );
};

export default Home2;