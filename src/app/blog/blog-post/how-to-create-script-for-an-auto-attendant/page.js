"use client"

import React, { Fragment } from "react";
import LayoutOne from "@/app/layouts";
import Breadcrumb from "@/app/components/UI/breadcrumb";
import styles from "../PostDetailsWithSidebar.module.scss";
import BlogSidebar from "@/app/containers/blog/blog-sidebar";
import Head from "next/head";


const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
}

const BlogPost = () => {
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb title="Blog Details" />

        <div className="blog__details__area pt--120 pb--110 bg--white">
          <div className="container">
            <div className="row">

              <div className="col-12 col-lg-9 col-xl-8">
                <div className={styles.blDetailsInner}>
                  <div className={styles.thumb}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-13.jpg"} alt="Phone Solution" />
                  </div>

                  <div className={`${styles.blogContent} pt-4`}>
                    <h1 className={styles.blTitle}>How to Create Script for an Auto Attendant?

</h1>

                    <p>
                    An auto attendant is a feature of a phone system that greets callers and directs them to the appropriate extension or department. 
                    It can save time and resources, improve customer satisfaction, and enhance your professional image. However, creating a script for an auto attendant can be challenging, as you need to consider various factors such as your audience, your purpose, your tone, and your options.

                    </p>


                    <h2 className={styles.blTitle}>Tip 1: Start With a Greeting and Introduction
</h2>

                    <p>
                    The first part of your script should welcome the caller and introduce your company name and slogan or mission statement. 
                    This will help establish your brand identity and set the tone for the rest of the call. For example:
                    </p>

                    <p>
                    Hello, and thank you for calling Besanz, the leading provider of Cloud-based phone solutions.

                    </p>

    

                  <h2 className={styles.blTitle}>Tip 2: Provide your business hours and location
                  </h2>

                  <p>The next part of your script should inform the caller of your business hours and location, especially if you have different time zones or branches. 
                    This will help the caller know when they can reach you and where they can find you. For example:
                  </p>

                  <p>
                  We are located at 1 Yorkville Ave, Toronto, Ontario, Canada. Our normal business hours are Monday through Friday, from 9 a.m. to 5 p.m. Eastern Time.

                  </p>

                  

                  <h2 className={styles.blTitle}>Tip 3: Offer Your Main Menu Options
</h2>

                  <p>The most important part of your script is the main menu options that allow the caller to select the department or person they want to talk to. 
                    You should keep the options simple, relevant, and easy to follow. You should also use numbers or keywords that the caller can press or say to make their choice. For example:

                  </p>

                  <p>Please choose from the following options:
                  </p>

                  <ul className={styles.blogList}>
                    <li>For sales, press 1 or say “sales”.</li>
                    <li>For customer service, press 2 or say “customer service”.</li>
                    <li>For technical support, press 3 or say “technical support”.</li>
                    <li>To speak to an operator, press 0 or say “operator”.</li>
                  </ul>

                  <h2 className={styles.blTitle}>Tip 4: Repeat the Options and Provide Alternative Support</h2>

                  <p>The last part of your script should repeat the main menu options and provide alternative support options in case the caller needs more assistance or information. 
                    You can also include your website address, email address, or social media accounts where the caller can find more details or contact you online. For example:
                  </p>

                  <p>
                  To repeat this menu, press *. For more information about our products and services, please visit our website at www.besanz.com. 
                  You can also email us at info@besanz.com or follow us on Facebook and Twitter.

                  </p>

                  <p>Creating a script for an auto attendant can be easy if you follow these tips and examples. Remember to keep your script clear, concise, and courteous, and to test it before implementing it on your phone system. 
                    A well-written script for an auto attendant can make a positive impression on your callers and improve your customer experience.
                    </p>

                    <h3>Tips for Creating a Good Auto Attendant Script:</h3>

                    <ul className={styles.blogList}>
                    <li>Keep your message short and sweet. Callers should be able to get the information they need in a few seconds.
                    </li>
                    <li>Use clear and concise language. Avoid using jargon or technical terms that callers may not understand.
                    </li>
                    <li>Speak slowly and clearly. Callers may be listening to your message on a speakerphone or in a noisy environment.
                    </li>
                    <li>Use a friendly and professional tone. You want callers to feel like they're reaching out to a real person, not a machine.
                    </li>
                  </ul>

                    <h3>Here is an Example of a Good Auto Attendant Script:</h3>

                  <p>Welcome to Besanz. Our hours of operation are Monday through Friday, 8am to 5pm Eastern Time.</p>

                  <p>To speak to a sales representative, press 1.</p>

                  <p>To speak to customer service, press 2.
                  </p>

                  <p>
                  To hear our voicemail system, press 3.

                  </p>

                  <p>To repeat this message, press *.
                  </p>

                  <p>This script is clear, concise, and easy to use. It includes all of the essential information, and it uses a friendly and professional tone.
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
