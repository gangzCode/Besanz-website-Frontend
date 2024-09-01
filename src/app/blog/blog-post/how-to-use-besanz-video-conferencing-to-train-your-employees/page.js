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
                    <img src={"/assets/images/blog/cloud-based-phone-solution-20.jpg"} alt="Phone Solution" />
                  </div>

                  <div className={`${styles.blogContent} pt-4`}>
                    <h1 className={styles.blTitle}> How to Use Besanz Video Conferencing to Train Your Employees 
                    </h1>

                    <p>
                    Besanz is a cloud-based business phone system that offers video conferencing features, among other things. 
                    Video conferencing is a great way to deliver online training to your remote employees, as it allows you to communicate with 
                    them in real-time, share your screen, and use interactive tools. However, creating effective online training tutorials 
                    using video conferencing requires some planning and preparation.
                    </p>


                    <h2> Conduct a thorough task analysis beforehand. </h2>

                    <p>
                    Before you start creating your online training tutorial, you need to identify the learning objectives, the steps involved in the task, 
                    the skills and knowledge required, and the common challenges or mistakes that your employees might face. This will help you design 
                    a clear and concise online training tutorial that covers all the essential information.
                    </p>


                    <h2> Develop a detailed storyboard and script. </h2>

                    <p>
                    A storyboard is a visual outline of your online training tutorial that shows the sequence of scenes, the content, the interactions, 
                    and the transitions. A script is a written document that contains the narration, dialogue, instructions, and feedback 
                    that you will use in your online training tutorial. These two elements will help you organize your ideas, ensure consistency 
                    and coherence, and avoid unnecessary or redundant information.
                    </p>


                    <h2> Highlight the benefits up front </h2>

                    <p>
                    At the beginning of your online training tutorial, you should explain to your employees what they will learn, 
                    why it is important, and how it will help them in their work. This will motivate them to pay attention and participate 
                    actively in the online training tutorial. You can also use examples or scenarios that show the real-world applications 
                    of the task or skill that you are teaching.
                    </p>


                    <h2> Combine audio with visuals to improve knowledge retention. </h2>
                    

                    <p> 
                   Using both audio and visual elements in your online training tutorial will make it more appealing and memorable for your 
                   employees. You can use voice-over narration, sound effects, music, images, graphics, animations, videos, or screen 
                   recordings to enhance your online training tutorial. However, you should avoid using too many or conflicting elements 
                   that might distract or confuse your employees.
                    </p>

                    <h2> Incorporate supplemental links and online resources. </h2>

                    <p> 
                    Sometimes, your employees might need more information or clarification on a certain topic or concept that you cover 
                    in your online training tutorial. You can provide them with links to additional online resources, such as articles, videos, 
                    podcasts, or websites that they can access at their own pace⁴. This will allow them to deepen their understanding and 
                    explore their interests further.
                    </p>



                    <h2> Invest in a rapid eLearning authoring tool </h2>
                    

                    <p>
                    A rapid eLearning authoring tool is a software application that allows you to create online training tutorials quickly 
                    and easily. You can use templates, themes, characters, interactions, quizzes, and other features to design your online 
                    training tutorial without any coding or programming skills. Some examples of rapid eLearning authoring tools are iSpring 
                    Suite Max, Adobe Captivate, Articulate Storyline, and Lectora Inspire.
                    </p>

                   
                   <h2> Don't try to cover too much ground </h2>

                    <p>
                    One of the common mistakes that online trainers make is trying to cram too much information into one online training 
                    tutorial. This can overwhelm or bore your employees and reduce their attention span and retention rate. Instead, 
                    you should focus on one learning objective per online training tutorial and break it down into manageable chunks. 
                    You can also use microlearning modules that are short, focused, and easy to digest.
                    </p>


                    <h2> Get feedback at every stage </h2>

                    <p>
                    Feedback is essential for improving your online training tutorials and ensuring that they meet the needs and expectations 
                    of your employees. You can get feedback from your peers, managers, subject matter experts, or test groups before you launch 
                    your online training tutorial. You can also get feedback from your employees after they complete your online training tutorial 
                    by using surveys, polls, ratings, comments, or analytics. This will help you identify the strengths and weaknesses of your 
                    online training tutorial and make necessary adjustments.
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
