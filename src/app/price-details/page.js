"use client"

import React, { Fragment , useState, useEffect } from "react";
import LayoutOne from "../layouts";
import PricingTableOne from "../containers/pricing-tables/pricing-table-one";
import {annualPriceData, monthlyPriceData, annualOnePriceData,monthlyOnePriceData } from "../data/pricing-tables/pricedetail";
import Breadcrumb from "../components/UI/breadcrumb";
import Head from "next/head";

const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz is a trusted provider of smart business phone solutions in North America. Explore our innovative systems and unlock the full potential of your business. ',
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
        <Breadcrumb 
        // title={t("price_details")} 
        title="Price Details"
        />
        <PricingTableOne background="none" type={"annual"} data={annualPriceData.en} /> 
        <PricingTableOne background="none" type={"monthly"} data={monthlyPriceData.en} /> 
        <PricingTableOne background="none" type={"annual"} data={annualOnePriceData.en} /> 
        <PricingTableOne background="none" type={"monthly"} data={monthlyOnePriceData.en} /> 
      </LayoutOne>
    </Fragment>
  );
};

export default Comparison;
