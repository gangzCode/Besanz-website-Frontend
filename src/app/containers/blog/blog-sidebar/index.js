"use client"

import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import SubscribeEmail from "@/app/components/blog/blog-sidebar/SubscribeEmail";

import styles from "./BlogSidebar.module.scss";

const BlogSidebar = () => {
  return (
    <div className="voopoSidebar">

      {/* Start Serarch */}
      {/* <div className={`${styles.vpWidget} ${styles.search} mb--60 m-blog-Serarch`}>
        <input type="text" placeholder="Search Here" />
        <button>
          <IoIosSearch />
        </button>
      </div> */}
      {/* End Serarch */}

      {/* Start Newsleter */}
      {/* <div className={`${styles.vpWidget} ${styles.newsletter} mb--60`}>
        <h4>Subscribe to Newsletter</h4>
        <SubscribeEmail mailchimpUrl="https://besanz.us21.list-manage.com/subscribe/post?u=34568160078ca5029861ec516&amp;id=f7f23dad6e&amp;f_id=004dcfe1f0" />
      </div> */}
      {/* End Newsleter */}

      {/* Start Recent Post */}
      <div className={`${styles.vpWidget} ${styles.recentPostWrap} mb--60`}>
        <Tab.Container defaultActiveKey="recent">

          <Nav variant="pills" className={`${styles.voopoNav} nav justify-content-center ms-0`}>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="recent">Recent</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="trending">Trending</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="recent" className={styles.singleTabContent}>

            <div className={styles.recentPost}>
                <div className={styles.thumb}>
                <Link href={"blog/blog-post/how-to-use-besanz-video-conferencing-to-train-your-employees"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-20.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                  <Link href={"blog/blog-post/how-to-use-besanz-video-conferencing-to-train-your-employees"}>
                  How to Use Besanz Video Conferencing to Train Your Employees
                    </Link>
                  </h4>
                  <span>11 December 2023</span>
                </div>
              </div>

               <div className={styles.recentPost}>
                <div className={styles.thumb}>
                <Link href={"blog/blog-post/exploring-north-americas-smart-business-phone-solution"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-19.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                  <Link href={"blog/blog-post/exploring-north-americas-smart-business-phone-solution"}>
                    Exploring North America's Smart Business Phone Solution 

                    </Link>
                  </h4>
                  <span>20 November 2023</span>
                </div>
              </div>

               <div className={styles.recentPost}>
                <div className={styles.thumb}>
                <Link href={"blog/blog-post/how-besanz-is-revolutionizing-remote-work-with-video-conferencing"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-16.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                  <Link href={"blog/blog-post/how-besanz-is-revolutionizing-remote-work-with-video-conferencing"}>
                    How Besanz is Revolutionizing Remote Work with Video Conferencing

                    </Link>
                  </h4>
                  <span>16 October 2023</span>
                </div>
              </div>

               <div className={styles.recentPost}>
                <div className={styles.thumb}>
                <Link href={"blog/blog-post/how-besanz-cloud-based-phone-systems-helped-businesses-grow"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-15.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                  <Link href={"blog/blog-post/how-besanz-cloud-based-phone-systems-helped-businesses-grow"}>
                    How Besanz Cloud-Based Phone Systems Helped Businesses Grow

                    </Link>
                  </h4>
                  <span>18 September 2023</span>
                </div>
              </div>  

            <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-to-track-and-optimize-your-call-metrics-with-virtual-phone-systems"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-14.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-to-track-and-optimize-your-call-metrics-with-virtual-phone-systems"}>
                    How to Track and Optimize Your Call Metrics with Virtual Phone Systems

                    </Link>
                  </h4>
                  <span>15 August 2023</span>
                </div>
              </div>


            <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-to-create-script-for-an-auto-attendant"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-13.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-to-create-script-for-an-auto-attendant"}>
                    How to Create Script for an Auto Attendant?

                    </Link>
                  </h4>
                  <span>2 August 2023</span>
                </div>
              </div>


            <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-to-secure-your-data-and-communications-with-cloud-based-business-phone-solutions"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-12.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-to-secure-your-data-and-communications-with-cloud-based-business-phone-solutions"}>
                    How to Secure Your Data and Communications with Cloud-Based Business Phone Solutions

                    </Link>
                  </h4>
                  <span>25 July 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-to-enhance-your-team-collaboration-and-communication-with-cloud-based-business-phone-solutions"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-11.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-to-enhance-your-team-collaboration-and-communication-with-cloud-based-business-phone-solutions"}>
                    How to Enhance Your Team Collaboration and Communication with Cloud-Based Business Phone Solutions

                    </Link>
                  </h4>
                  <span>20 July 2023</span>
                </div>
              </div>

            <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-benefits-of-using-business-sms-and-mms-for-your-cloud-hosted-phone-system"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-10.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-benefits-of-using-business-sms-and-mms-for-your-cloud-hosted-phone-system"}>
                    The Benefits of Using Business SMS & MMS for Your Cloud-Hosted Phone System

                    </Link>
                  </h4>
                  <span>15 July 2023</span>
                </div>
              </div>
            
            <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-top-features-and-functions-of-a-virtual-pbx-from-besanz"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-9.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-top-features-and-functions-of-a-virtual-pbx-from-besanz"}>
                    The Top Features and Functions of a Virtual PBX from Besanz

                    </Link>
                  </h4>
                  <span>10 July 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/beyond-the-desk-why-cloud-based-business-phone-solutions-are-changing-the-game"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-8.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/beyond-the-desk-why-cloud-based-business-phone-solutions-are-changing-the-game"}>
                      Beyond the Desk Why Cloud-Based Business Phone Solutions Are Changing the Game
                    </Link>
                  </h4>
                  <span>5 July 2023</span>
                </div>
              </div>
              
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/unleashing-the-power-of-cloud-a-comparative-analysis-of-business-phone-systems"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-7.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/unleashing-the-power-of-cloud-a-comparative-analysis-of-business-phone-systems"}>
                      Unleashing the Power of Cloud: A Comparative Analysis of Business Phone Systems
                    </Link>
                  </h4>
                  <span>3 July 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-3.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                      Cloud-Based vs. On-Premise Business Phone Systems: Which One is Right for You?
                    </Link>
                  </h4>
                  <span>21 June 2023</span>
                </div>
              </div>
              
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-6.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                      The future of cloud-based business phone solutions
                    </Link>
                  </h4>
                  <span>19 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-4.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                      The Benefits of Cloud-Based Business Phone Solutions for Remote and Hybrid Work
                    </Link>
                  </h4>
                  <span>01 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-5.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                      The Security Benefits of a Cloud-Based Business Phone System
                    </Link>
                  </h4>
                  <span>27 May 2023</span>
                </div>
              </div>

              {/* <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                      The Cost Savings of Switching to a Cloud-Based Phone Solution
                    </Link>
                  </h4>
                  <span>14 May 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-2.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                      How a Cloud-Based Phone Solution Can Revolutionize Your Business Communications
                    </Link>
                  </h4>
                  <span>28 April 2023</span>
                </div>
              </div> */}
            </Tab.Pane>

            <Tab.Pane eventKey="trending" className={styles.singleTabContent}>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                      The Cost Savings of Switching to a Cloud-Based Phone Solution
                    </Link>
                  </h4>
                  <span>14 May 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-2.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                      How a Cloud-Based Phone Solution Can Revolutionize Your Business Communications
                    </Link>
                  </h4>
                  <span>28 April 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-3.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                      Cloud-Based vs. On-Premise Business Phone Systems: Which One is Right for You?
                    </Link>
                  </h4>
                  <span>21 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-4.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                      The Benefits of Cloud-Based Business Phone Solutions for Remote and Hybrid Work
                    </Link>
                  </h4>
                  <span>01 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-5.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                      The Security Benefits of a Cloud-Based Business Phone System
                    </Link>
                  </h4>
                  <span>27 May 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-6.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                      The future of cloud-based business phone solutions
                    </Link>
                  </h4>
                  <span>19 June 2023</span>
                </div>
              </div>
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>
      </div>
      {/* End Recent Post */}

      {/* Start Newsleter */}
      {/* <div className={`${styles.vpWidget} ${styles.banner} mb--60`}>
        <div className={styles.thumb}>
          <Link href={"/blog"}>
            <img src={"/assets/images/blog/banner.png"} alt="voopo voip" />
          </Link>
        </div>
      </div> */}
      {/* End Newsleter */}

      {/* Start Tag */}
      {/* <div className={`${styles.vpWidget} ${styles.voopoTag}`}>
        <ul className={styles.tagList}>
          <li>
            <Link href={"/blog"}>
              Network
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              communication
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Voip
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Voopo
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Techno
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Telecom
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Network
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Cloud
            </Link>
          </li>
        </ul>
      </div> */}
      {/* End Tag */}
    </div>
  );
};

export default BlogSidebar;
