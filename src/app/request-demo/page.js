"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import Head from "next/head";
// import CalendlyP from "../containers/calendly";

const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Streamline your communication, enhance productivity, and stay ahead of the competition ',
}

const Calendly = () => {
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
        <Breadcrumb title="Request Demo" />

        <InlineWidget url="https://calendly.com/besanz/30min" />

      </LayoutOne>
    </Fragment>
  );
};

export default Calendly;
