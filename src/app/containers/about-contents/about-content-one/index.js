"use client"

import React from "react";
import styles from "./AboutContentOne.module.scss";
import SectionTitleTwo from "@/app/components/UI/section-title/section-title-two";
import aboutContent from "@/app/data/about-content/about-content-one.json";

const AboutContentOne = () => {

  return (
    <div className={`${styles.voopoAboutArea} position-relative`}>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="aboutInner">
              <SectionTitleTwo
                title={aboutContent.title.en}
                text={aboutContent.subTitle.en}
              />
              <div dangerouslySetInnerHTML={{ __html: aboutContent.content.en }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutThumb}>
        <img
          src={"/assets/images/app.png"}
          alt="Smartest phone solutions in North America"
        />
      </div>
    </div>
  );
};

export default AboutContentOne;
