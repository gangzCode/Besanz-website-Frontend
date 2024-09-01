import React, { Fragment } from "react";
import LayoutOne from "../layouts";
// import Breadcrumb from "../components/UI/breadcrumb";
import Head from "next/head";

import InformationContent from "../containers/911information/911Information";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: ' Transform your communication strategy with North America smartest business phone solutions. Experience seamless integration and enhanced productivity. ',
}

const Information = () => {

  return (
    <Fragment>
      <LayoutOne>
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
        {/* <Breadcrumb title="911 Information" /> */}

        <InformationContent/>
        
      </LayoutOne>
    </Fragment>
  );
};

export default Information;
