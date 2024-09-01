"use client"

import React, { Fragment } from "react";
import LayoutOne from "@/app/layouts";
import Breadcrumb from "@/app/components/UI/breadcrumb";
import styles from "../PostDetailsWithSidebar.module.scss";
import BlogSidebar from "@/app/containers/blog/blog-sidebar";

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
                    <img src={"/assets/images/blog/cloud-based-phone-solution-16.jpg"} alt="Phone Solution" />
                  </div>

                  <div className={`${styles.blogContent} pt-4`}>
                    <h1 className={styles.blTitle}>How Besanz is Revolutionizing Remote Work with Video Conferencing

                    </h1>

                    <p>
                    Many businesses have had to adapt to the new reality of working from home, and one of the key challenges 
                    they face is how to communicate effectively with their teams, clients, and partners.

                    </p>


                    <p>
                    Video conferencing is a vital tool for remote work, as it allows for face-to-face interactions, 
                    collaboration, and engagement. However, not all video conferencing solutions are created equal.
                    </p>

                    <p>
                    Some are expensive, complicated, unreliable, or limited in their features and integrations.
                    </p>

                    <p>
                    That’s why Besanz is a game-changer for remote work. Besanz is a cloud-based business phone system 
                    that offers more than just video conferencing. It also provides 
                    <a href= "https://www.besanz.com/features">advanced features</a> 
                    such as:
                    </p>


                    

                    <ul>

                    <li> Business apps and integrations: Besanz connects with over 100 customer relationship management (CRM) and 
                    management information systems (MIS). This allows you to access and update your data, workflows, 
                    and analytics from within the Besanz platform.</li> <br/>
                    
                    <li> Click-to-dial email reporting: Besanz lets you make calls directly from your email inbox, and automatically 
                    logs and reports your call activities. This saves you time and hassle, and helps you track your performance 
                    and productivity.</li> <br/>

                    <li> Video webinar presentations: Besanz enables you to host online events for up to 200 viewers, 
                    with interactive features such as polls, Q&A, chat, and screen sharing. You can also record and share your 
                    webinars for future reference or marketing purposes. </li> <br/>

                    <li> Visual voicemail: Besanz transcribes your voicemails into text and sends them to your email or mobile app. 
                    You can also listen to your voicemails online or offline, and reply with a call or a message. </li> <br/>

                    <li> Softphone for Android, iOS, and web: Besanz gives you the flexibility to make and receive calls from 
                    any device, anywhere. You can also access your contacts, messages, voicemails, call history, and settings 
                    from the Besanz app or web browser. </li> <br/>

                    </ul>

                    

                    <p>
                    Besanz is not only a powerful video conferencing solution, but also a smart business phone system that 
                    streamlines communication, improves productivity, and 
                    <a href= "https://www.besanz.com/blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"> reduces costs.</a> 
                    With Besanz, you can enjoy the benefits 
                    of remote work without compromising on quality or efficiency.
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
