"use client"

import React from "react";
import styles from "./FeatureImageTextOne.module.scss";
import featureData from "@/app/data/features/feature-one.json";


const FeatureImageTextOne = () => {

  return (
    <div className={`${styles.voopoBusiness} ptb--110`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className={styles.thumb}>
              <img
                src={"/assets/images/aboutus.png"}
                alt="Experience the power of smart business phone solutions"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5 sm__mt--40">
            <div className={styles.content}>
              <h2>{featureData.title.en}</h2>

              <p className={styles.firstDesc}>
                {featureData.text.en}
              </p>
              <div dangerouslySetInnerHTML={{ __html: featureData.content.en }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImageTextOne;
