import React from "react";
import styles from "./WhoAreWe.module.scss";
import "./index.css";


const WhoAreWe = () => {

  return (
    <div className="container">
      <div className={styles.whoAreWeWrap}>
        <div className="row">
          <div className="col-lg-6">
            <div className={`${styles.imgWrap} m-imgWrap`}>
              <img src={"/assets/images/hero-image.jpg"} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.contentWrap}>
              <div>
                <h1>How a <span>Cloud-Based</span> Phone Solution Can Revolutionize Your Business Communications</h1>

                <p>In today's fast-paced and interconnected world, effective communication is key to the success of any business. Whether you are a small business owner or a large corporation, you need a reliable and efficient phone system to communicate with your customers, clients, and employees. This is where a cloud-based phone solution offered by Besanz comes in. In this blog, we will explore how a cloud-based phone solution can revolutionize your business communications and help you stay ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;