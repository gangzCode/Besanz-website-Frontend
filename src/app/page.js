"use client"

import React, {Fragment} from "react";
import LayoutOne from "./layouts";
import ServiceThree from "./containers/services/service-three";
import PriceSelector from "./components/priceselector";
import ContactFaqOne from "./containers/contact-faqs/contact-faq-one";
import Head from "next/head";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useRouter} from "next/navigation";

const metadata = {
    title: 'Cloud-Based Phone System Canada | Besanz.com',
    description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
}

const Home = () => {

    return (
        <Fragment>
            <LayoutOne footerBg="white">

                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description}/>
                    <meta property="og:title" content={metadata.title}/>
                    <meta property="og:description" content={metadata.description}/>
                    {/* <meta property="og:image" content="https://besanz.com/images/og-image.jpg" /> */}
                    <meta property="og:url" content="https://besanz.com/"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:site_name" content="Besanz"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={metadata.title}/>
                    <meta name="twitter:description" content={metadata.description}/>
                    {/* <meta name="twitter:image" content="https://besanz.com/images/og-image.jpg" /> */}
                    <meta name="twitter:image:alt" content={metadata.title}/>
                    {/* <meta name="twitter:site" content="@besanzcom" /> */}
                    {/* <meta name="twitter:creator" content="@besanzcom" /> */}
                </Head>
                {/* QUOTE PAGE IS BUILD MODIFYING CONTACT FAQ ONE */}
                <ContactFaqOne/>
                <PriceSelector/>
                <ServiceThree/>

            </LayoutOne>
        </Fragment>
    );
};

export default Home;
