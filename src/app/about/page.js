import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import FeatureImageTextOne from "../containers/feature-image-texts/feature-image-text-one";
import AboutContentOne from "../containers/about-contents/about-content-one";
// import TestimonialOne from "../containers/testimonials/testimonial-one";
import Head from "next/head";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'No matter what size or industry your business is in, Besanz has a smart phone solution that suits your needs. ',
}

const About = () => {
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
          // title={t("About_Us")} 
          title="About Us"
        />

        {/* feature */}
        <FeatureImageTextOne />

        {/* testimonials */}
        {/* <TestimonialOne /> */}

        {/* about content */}
        <AboutContentOne />

      </LayoutOne>
    </Fragment>
  );
};

export default About;
