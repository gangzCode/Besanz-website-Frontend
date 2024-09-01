"use client"

import React, { Fragment } from "react";
import LayoutOne from "@/app/layouts";
import Breadcrumb from "@/app/components/UI/breadcrumb";
import styles from "../PostDetailsWithSidebar.module.scss";
import BlogSidebar from "@/app/containers/blog/blog-sidebar";
import Head from "next/head";


const metadata = {
  title: 'Beyond the Desk: How Cloud-Based Business Phone Solutions Are Changing the Game',
  description: 'Discover the game-changing advantages of cloud-based business phone solutions. Streamline communication, integrate with CRM and MIS  ',
}

const BlogPost = () => {
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
        <Breadcrumb title="Blog Details" />

        <div className="blog__details__area pt--120 pb--110 bg--white">
          <div className="container">
            <div className="row">

              <div className="col-12 col-lg-9 col-xl-8">
                <div className={styles.blDetailsInner}>
                  <div className={styles.thumb}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-8.jpg"} alt="Illustration of Besanz's cloud phone system integrated with CRM and MIS platforms" />
                  </div>

                  <div className={`${styles.blogContent} pt-4`}>
                    <h1 className={styles.blTitle}>Beyond the Desk Why Cloud-Based Business Phone Solutions Are Changing the Game
</h1>

                    <p>
                    In today's digital age, businesses need to be able to communicate with their customers and
employees from anywhere in the world. Traditional landlines and PBX systems are no longer
enough, as they are tied to a physical location. Cloud-based business phone solutions, on the other hand, are not limited by geography. This means that businesses can have a single phone
number that rings on all of their employees' devices, regardless of where they are located.
                    </p>

                    <p>
                    If you are looking for a reliable, affordable and smart business phone solution that can integrate
with your CRM and MIS, you might want to check out Besanz. Besanz is a Canadian company
that offers cloud-based mobile solutions that can streamline your communication, improve your
productivity and reduce your costs. Here are some of the reasons why Besanz is changing the
game for businesses of all sizes and industries.
                    </p>

                    <h2 className={styles.blTitle}>Cloud-Based Phone System</h2>

                    <p>
                    Besanz's phone system is 100% cloud-based, which means you don't need any hardware or
software installation to use it. You can access your phone system from any device, anywhere and anytime. You can also keep your own number or get a new one from Besanz. With Besanz, you can enjoy features such as:
                    </p>

                  <ul className={styles.blogList}>
                    <li>Unlimited calling within Canada and the US</li>
                    <li>Voicemail to email</li>
                    <li>Call forwarding</li>
                    <li>Call recording</li>
                    <li>Call analytics</li>
                    <li>Auto attendant</li>
                    <li>Custom greetings</li>
                    <li>And more</li>
                  </ul>

                  <h2 className={styles.blTitle}>CRM and MIS Integration</h2>

                  <p>Besanz's phone system can integrate with your CRM and MIS platforms, such as Salesforce,
HubSpot, Zoho, Microsoft Dynamics and more. This allows you to:
</p>

                  <ul className={styles.blogList}>
                    <li>Sync your contacts and data across platforms</li>
                    <li>Track and manage your leads and customers</li>
                    <li>Automate your workflows and tasks</li>
                    <li>Generate reports and insights</li>
                    <li>Enhance your customer service and satisfaction</li>
                  </ul>

                  <h2 className={styles.blTitle}>Microsoft Teams Integration</h2>

                  <p>Besanz's phone system can also integrate with Microsoft Teams, the popular collaboration tool
that lets you chat, call, video conference and share files with your team members. With Besanz,
you can:
</p>

                  <ul className={styles.blogList}>
                    <li>Make and receive calls from Teams using your Besanz number</li>
                    <li>Access your Besanz features from Teams interface</li>
                    <li>Switch seamlessly between Teams and Besanz apps</li>
                    <li>Collaborate with your team more efficiently and effectively</li>
                  </ul>

                  <h2 className={styles.blTitle}>24/5 Customer Support</h2>

                  <p>Besanz offers 24/5 customer support via phone, email and chat. You can also request a free demo
on their website to see how their phone system works for your business. Besanz's customer
support team is friendly, knowledgeable and responsive. They will help you with any issues or
questions you might have along the way</p>

<h2 className={styles.blTitle}>How Besanz Can Help Your Business</h2>

                  <p>Besanz can help your business in a number of ways. First, it can help you save money.
Traditional landlines and PBX systems can be expensive, especially if you have a lot of
employees. Besanz, on the other hand, is a pay-as-you-go service, so you only pay for the
features you use.
</p>

<p>Second, Besanz can help you improve your communication and collaboration. With Besanz, you
can have a single phone number that rings on all of your employees' devices. This makes it easy for customers and employees to reach you, no matter where they are located. Besanz also offers a number of features that can help you improve your team's communication, such as call recording and voicemail.
</p>

<p>Third, Besanz can help you improve your customer service. With Besanz, you can offer your
customers 24/7 support, regardless of where they are located. You can also use Besanz to track
customer interactions and improve your training.
</p>

                  </div>
                </div>
              </div>
              
              <div className="col-12 col-lg-3 col-xl-3">
                <BlogSidebar />
              </div>

            </div>
          </div>
        </div>
        
        
      </LayoutOne>
    </Fragment>
  );
};

export default BlogPost;
