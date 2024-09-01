"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import CRM from "../containers/crm";
import ServiceTwo from "../containers/services/service-two";
// import Breadcrumb from "../components/UI/breadcrumb";
import Head from "next/head";

const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz is more than just a phone system. It’s a smart communication platform that lets you connect with your customers  from anywhere, on any device. ',
}

const Comparison = () => {
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

        {/* breadcrumb */}
        {/* <Breadcrumb
          // title={t("features")} 
          // title="Features"
        /> */}

        {/* service with text */}
        <ServiceTwo />

        {/* crm */}
        <CRM />

      </LayoutOne>
    </Fragment>
  );
};

export default Comparison;
